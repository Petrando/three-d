"use client"

import React, {Suspense, useRef, useState} from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import {Ground} from "./Ground"

function Cube(props) {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const { viewport } = useThree()
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={(viewport.width / 10) * (active ? 1.5 : 1)}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxGeometry />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

const CarShow = (props) => {
    console.log('car show')

    // 
    //

    //
    //target={[0, 0, 35]}
    return (
        <>            
            <OrbitControls target={[0, 0.35, 0]}  maxPolarAngle={1.45} />
            <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
            <color args={[0, 0, 0]} attach={"background"} />
            <spotLight
                color={[1, 0.25, 0.7]}
                intensity={1.5}
                angle={0.6}
                penumbra={0.5}
                position={[5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />
            <spotLight
                color={[0.14, 0.5, 1]}
                intensity={2}
                angle={0.6}
                penumbra={0.5}
                position={[-5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />
            <Ground />
        </>
    )
}

export const ShowRoom = () => {
    return (
        <Suspense fallback={null}>
            <Canvas shadows>
                
                <CarShow />
            </Canvas>
        </Suspense>
    )
}