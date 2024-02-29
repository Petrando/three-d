import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Room({section, ...props}) {
  
  const { nodes, materials } = useGLTF("/images/3d/roomUpgraded.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.Bookie}
        position={[-1.079, 1.647, -1.708]}
        rotation={[0, -0.084, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.Yellow}
        position={[-0.685, 1.791, -1.643]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.197, 1.102, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Book Variant"]}
        position={[-0.618, 1.773, -1.645]}
        rotation={[Math.PI / 2, 0.093, -Math.PI / 2]}
        scale={[1.197, 0.882, 0.879]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.Bookie}
        position={[-1.76, 2.208, 1.249]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={[1.8, 1.102, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Book Variant"]}
        position={[-1.779, 2.21, 1.189]}
        rotation={[-Math.PI / 2, -1.57, 0]}
        scale={[1.8, 0.882, 0.879]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["Book Variant"]}
        position={[-1.78, 2.203, 1.32]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={[1.8, 1.102, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials.Yellow}
        position={[-1.815, 2.918, 1.243]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={[1.8, 1.102, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials.Yellow}
        position={[-1.834, 2.921, 1.183]}
        rotation={[-Math.PI / 2, -1.57, 0]}
        scale={[1.8, 0.882, 0.879]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials.Bookie}
        position={[-1.834, 2.913, 1.315]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={[1.8, 1.102, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials.Bookie}
        position={[-1.834, 2.868, 1.403]}
        rotation={[-1.673, -1.571, 0]}
        scale={[1.416, 1.102, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials.Yellow}
        position={[-1.682, 1.975, 0.957]}
        scale={[1.8, 1.102, 0.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials["Material.005"]}
        position={[-1.656, 1.949, 0.698]}
        rotation={[0, 1.036, 0]}
        scale={[0.056, 0.07, 0.056]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006.geometry}
          material={materials.Cacti}
          position={[0, 1.784, 0]}
          scale={[0.926, 1.647, 0.926]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007.geometry}
          material={materials.Cacti}
          position={[0.736, 2.387, -0.294]}
          rotation={[0, 0, -0.617]}
          scale={[0.473, 0.841, 0.473]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere008.geometry}
          material={materials.Cacti}
          position={[-0.136, 2.159, 0.762]}
          rotation={[1.046, 0.814, -0.314]}
          scale={[0.372, 0.661, 0.372]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials["Material.005"]}
        position={[-1.594, 0.28, 1.563]}
        rotation={[0, 1.036, 0]}
        scale={[0.134, 0.229, 0.134]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.004"]}
          position={[-1.078, 1.534, 0.429]}
          rotation={[0.447, -0.998, 0.446]}
          scale={[7.49, 5.458, 7.382]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.004"]}
          position={[-1.223, 1.856, -0.463]}
          rotation={[Math.PI, -1.402, Math.PI]}
          scale={[6.46, 4.279, 6.46]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.004"]}
          position={[0.732, 2.042, -0.234]}
          rotation={[-Math.PI, 0.578, -Math.PI]}
          scale={[5.889, 4.47, 5.889]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["Material.004"]}
          position={[0.601, 1.856, 0.847]}
          rotation={[0.051, 0.973, -0.195]}
          scale={[5.458, 4.232, 5.478]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Material.004"]}
          position={[-1.038, 2.218, 0.416]}
          rotation={[0, -0.792, 0]}
          scale={[6.239, 5.679, 6.239]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["Material.004"]}
          position={[-1.176, 2.617, -0.433]}
          rotation={[2.481, -1.37, 2.263]}
          scale={[6.182, 8.153, 6.194]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.004"]}
          position={[0.685, 2.847, -0.216]}
          rotation={[-Math.PI, 0.3, -Math.PI]}
          scale={[5.606, 5.534, 5.606]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials["Material.004"]}
          position={[0.561, 2.617, 0.813]}
          rotation={[0, 0.757, 0]}
          scale={[5.22, 5.153, 5.22]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials["Material.004"]}
          position={[-0.64, 3.19, 0.733]}
          rotation={[0, -0.557, 0]}
          scale={[4.504, 3.88, 4.504]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials["Material.004"]}
          position={[0.023, 3.359, -0.469]}
          rotation={[Math.PI, -0.884, Math.PI]}
          scale={[4.106, 4.053, 4.106]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials["Material.004"]}
          position={[0.686, 3.19, -0.1]}
          rotation={[-Math.PI, 1.201, -Math.PI]}
          scale={[3.823, 3.774, 3.823]}
        />
      </mesh>
      <group position={[-1.793, 2.617, 0.682]} scale={-0.071}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007_1.geometry}
          material={materials.Candle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007_2.geometry}
          material={materials["Candle light"]}
        />
      </group>
      <group
        position={[3.553, 0.32, -1.263]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.05}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-2.333, 15.958, 2.159]}
            rotation={[0, 0.005, 0]}
            scale={[5.607, 0.175, 1.728]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_38001.geometry}
              material={materials["2KB-0.001"]}
              position={[-0.217, 0, -0.349]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_39001.geometry}
              material={materials["1KB-BASE-0.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_40001.geometry}
              material={materials["1KEYS-0.003"]}
              position={[-0.217, 0, -0.349]}
            />
          </group>
          <group position={[0, 4.992, 0.553]} scale={[5.47, 5, 3.905]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_27001.geometry}
              material={materials["BASS-0.001"]}
              position={[3.974, 0, 3.265]}
              rotation={[0, -1.406, 0]}
            />
          </group>
          <group
            position={[16.678, 8.418, 24.507]}
            rotation={[Math.PI, -0.592, Math.PI]}
            scale={[2.549, 0.243, 2.549]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4001.geometry}
              material={materials["CHAIR-0.001"]}
              position={[3.472, 0, 7.519]}
              rotation={[0, -0.559, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5001.geometry}
              material={materials["WHEEL-0.001"]}
              position={[3.472, 0, 7.519]}
              rotation={[0, -0.559, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6001.geometry}
              material={materials["WHEEL-CAP-0.001"]}
              position={[3.472, 0, 7.519]}
              rotation={[0, -0.559, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7001.geometry}
              material={materials["WHEEL-NUT-0.001"]}
              position={[3.472, 0, 7.519]}
              rotation={[0, -0.559, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8001.geometry}
              material={materials["CHAIR-LEGS-0.001"]}
              position={[3.472, 0, 7.519]}
              rotation={[0, -0.559, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9001.geometry}
              material={materials["CHAIR-COVER-0.001"]}
              position={[3.472, 0, 7.519]}
              rotation={[0, -0.559, 0]}
            />
          </group>
          <group
            position={[-18.454, 15.918, 9.192]}
            rotation={[Math.PI, -0.926, Math.PI]}
            scale={[-5.14, -0.147, -3.341]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_31001.geometry}
              material={materials["LAPTOP-0.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_32001.geometry}
              material={materials["1KB-BASE-0.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_33001.geometry}
              material={materials["1KEYS-0.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_34001.geometry}
              material={materials["SCREEN-0.003"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_35001.geometry}
              material={materials["SIGN-0.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_36.geometry}
              material={materials["TAG-0.001"]}
            />
          </group>
          <group
            position={[7.641, 16.001, 4.809]}
            rotation={[0, 0.415, 0]}
            scale={[0.751, 0.486, 1.161]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_42001.geometry}
              material={materials["MOUSE-0.001"]}
              position={[-0.432, 0, -5.08]}
            />
          </group>
          <group position={[7.625, 14.269, 3.664]} scale={3.11}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_44001.geometry}
              material={materials["MOUSEPAD-0.001"]}
              position={[-0.682, 0, -1.333]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13001.geometry}
            material={materials["1COMPUTER-0.001"]}
            position={[-24.287, 5.799, 15.387]}
            scale={[2.327, 5.804, 5.98]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_23001.geometry}
            material={materials["1PIC-0.001"]}
            position={[-16.887, 21.761, -0.693]}
            rotation={[Math.PI / 2, 0, -0.57]}
            scale={[8.964, 4.204, 4.87]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21001.geometry}
            material={materials["2PIC-0.001"]}
            position={[0, 21.761, -5.754]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[8.964, 4.204, 4.87]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_25001.geometry}
            material={materials["3PIC-0.001"]}
            position={[16.987, 21.761, -0.811]}
            rotation={[Math.PI / 2, 0, 0.552]}
            scale={[8.964, 4.204, 4.87]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11001.geometry}
            material={materials["COMPUTER-0.001"]}
            position={[-18.152, 5.799, 9.513]}
            scale={[2.327, 5.804, 5.98]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15001.geometry}
            material={materials["DESK-0.001"]}
            position={[0, 15.452, 0]}
            scale={[29.541, 0.336, 8.492]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17001.geometry}
            material={materials["MAT-0.001"]}
            position={[0, 0, 14.147]}
            scale={[46.718, 46.718, 26.649]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_19001.geometry}
            material={materials["SCREEN-0.002"]}
            position={[0, 21.761, -6.007]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[9.123, 4.323, 5.089]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_29001.geometry}
            material={materials["SPEAKER-0.001"]}
            position={[-27.707, 18.537, 8.063]}
            rotation={[0, 0.588, 0]}
            scale={[1.076, 1.75, 0.848]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Walls.geometry}
        material={materials.Walls}
        position={[0, 2.244, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tiles.geometry}
        material={materials.Floor}
        position={[0, 2.244, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Floor_Part.geometry}
        material={materials["Lower floor"]}
        position={[0, 2.244, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.White}
        position={[0.945, 2.689, -2.107]}
        scale={[0.786, 1.258, 0.205]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tiles001.geometry}
        material={materials.Floor}
        position={[4.004, 2.246, -0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["shelf handles"]}
        position={[1.503, 0.135, -0.878]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.021, 0.007, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_Top001.geometry}
        material={materials["Brown table top"]}
        position={[-1.011, 1.554, -1.725]}
        scale={[0.676, 0.879, 0.675]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_Top002.geometry}
        material={materials["Brown table top"]}
        position={[-1.658, 1.887, 1.025]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.676, 0.879, 0.675]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_Top003.geometry}
        material={materials["Brown table top"]}
        position={[-1.658, 2.595, 1.025]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.676, 0.879, 0.675]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sheets.geometry}
        material={materials.Sheets}
        position={[-0.961, 0.87, -0.456]}
        scale={[1.108, 1, 1.138]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bedframe.geometry}
          material={materials["Brown table top"]}
          position={[0.786, -0.158, 1.218]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Matras.geometry}
          material={materials.Walls}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pillow.geometry}
          material={materials.Sheets}
          position={[-0.274, 0.116, -1.021]}
          rotation={[0.356, 0, 0]}
          scale={[0.303, 0.119, 0.294]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pillow_small.geometry}
          material={materials.Yellow}
          position={[-0.352, 0.116, -0.736]}
          rotation={[0.553, 0.178, -0.023]}
          scale={[0.236, 0.093, 0.23]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Frame.geometry}
        material={nodes.Window_Frame.material}
        position={[0.945, 2.689, -2.107]}
      />
      <group position={[0.945, 2.689, -2.249]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_2.geometry}
          material={materials["Window light"]}
        />
      </group>
      <group position={[0.945, 1.431, -2.32]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_2.geometry}
          material={materials["Window light"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shade.geometry}
        material={materials["Material.006"]}
        position={[0.945, 2.689, -2.007]}
        scale={[1, 1, 0.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0.945, 2.459, -2.007]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.012, 0.79, 0.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0.945, 3.929, -2.007]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.034, 0.79, 0.034]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials["chair balls"]}
        position={[0.739, 0.086, -0.613]}
        rotation={[Math.PI / 2, 0, 0.53]}
        scale={[0.039, 0.033, 0.039]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials["Poster.001"]}
        position={[-0.965, 3.107, -1.982]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.518, 1, 0.784]}
      />
      <group
        position={[4.777, 2.955, -2.025]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.587}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_1.geometry}
          material={materials.PicBg}
        />
      </group>
      <group
        position={[3.359, 3.166, -2.025]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.347, 1.587, 1.252]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_1.geometry}
          material={materials["pic Bg 1"]}
        />
      </group>
      <group
        position={[3.359, 3.052, -2.025]}
        rotation={[-Math.PI / 2, -0.013, -Math.PI]}
        scale={[1.347, 1.587, 1.252]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={materials["pic bg 2"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials.Walls}
        position={[2.986, 0.246, 0.046]}
      />
    </group>
  );
}