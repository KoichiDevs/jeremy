import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HeroScene from '../scene/HeroScene'

import {
    BrightnessContrast,
    EffectComposer,
    HueSaturation
} from "@react-three/postprocessing";

const HeroCanvas = () => {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <HeroScene />
            </Suspense>

            <EffectComposer>
                <HueSaturation saturation={0.1} />
                <BrightnessContrast brightness={-0.1} contrast={0.3} />
            </EffectComposer>
        </Canvas>
    )
}

export default HeroCanvas