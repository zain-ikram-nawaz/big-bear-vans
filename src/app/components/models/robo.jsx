import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export default function Robo(props) {
  const { nodes, materials } = useGLTF('/robo.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <PerspectiveCamera
          makeDefault={false}
          far={100000}
          near={70}
          fov={45}
          position={[0, 248.98, 360]}
          rotation={[0.014, 0, 0]}
        />
        <pointLight intensity={5} decay={2} distance={2000} position={[-595, 579, -393]} />
        <group position={[0, 146, -1000]} scale={0.3}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Shape_0.geometry}
            material={nodes.Shape_0.material}
            position={[-1919, 250, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Shape_1.geometry}
            material={nodes.Shape_1.material}
            position={[696, 250, -0.02]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Shape_2.geometry}
            material={nodes.Shape_2.material}
            position={[1319, 250, -0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Shape_3.geometry}
            material={nodes.Shape_3.material}
            position={[-1165, 250, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Shape_4.geometry}
            material={nodes.Shape_4.material}
            position={[-1265, 50, 0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Shape_5.geometry}
            material={nodes.Shape_5.material}
            position={[42, 250, 0.02]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Shape_6.geometry}
            material={nodes.Shape_6.material}
            position={[-612, 250, 0.03]}
          />
        </group>
        <group position={[-2.755, 25.677, 0]} scale={0.8}>
          <group position={[-0.184, 58.947, 2.035]}>
            <group position={[0.184, 183.554, 18.622]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Head_2.geometry}
                material={nodes.Head_2.material}
                position={[0, 42.94, 4.004]}
              />
            </group>
            <group position={[0.184, 189.772, 5.252]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={nodes.Cube.material}
                position={[0, -13.24, -0.347]}
                rotation={[0.122, 0, 0]}
                scale={1.25}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder_3.geometry}
                material={nodes.Cylinder_3.material}
                position={[0, -34.32, -3.149]}
                rotation={[0.206, 0, 0]}
              />
              <group position={[0.002, -9.408, -0.646]} rotation={[0.429, 0, 0]}>
                <group position={[20.598, 0, 0]} scale={[-1, 1, 1]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_4.geometry}
                    material={nodes.Cylinder_4.material}
                    rotation={[0.13, 0, -0.279]}
                  />
                </group>
                <group position={[-20.598, 0, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_4_1.geometry}
                    material={nodes.Cylinder_4_1.material}
                    rotation={[0.13, 0, -0.279]}
                  />
                </group>
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={nodes.Cylinder.material}
                position={[0, 12.026, 4.412]}
                rotation={[0.13, 0, 0]}
              />
              <group position={[0, -13.24, -0.347]} rotation={[0.122, 0, 0]} scale={1.25}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_8_instance_1.geometry}
                  material={nodes.mesh_8_instance_1.material}
                  position={[11, 0, 0]}
                  rotation={[0, 0, 0.14]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_8_instance_2.geometry}
                  material={nodes.mesh_8_instance_2.material}
                  position={[9.526, 0, 5.5]}
                  rotation={[0, -Math.PI / 6, 0.14]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_8_instance_3.geometry}
                  material={nodes.mesh_8_instance_3.material}
                  position={[5.5, 0, 9.526]}
                  rotation={[0, -Math.PI / 3, 0.14]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_8_instance_4.geometry}
                  material={nodes.mesh_8_instance_4.material}
                  position={[0, 0, 11]}
                  rotation={[-0.14, -Math.PI / 2, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_8_instance_5.geometry}
                  material={nodes.mesh_8_instance_5.material}
                  position={[-5.5, 0, 9.526]}
                  rotation={[-Math.PI, -Math.PI / 3, -3.002]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_8_instance_6.geometry}
                  material={nodes.mesh_8_instance_6.material}
                  position={[-9.526, 0, 5.5]}
                  rotation={[-Math.PI, -Math.PI / 6, -3.002]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_8_instance_7.geometry}
                  material={nodes.mesh_8_instance_7.material}
                  position={[-11, 0, 0]}
                  rotation={[-Math.PI, 0, -3.002]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_8_instance_8.geometry}
                  material={nodes.mesh_8_instance_8.material}
                  position={[-9.526, 0, -5.5]}
                  rotation={[Math.PI, Math.PI / 6, -3.002]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_8_instance_9.geometry}
                  material={nodes.mesh_8_instance_9.material}
                  position={[-5.5, 0, -9.526]}
                  rotation={[Math.PI, Math.PI / 3, -3.002]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_8_instance_10.geometry}
                  material={nodes.mesh_8_instance_10.material}
                  position={[0, 0, -11]}
                  rotation={[0.14, Math.PI / 2, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_8_instance_11.geometry}
                  material={nodes.mesh_8_instance_11.material}
                  position={[5.5, 0, -9.526]}
                  rotation={[0, Math.PI / 3, 0.14]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_8_instance_12.geometry}
                  material={nodes.mesh_8_instance_12.material}
                  position={[9.526, 0, -5.5]}
                  rotation={[0, Math.PI / 6, 0.14]}
                />
              </group>
            </group>
            <group position={[-112.74, 26.226, 1.711]} scale={[-1, 1, 1]}>
              <group position={[-40.588, 98.305, -3.471]} rotation={[0, 0, 0.086]}>
                <group position={[24.873, 7.426, 2.202]}>
                  <group position={[20.542, -85.632, 2.657]} rotation={[0, -0.142, 0]}>
                    <group position={[-0.746, -0.016, -0.394]} rotation={[0.324, 0, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Rectangle_3.geometry}
                        material={nodes.Rectangle_3.material}
                        position={[1.628, -2.934, 1.693]}
                        rotation={[-0.749, 1.54, 0.404]}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Ellipse_3.geometry}
                        material={nodes.Ellipse_3.material}
                        position={[0.019, 22.11, -8.153]}
                        rotation={[1.209, -0.001, 0.064]}
                      />
                    </group>
                    <group position={[-4.79, -12.261, 1.36]} rotation={[0.324, 0, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Hand.geometry}
                        material={nodes.Hand.material}
                        position={[-9.435, -91.204, 36.55]}
                        rotation={[0.28, 0.939, 2.475]}
                        scale={[-1.4, 1.4, 1.4]}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Ellipse_5.geometry}
                        material={nodes.Ellipse_5.material}
                        position={[-7.608, -0.806, -0.894]}
                        rotation={[-0.75, 1.536, 0.401]}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Rectangle_4.geometry}
                        material={nodes.Rectangle_4.material}
                        position={[-4.098, -8.119, 1.665]}
                        rotation={[-0.749, 1.54, 0.404]}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Ellipse_4.geometry}
                        material={nodes.Ellipse_4.material}
                        position={[3.988, -14.413, 4.283]}
                        rotation={[1.209, -0.001, 0.064]}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube_3.geometry}
                        material={nodes.Cube_3.material}
                        position={[-0.423, -62.579, 23.357]}
                        rotation={[0.998, 1.409, -1.444]}
                      />
                    </group>
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_2.geometry}
                    material={nodes.Cube_2.material}
                    position={[23.345, -26.19, -4.771]}
                    rotation={[0, 0, 0.368]}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_6.geometry}
                  material={nodes.Ellipse_6.material}
                  position={[15.042, 1.437, -2.583]}
                  rotation={[-Math.PI / 2, 1.466, -Math.PI / 2]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_2.geometry}
                  material={nodes.Ellipse_2.material}
                  position={[13.388, 1.263, -2.583]}
                  rotation={[-Math.PI / 2, 1.466, -Math.PI / 2]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Rectangle_2.geometry}
                  material={nodes.Rectangle_2.material}
                  position={[3.272, -0.387, -7.254]}
                  rotation={[0, 0, -3.029]}
                />
              </group>
            </group>
            <group position={[112.738, 26.226, 1.711]}>
              <group position={[-40.588, 98.305, -3.471]} rotation={[0, 0, 0.086]}>
                <group position={[24.873, 7.426, 2.202]}>
                  <group position={[20.542, -85.632, 2.657]} rotation={[0, -0.142, 0]}>
                    <group position={[-0.746, -0.016, -0.394]} rotation={[0.324, 0, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Rectangle_3_1.geometry}
                        material={nodes.Rectangle_3_1.material}
                        position={[1.628, -2.934, 1.693]}
                        rotation={[-0.749, 1.54, 0.404]}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Ellipse_3_1.geometry}
                        material={nodes.Ellipse_3_1.material}
                        position={[0.019, 22.11, -8.153]}
                        rotation={[1.209, -0.001, 0.064]}
                      />
                    </group>
                    <group position={[-4.79, -12.261, 1.36]} rotation={[0.324, 0, 0]}>
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Hand_2.geometry}
                        material={nodes.Hand_2.material}
                        position={[-9.435, -91.204, 36.55]}
                        rotation={[0.28, 0.939, 2.475]}
                        scale={[-1.4, 1.4, 1.4]}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Ellipse_5_1.geometry}
                        material={nodes.Ellipse_5_1.material}
                        position={[-7.608, -0.806, -0.894]}
                        rotation={[-0.75, 1.536, 0.401]}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Rectangle_4_1.geometry}
                        material={nodes.Rectangle_4_1.material}
                        position={[-4.098, -8.119, 1.665]}
                        rotation={[-0.749, 1.54, 0.404]}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Ellipse_4_1.geometry}
                        material={nodes.Ellipse_4_1.material}
                        position={[3.988, -14.413, 4.283]}
                        rotation={[1.209, -0.001, 0.064]}
                      />
                      <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube_3_1.geometry}
                        material={nodes.Cube_3_1.material}
                        position={[-0.423, -62.579, 23.357]}
                        rotation={[0.998, 1.409, -1.444]}
                      />
                    </group>
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_2_1.geometry}
                    material={nodes.Cube_2_1.material}
                    position={[23.345, -26.19, -4.771]}
                    rotation={[0, 0, 0.368]}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_6_1.geometry}
                  material={nodes.Ellipse_6_1.material}
                  position={[15.042, 1.437, -2.583]}
                  rotation={[-Math.PI / 2, 1.466, -Math.PI / 2]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_2_1.geometry}
                  material={nodes.Ellipse_2_1.material}
                  position={[13.388, 1.263, -2.583]}
                  rotation={[-Math.PI / 2, 1.466, -Math.PI / 2]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Rectangle_2_1.geometry}
                  material={nodes.Rectangle_2_1.material}
                  position={[3.272, -0.387, -7.254]}
                  rotation={[0, 0, -3.029]}
                />
              </group>
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body.geometry}
              material={nodes.Body.material}
              position={[0.184, -111.859, 10.701]}>
              <group
                position={[-67.84, 234.757, -10.055]}
                rotation={[0, 0, -0.094]}
                scale={[-1, 1, 1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse.geometry}
                  material={nodes.Ellipse.material}
                  position={[3.583, 0.585, -10.71]}
                  rotation={[0, 0, 0.105]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Rectangle.geometry}
                  material={nodes.Rectangle.material}
                  position={[0, 0, -0.741]}
                  rotation={[0, 0, 0.113]}
                />
              </group>
              <group position={[67.823, 234.789, -10.055]} rotation={[0, 0, 0.086]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_1.geometry}
                  material={nodes.Ellipse_1.material}
                  position={[3.583, 0.585, -10.71]}
                  rotation={[0, 0, 0.105]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Rectangle_1.geometry}
                  material={nodes.Rectangle_1.material}
                  position={[0, 0, -0.741]}
                  rotation={[0, 0, 0.113]}
                />
              </group>
            </mesh>
          </group>
          <group position={[1.369, 24.236, 4.707]}>
            <group position={[-1.368, 43.102, 4.056]}>
              <group position={[20.598, 0, 0]} scale={[-1, 1, 1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder_4_2.geometry}
                  material={nodes.Cylinder_4_2.material}
                  rotation={[0.13, 0, -0.279]}
                />
              </group>
              <group position={[-20.598, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder_4_3.geometry}
                  material={nodes.Cylinder_4_3.material}
                  rotation={[0.13, 0, -0.279]}
                />
              </group>
            </group>
            <group
              position={[-49.1, 2.78, 23.602]}
              rotation={[0.128, -0.331, 0]}
              scale={[-1, 1, 1]}>
              <group position={[2.574, -66.669, 0.634]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_3_2.geometry}
                  material={nodes.Cube_3_2.material}
                  position={[-0.696, -51.541, -1.796]}
                  rotation={[Math.PI / 2, 0, -Math.PI]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Rectangle_9.geometry}
                  material={nodes.Rectangle_9.material}
                  position={[-2.543, -2.131, -2.255]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[1, 1.003, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Rectangle_10.geometry}
                  material={nodes.Rectangle_10.material}
                  position={[-9.696, -92.905, -2.255]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[1, 1.003, 1]}
                />
                <group position={[-2.574, -114.512, -2.908]} rotation={[-0.142, 0, 0]}>
                  <group position={[0, -160.39, -18.689]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube_5.geometry}
                      material={nodes.Cube_5.material}
                      position={[1.314, -9.356, 18.236]}
                      rotation={[0.009, -0.14, 0]}
                    />
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Ellipse_5_2.geometry}
                    material={nodes.Ellipse_5_2.material}
                    position={[2.806, -61.163, -29.887]}
                    rotation={[1.448, 0, Math.PI]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_4.geometry}
                    material={nodes.Cube_4.material}
                    position={[1.262, -76.586, 0.276]}
                    rotation={[1.58, 0, -Math.PI]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Ellipse_4_2.geometry}
                    material={nodes.Ellipse_4_2.material}
                    position={[1.314, -12.666, 0.86]}
                    rotation={[1.58, 0, -Math.PI]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rectangle_12.geometry}
                    material={nodes.Rectangle_12.material}
                    position={[7.776, -10.931, 0.553]}
                    rotation={[-1.562, Math.PI / 2, 0]}
                    scale={[1, 1.003, 1]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rectangle_11.geometry}
                    material={nodes.Rectangle_11.material}
                    position={[-18.023, -10.931, 0.553]}
                    rotation={[-1.562, Math.PI / 2, 0]}
                    scale={[1, 1.003, 1]}
                  />
                </group>
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_3_2.geometry}
                material={nodes.Ellipse_3_2.material}
                position={[1.276, -29.423, -1.276]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_2_2.geometry}
                material={nodes.Ellipse_2_2.material}
                position={[1.276, -23.291, -1.276]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_8.geometry}
                material={nodes.Rectangle_8.material}
                position={[-11.82, -51.343, -1.622]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[1, 1.003, 1]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_7.geometry}
                material={nodes.Rectangle_7.material}
                position={[-2.68, -9.709, 0.025]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[1, 1.003, 1]}
              />
            </group>
            <group position={[49.101, 2.78, 23.602]} rotation={[0.128, 0.305, 0]}>
              <group position={[2.574, -66.669, 0.634]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_3_3.geometry}
                  material={nodes.Cube_3_3.material}
                  position={[-0.696, -51.541, -1.796]}
                  rotation={[Math.PI / 2, 0, -Math.PI]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Rectangle_9_1.geometry}
                  material={nodes.Rectangle_9_1.material}
                  position={[-2.543, -2.131, -2.255]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[1, 1.003, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Rectangle_10_1.geometry}
                  material={nodes.Rectangle_10_1.material}
                  position={[-9.696, -92.905, -2.255]}
                  rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  scale={[1, 1.003, 1]}
                />
                <group position={[-2.574, -114.512, -2.908]} rotation={[-0.142, 0, 0]}>
                  <group position={[0, -160.39, -18.689]}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={nodes.Cube_5_1.geometry}
                      material={nodes.Cube_5_1.material}
                      position={[1.314, -9.356, 18.236]}
                      rotation={[0.009, -0.14, 0]}
                    />
                  </group>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Ellipse_5_3.geometry}
                    material={nodes.Ellipse_5_3.material}
                    position={[2.806, -61.163, -29.887]}
                    rotation={[1.448, 0, Math.PI]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_4_1.geometry}
                    material={nodes.Cube_4_1.material}
                    position={[1.262, -76.586, 0.276]}
                    rotation={[1.58, 0, -Math.PI]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Ellipse_4_3.geometry}
                    material={nodes.Ellipse_4_3.material}
                    position={[1.314, -12.666, 0.86]}
                    rotation={[1.58, 0, -Math.PI]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rectangle_12_1.geometry}
                    material={nodes.Rectangle_12_1.material}
                    position={[7.776, -10.931, 0.553]}
                    rotation={[-1.562, Math.PI / 2, 0]}
                    scale={[1, 1.003, 1]}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Rectangle_11_1.geometry}
                    material={nodes.Rectangle_11_1.material}
                    position={[-18.023, -10.931, 0.553]}
                    rotation={[-1.562, Math.PI / 2, 0]}
                    scale={[1, 1.003, 1]}
                  />
                </group>
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_3_3.geometry}
                material={nodes.Ellipse_3_3.material}
                position={[1.276, -29.423, -1.276]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ellipse_2_3.geometry}
                material={nodes.Ellipse_2_3.material}
                position={[1.276, -23.291, -1.276]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_8_1.geometry}
                material={nodes.Rectangle_8_1.material}
                position={[-11.82, -51.343, -1.622]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[1, 1.003, 1]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_7_1.geometry}
                material={nodes.Rectangle_7_1.material}
                position={[-2.68, -9.709, 0.025]}
                rotation={[Math.PI / 2, Math.PI / 2, 0]}
                scale={[1, 1.003, 1]}
              />
            </group>
            <group position={[-1.369, 13.504, -0.959]}>
              <group position={[-45.453, -13.747, 14.787]} scale={[-1, 1, 1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Rectangle_5.geometry}
                  material={nodes.Rectangle_5.material}
                  position={[-15.648, 1.409, 1.519]}
                  rotation={[Math.PI, Math.PI / 2, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_2.geometry}
                  material={nodes.Ellipse_2.material}
                  position={[0, 0, -21.968]}
                  rotation={[0, 0, -Math.PI]}
                />
              </group>
              <group position={[48.588, -13.747, 14.787]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Rectangle_5_1.geometry}
                  material={nodes.Rectangle_5_1.material}
                  position={[-15.648, 1.409, 1.519]}
                  rotation={[Math.PI, Math.PI / 2, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ellipse_3.geometry}
                  material={nodes.Ellipse_3.material}
                  position={[0, 0, -21.968]}
                  rotation={[0, 0, -Math.PI]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_4_2.geometry}
                material={nodes.Rectangle_4_2.material}
                position={[0, -13.173, -5.528]}
                rotation={[-Math.PI, 0, 0]}
                scale={[1, 0.875, 1]}
              />
              <group position={[0, -13.173, 0.664]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Rectangle_3_2.geometry}
                  material={nodes.Rectangle_3_2.material}
                  position={[25.709, 0, 0]}
                  rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                  scale={[1, 0.875, 1]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rectangle_2.geometry}
                material={nodes.Rectangle_2.material}
                position={[0, 61.489, 0.664]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
          </group>
        </group>
        <PerspectiveCamera
          makeDefault={false}
          far={100000}
          near={70}
          fov={45}
          position={[-6.28, 219.995, 1670.171]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/robo.glb')