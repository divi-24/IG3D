import { useGLTF } from '@react-three/drei'

export function Model(props: any) {
  const { nodes, materials }: { nodes: any, materials: any } = useGLTF('/material/final.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Circle002.geometry} material={materials['ambientCG/Asphalt025C/1K-JPG']} />
      <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} />
      <group position={[-0.025, 5.084, -0.128]}>
        <mesh geometry={nodes.Cube002_1.geometry} material={materials['ambientCG/Metal027/1K-JPG']} />
        <mesh geometry={nodes.Cube002_2.geometry} material={materials['Dark metal']} />
        <mesh geometry={nodes.Cube002_3.geometry} material={materials.leaves} />
      </group>
      <mesh geometry={nodes.Plane001.geometry} material={materials['Old concrete road scan']} position={[0, 1.836, 0]} />
      <mesh geometry={nodes.Plane.geometry} material={materials.Flag} position={[0, 0, -0.613]} scale={[1, 1, 1.104]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials.dept_mgmt} position={[0.134, -0.066, -0.049]} />
      <group position={[106.98, 3.478, -129.546]} scale={1.88}>
        <mesh geometry={nodes.Cube007_1.geometry} material={materials.PaletteMaterial004} />
        <mesh geometry={nodes.Cube007_2.geometry} material={materials['Red velvet.001']} />
        <mesh geometry={nodes.Cube007_3.geometry} material={materials['nescafe_logo-removebg-preview.001']} />
        <mesh geometry={nodes.Cube007_4.geometry} material={materials['coffeeeee-removebg-preview.002']} />
        <mesh geometry={nodes.Cube007_5.geometry} material={materials['poster 2.001']} />
        <mesh geometry={nodes.Cube007_6.geometry} material={materials['poster4.001']} />
        <mesh geometry={nodes.Cube007_7.geometry} material={materials['poster1.002']} />
        <mesh geometry={nodes.Cube007_8.geometry} material={materials['poster444.003']} />
      </group>
      <group position={[-1.131, -1.509, -1.826]}>
        <mesh geometry={nodes.Cube024.geometry} material={materials.PaletteMaterial005} />
        <mesh geometry={nodes.Cube024_1.geometry} material={materials.PaletteMaterial006} />
        <mesh geometry={nodes.Cube024_2.geometry} material={materials.PaletteMaterial007} />
        <mesh geometry={nodes.Cube024_3.geometry} material={materials.PaletteMaterial008} />
        <mesh geometry={nodes.Cube024_4.geometry} material={materials['Textured Plaster Mix.006']} />
        <mesh geometry={nodes.Cube024_5.geometry} material={materials['esquadria branca.026']} />
      </group>
      <mesh geometry={nodes.Plane004.geometry} material={materials['Concrete wall']} />
      <mesh geometry={nodes.BézierCurve.geometry} material={materials['Asphalt.001']} />
      <mesh geometry={nodes.Cube019.geometry} material={materials['material.001']} position={[209.591, -1.284, 85.281]} scale={[1.504, 1.871, 1.504]} />
      <group position={[209.591, -1.284, 82.721]} scale={[1.504, 1.871, 1.504]}>
        <mesh geometry={nodes.Cube014.geometry} material={materials['Glass.002']} />
        <mesh geometry={nodes.Cube014_1.geometry} material={materials['Material.212']} />
      </group>
      <group position={[209.591, -1.284, 82.772]} scale={[1.504, 1.871, 1.504]}>
        <mesh geometry={nodes.Cube020_1.geometry} material={materials['Maldivian Coral Brick Wall Texture.001']} />
        <mesh geometry={nodes.Cube020_2.geometry} material={materials['Concrete.001']} />
      </group>
      <mesh geometry={nodes.Plane005.geometry} material={materials.Fence} />
      <mesh geometry={nodes.Plane257.geometry} material={materials['black metal.001']} />
      <mesh geometry={nodes.Plane258.geometry} material={materials['Assorted Screw Profiles.002']} />
      <mesh geometry={nodes.Plane261.geometry} material={materials.PaletteMaterial009} />
      <mesh geometry={nodes.Plane265.geometry} material={materials['decal.001']} />
      <mesh geometry={nodes.Plane300.geometry} material={materials['Material.006']} />
      <mesh geometry={nodes.Plane303.geometry} material={materials['Black plastic PL.001']} />
      <mesh geometry={nodes.Plane338.geometry} material={materials['White.001']} />
      <mesh geometry={nodes.Plane346.geometry} material={materials['flooкWhite.001']} />
      <mesh geometry={nodes.Plane473.geometry} material={materials['Paving street']} />
      <group position={[0, -11.133, -0.912]}>
        <mesh geometry={nodes.Cube075.geometry} material={materials.PaletteMaterial015} />
        <mesh geometry={nodes.Cube075_1.geometry} material={materials.BOARD1} />
        <mesh geometry={nodes.Cube075_2.geometry} material={materials.BOARD2} />
      </group>
      <mesh geometry={nodes['02_3_02_0'].geometry} material={materials.material_1} />
      <mesh geometry={nodes.tree4_bark_0.geometry} material={materials.bark} />
      <mesh geometry={nodes.Circle_1.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Circle_2.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Circle_3.geometry} material={materials.PaletteMaterial002} />
      <mesh geometry={nodes.Cube029_1.geometry} material={materials['Old Roof']} />
      <mesh geometry={nodes.Cube029_2.geometry} material={materials['door MF wood']} />
      <mesh geometry={nodes.Cube029_3.geometry} material={materials.PaletteMaterial003} />
      <mesh geometry={nodes.Cube029_4.geometry} material={materials.Plaster} />
      <mesh geometry={nodes.Cube029_5.geometry} material={materials['Painted Plaster Wall.001']} />
      <mesh geometry={nodes.Cube029_6.geometry} material={materials['Amberlite Marble']} />
      <mesh geometry={nodes.Cube029_7.geometry} material={materials['red warning']} />
      <mesh geometry={nodes.Cube029_8.geometry} material={materials['heat pump']} />
      <mesh geometry={nodes.Cube003_1.geometry} material={materials['Material.076']} />
      <mesh geometry={nodes.Cube003_2.geometry} material={materials.ece} />
      <mesh geometry={nodes.Cube003_3.geometry} material={materials.cse} />
      <mesh geometry={nodes.Cylinder017_1.geometry} material={materials['IGDTUW board']} />
      <mesh geometry={nodes.Cylinder017_2.geometry} material={materials['Real IGDTUW Board']} />
      <mesh geometry={nodes.Cylinder017_3.geometry} material={materials['ig LOGO']} />
      <mesh geometry={nodes.Cube.geometry} material={materials['dept of it']} />
      <mesh geometry={nodes.Cube_1.geometry} material={materials['dept of ai and ds']} />
      <mesh geometry={nodes.Cube011_1.geometry} material={materials.PaletteMaterial012} />
      <mesh geometry={nodes.Cube011_2.geometry} material={materials.PaletteMaterial013} />
      <mesh geometry={nodes.Cube011_3.geometry} material={materials.PaletteMaterial014} />
      <mesh geometry={nodes.Cube011_4.geometry} material={materials['stuccoBrushed_white.001']} />
      <mesh geometry={nodes.Cube011_5.geometry} material={materials['Material.192']} />
      <mesh geometry={nodes.Cube011_6.geometry} material={materials['Material.193']} />
      <mesh geometry={nodes.Cube011_7.geometry} material={materials.PaletteMaterial002} />
      <mesh geometry={nodes.Cube011_8.geometry} material={materials['Scene_-_Root.003']} />
      <mesh geometry={nodes.Cube011_9.geometry} material={materials.Plaster} />
      <mesh geometry={nodes.Cube011_10.geometry} material={materials.PaletteMaterial010} />
      <mesh geometry={nodes.Cube011_11.geometry} material={materials.PaletteMaterial006} />
      <mesh geometry={nodes.Cube011_12.geometry} material={materials.win_RAL7024} />
      <mesh geometry={nodes.Cube011_13.geometry} material={materials.PaletteMaterial007} />
      <mesh geometry={nodes.Cube011_14.geometry} material={materials.PaletteMaterial011} />
      <mesh geometry={nodes.Cube011_15.geometry} material={materials['heat pump']} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.PLANT02} />
      <mesh geometry={nodes.Object_3_1.geometry} material={materials.dirt} />
      <mesh geometry={nodes.Object_3_2.geometry} material={materials.material} />
      <mesh geometry={nodes.Object_3_3.geometry} material={materials.PLANT01} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Vegetation_Bark_Maple_1} />
      <mesh geometry={nodes.Object_7_1.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Object_7_2.geometry} material={materials['material.002']} />
      <mesh geometry={nodes.Cylinder077_Material010_0_1.geometry} material={materials['Material.155']} />
      <mesh geometry={nodes.Cylinder077_Material010_0_2.geometry} material={materials['Material.156']} />
      <mesh geometry={nodes.Cylinder077_Material010_0_3.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Cylinder077_Material010_0_4.geometry} material={materials['Material.153']} />
    </group>
  )
}

useGLTF.preload('/material/final.glb')
