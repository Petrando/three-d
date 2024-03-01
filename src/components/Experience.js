"use client"
import { useState, useEffect, useRef } from "react";
import { Environment, OrbitControls, Sky, ContactShadows, ScrollControls, Scroll, useScroll,
    Float, MeshDistortMaterial, MeshWobbleMaterial, Text
} from "@react-three/drei";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { MotionConfig, useMotionValue, animate } from "framer-motion";
import { motion } from "framer-motion-3d"
import * as THREE from "three";
import { Avatar } from "./Avatar"
import { SampleAvatar } from "./SampleAvatar"
import { useControls } from "leva";
import {ScrollManager} from "./ScrollManager"
import { Room } from "./Room"
import {Interface} from "./Interface"
import {Menu} from "./Menu"
import {Projects} from "./Projects"
import {framerMotionConfig} from "./config"

export const Experience = () => {
    const [section, setSection] = useState(0)

    const [menuOpened, setMenuOpened] = useState(false);

    useEffect(() => {
        setMenuOpened(false);
    }, [section]);

    /*const { animation } = useControls({
        animation: {
          value: "Standing",
          options: ["Typing", "Falling", "Standing"],
        },
    });*/
    const animation = "Standing"
    //room y = -2
    return (
        <MotionConfig
            transition={{
            ...framerMotionConfig,
            }}
        >
        <Canvas shadows camera={{ position: [2.5, 1, 10], fov: 42 }}>
            <color attach="background" args={["#ececec"]} />
            <ScrollControls pages={4} damping={0.1}>
                <ScrollManager section={section} setSection={setSection} />                
                <Sky />
                <Environment preset="sunset" />
                <MeInRoom section={section} setSection={setSection} menuOpened={menuOpened} />
                <Scroll html>
                    <Interface />
                </Scroll>  
            </ScrollControls>    
                                  
        </Canvas>
        <Menu
            onSectionChange={setSection}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
        />
        </MotionConfig>
    );
};

const MeInRoom = ({section, setSection, menuOpened}) => {    
    const { viewport } = useThree();
        
    const cameraPositionX = useMotionValue();
    const cameraLookAtX = useMotionValue();

    useEffect(() => {
        animate(cameraPositionX, menuOpened ? -5 : 0, {
            ...framerMotionConfig,
            });
        animate(cameraLookAtX, menuOpened ? 5 : 0, {
            ...framerMotionConfig,
        });
    }, [menuOpened]);

    const characterSpotRef = useRef()

    const data = useScroll();

    useFrame((state) => {
        /*let curSection = Math.floor(data.scroll.current * data.pages);

        if (curSection > 3) {
            curSection = 3;
        }

        if (curSection !== section) {
            setSection(curSection);
        }*/
        if(state.camera){
            state.camera.position.x = cameraPositionX.get();

            const lookAtX = cameraLookAtX.get()
            if(lookAtX){
                state.camera.lookAt(cameraLookAtX.get(), 0, 0);
            }
        }        
        

        /*const pos = new THREE.Vector3()
        characterSpotRef.current.getWorldPosition(pos)
        console.log(pos)
        
        const quaternion = new THREE.Quaternion()
        characterSpotRef.current.getWorldQuaternion(quaternion)
        const euler = new THREE.Euler
        euler.setFromQuaternion(quaternion, "XYZ")

        console.log([euler.x, euler.y, euler.z])
        */
    });

    const [characterAnimation, setCharacterAnimation] = useState("Typing");
    useEffect(() => {
        setCharacterAnimation("Falling");
        setTimeout(() => {
            setCharacterAnimation(section === 0 ? "Typing" : "Standing");
        }, 600);
      }, [section]);    
  
    return (
        <>
            
            <group
                position={[ 3.643589412144026, -0.46340000000000003, 4.6749945432746935 ]}
                rotation={[-3.141592653589793, 0.9313981633974485, 3.141592653589793]}
                animate={"" + section}
                transition={{
                    duration: 0.6,
                }}
                variants={/*{
                    0: {
                        scaleX: 0.9,
                        scaleY: 0.9,
                        scaleZ: 0.9,
                    },
                    1: {
                        y: -viewport.height + 0.5,
                        x: 0,
                        z: 7,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 0,
                    },
                    2: {
                        x: -2,
                        y: -viewport.height * 2 + 0.5,
                        z: 0,
                        rotateX: 0,
                        rotateY: Math.PI / 2,
                        rotateZ: 0,
                    },
                    3: {
                        y: -viewport.height * 3 + 1,
                        x: 0.3,
                        z: 8.5,
                        rotateX: 0,
                        rotateY: -Math.PI / 4,
                        rotateZ: 0,
                    },
                }*/null}
            >
                <Avatar animation={characterAnimation} />
            </group>
            <ambientLight intensity={1} />
            <motion.group
                position={[1, 2, 3]}
                scale={[0.9, 0.9, 0.9]}
                rotation-y={-Math.PI / 4}
                animate={{
                    y: section === 0 ? -0.8 : 3.5,
                }}
            >
                <Room section={section} />
                <group 
                    ref={characterSpotRef} 
                    name="CharacterSpot" 
                    position={[3.393, 0.374, -0.761]} 
                    rotation={[-Math.PI, 0.146, -Math.PI]}
                />
            </motion.group>
            {/* SKILLS */}
            <motion.group
                position={[0, -1.5, -10]}
                animate={{
                    z: section === 1 ? 0 : -10,
                    y: section === 1 ? -viewport.height : -1.5,
                }}
            >
                <directionalLight position={[-5, 3, 5]} intensity={0.4} />
                <Float>
                    <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
                        <sphereGeometry />
                        <MeshDistortMaterial
                            opacity={0.8}
                            transparent
                            distort={0.4}
                            speed={4}
                            color={"red"}
                        />
                    </mesh>
                </Float>
                <Float>
                    <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
                        <sphereGeometry />
                        <MeshDistortMaterial
                            opacity={0.8}
                            transparent
                            distort={1}
                            speed={5}
                            color="yellow"
                        />
                    </mesh>
                </Float>
                <Float>
                    <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
                        <boxGeometry />
                        <MeshWobbleMaterial
                            opacity={0.8}
                            transparent
                            factor={1}
                            speed={5}
                            color={"blue"}
                        />
                    </mesh>
                </Float>
                
            </motion.group>
            <Projects />
        </>
    );
  };