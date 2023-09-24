"use client"
import { useFBX, useTexture } from '@react-three/drei'
import { TModelProps } from '../types'

const Model = (props: TModelProps) => {
    const 
        { dir } = props, 
        fbx = useFBX(dir);

    const textures = useTexture({
        map: '/models/testcar/2017body.png', 
    });

    return (
        <mesh>
            <primitive object={fbx} scale={0.05}/>
            <meshStandardMaterial {...textures} attach="material"/>
        </mesh>
    )
}

export default Model;