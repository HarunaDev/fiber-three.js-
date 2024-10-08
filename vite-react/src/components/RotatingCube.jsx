/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Sparkles } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react';

function RotatingCube(props) {
    const meshRef = useRef()
    useFrame(() => {
        if(meshRef.current) {
            meshRef.current.rotation.y += props.y
            meshRef.current.rotation.x += props.x
        }
    })
    return (
        <>
            <mesh ref={meshRef}>
            <cylinderGeometry args={[1,1,1]}/>
            <meshLambertMaterial color="#468585" emissive="#468585"/>

            <Sparkles count={1000} scale={2} speed={0.002} size={6} noise={0.2} color={'orange'}/>
            </mesh>
        </>
    )
}

export default RotatingCube