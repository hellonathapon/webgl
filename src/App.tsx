import React from "react";
import { Canvas } from '@react-three/fiber'
import { Box, Sphere, Header } from "./components";
import { OrbitControls } from "@react-three/drei";

export default function App():JSX.Element {
    return (
        <div className="ctn">
            <div className="hero">
                <div className="canvas_wrap">
                    <Canvas shadows camera={{position: [4, 0, -12], fov: 35}}>
                        <ambientLight intensity={0.5} />
                        <directionalLight color="red" position={[0, 0, 5]} castShadow/>
                        <Box />  
                        <Sphere position={[-2, 0, 0]}/>
                        <OrbitControls autoRotate autoRotateSpeed={2}/>          
                    </Canvas>
                </div>
                <div className="header_wrap">
                    <Header/>
                </div>
            </div>
        </div>
    )
};

