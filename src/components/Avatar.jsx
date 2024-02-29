import React, { useEffect, useRef } from "react";
import { useFBX, useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";


export function Avatar(props) {  
  const groupRef = useRef(null)
  const { nodes, materials } = useGLTF("/images/3d/NewAvatar.glb");

  const { animation } = props;
  console.log(animation)
  /*
  const { headFollow, cursorFollow, wireframe } = useControls({
      headFollow: false,
      cursorFollow: false,
      wireframe: false,
  });*/
  const headFollow = false, cursorFollow = false, wireframe = false

  const {animations:typingAnimation} = useFBX('/animations/Typing.fbx')
  const {animations:standingAnimation} = useFBX('/animations/StandingIdle.fbx')
  const {animations:fallingAnimation} = useFBX('/animations/FallingIdle.fbx')  

  typingAnimation[0].name = "Typing"
  //typingAnimation[0].tracks = typingAnimation[0].tracks.slice(1)  
  standingAnimation[0].name = "Standing"
  //standingAnimation[0].tracks = standingAnimation[0].tracks.slice(1)
  fallingAnimation[0].name = "Falling"
  //fallingAnimation[0].tracks = fallingAnimation[0].tracks.slice(1)  

  console.log(fallingAnimation)
  
  const { actions } = useAnimations([typingAnimation[0], standingAnimation[0], fallingAnimation[0]], groupRef)
  
  useFrame((state) => {    
    if (headFollow) {
      groupRef.current.getObjectByName("Head").lookAt(state.camera.position);
    }
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      groupRef.current.getObjectByName("Spine2").lookAt(target);
    }
  });

  useEffect(() => {
    actions[animation].reset().fadeIn(0.5).play();
    return () => {
      actions[animation].reset().fadeOut(0.5);
    };
  }, [animation]);

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      material.wireframe = wireframe;
    });
  }, [wireframe]);
    
  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group>
        <skinnedMesh
          frustumCulled={false}
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials["Wolf3D_Eye.001"]}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials["Wolf3D_Eye.001"]}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Wolf3D_Body"
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials["Wolf3D_Body.001"]}
          skeleton={nodes.Wolf3D_Body.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials["Wolf3D_Glasses.001"]}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials["Wolf3D_Hair.001"]}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials["Wolf3D_Skin.001"]}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Wolf3D_Outfit_Bottom"
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials["Wolf3D_Outfit_Bottom.001"]}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Wolf3D_Outfit_Footwear"
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials["Wolf3D_Outfit_Footwear.001"]}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          morphTargetDictionary={
            nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
          }
          morphTargetInfluences={
            nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
          }
        />
        <skinnedMesh
          frustumCulled={false}
          name="Wolf3D_Outfit_Top"
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials["Wolf3D_Outfit_Top.001"]}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Outfit_Top.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Outfit_Top.morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials["Wolf3D_Teeth.001"]}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <primitive object={nodes.Hips} />
      </group>
    </group>
  );
}