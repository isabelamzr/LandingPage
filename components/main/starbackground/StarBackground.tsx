"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import * as random from "maath/random";

const StarBackground = () => { 
    const ref = useRef<THREE.Points>(null);
    const [sphere] = useState<Float32Array>(() =>
        new Float32Array(random.inSphere(new Float32Array(5000), { radius: 1.2 }))
    );

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points 
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
              
            >
                <PointMaterial 
                    transparent
                    color="#fff"
                    size={0.002}
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20] pointer-events-none">
        <Canvas style={{ pointerEvents: "none" }} camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;
