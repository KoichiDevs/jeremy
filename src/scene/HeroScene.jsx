import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef } from 'react'
import { degToRad } from '../../utils/degToRad'

const HeroScene = () => {

    const bgMap = useLoader(TextureLoader, '/painting.webp')

    const orbitRef = useRef(null)

    return (
        <>

            <OrbitControls ref={orbitRef} enablePan={false} enableRotate={true} enableZoom={false} autoRotate={true} maxPolarAngle={degToRad(95)} minPolarAngle={degToRad(80)} autoRotateSpeed={0.5} rotateSpeed={-0.1} />


            <pointLight position={[0, 0, 0]} intensity={0.7} />

            <mesh>
                <sphereGeometry args={[8, 200, 200]} />
                <meshStandardMaterial map={bgMap} side={THREE.BackSide} />
            </mesh>

        </>
    )
}

export default HeroScene