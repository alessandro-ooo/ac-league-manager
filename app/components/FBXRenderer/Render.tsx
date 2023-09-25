"use client"
import { Canvas } from '@react-three/fiber'
import { 
    Environment, 
    OrbitControls, 
} from '@react-three/drei';

import Model from './Model';

const Render = () => {
  
    const placeholder: string = "models/testcar/assettocorsa.fbx";
    
    return (
        <Canvas>
            <ambientLight intensity={1} />
            <Model dir={placeholder} />
            <OrbitControls />
            {/* <Environment preset="sunset" background /> */}
        </Canvas>
    )
}

export default Render;