
import { useFBX, useTexture } from '@react-three/drei'
import { TModelProps } from '../types'
import { useEffect } from 'react';
import { Mesh, MeshBasicMaterial, MeshStandardMaterial } from 'three';

const Model = (props: TModelProps) => {
    const 
        { dir } = props, 
        fbx = useFBX(dir);

    const textures = useTexture({
        map: '/models/testcar/body2.png',
    });

    useEffect(() => {
        const myMaterial = new MeshBasicMaterial ({...textures}, );
        fbx.traverse(child => {
            (child as Mesh).material = myMaterial;
        });
      }, [fbx]);
      
    return (
        <mesh>
            <primitive object={fbx} scale={0.05}/>
        </mesh>
    )
}

export default Model;