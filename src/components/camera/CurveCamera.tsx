import { CatmullRomCurve3, MathUtils, PerspectiveCamera as PC } from "three";
import DebugCurve from "../../utils/DebugCurve";
import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

type CurveCameraProps = {
  debug: boolean;
  lerpFactor: number;
  scrollSpeed: number;
  curve: CatmullRomCurve3;
  position: [number, number, number];
  scrollProgress: number;
  setScrollProgress: React.Dispatch<React.SetStateAction<number>>;
};

const CurveCamera = ({
  curve,
  position,
  debug = false,
  lerpFactor,
  scrollSpeed,
  scrollProgress,
  setScrollProgress,
}: CurveCameraProps) => {
  const cameraRef = useRef<PC>(null);
  const controlsRef = useRef<CameraControls>(null);

  const targetScrollProgress = useRef(scrollProgress);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      targetScrollProgress.current += e.deltaY * scrollSpeed;
    };

    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useFrame(() => {
    if (cameraRef.current) {
      const newProgress = MathUtils.lerp(
        scrollProgress,
        targetScrollProgress.current,
        lerpFactor
      );

      setScrollProgress(newProgress);
      const point = curve.getPoint(newProgress);
      cameraRef.current?.position.copy(point);
    }
  });

  return (
    <>
      {debug && <DebugCurve curve={curve} />}
      <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        fov={75}
        position={position}
      />
      <CameraControls ref={controlsRef} camera={cameraRef.current as PC} />
    </>
  );
};

export default CurveCamera;
