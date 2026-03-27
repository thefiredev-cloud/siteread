'use client'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function WebpageLayers() {
  const groupRef = useRef<THREE.Group>(null)
  const t = useRef(0)

  const layers = useMemo(() => {
    const items = []
    const layerCount = 5
    for (let i = 0; i < layerCount; i++) {
      const geometry = new THREE.PlaneGeometry(3, 2)
      const edges = new THREE.EdgesGeometry(geometry)
      items.push({ edges, index: i, total: layerCount })
    }
    return items
  }, [])

  useFrame((_, delta) => {
    t.current += delta * 0.5
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t.current * 0.3) * 0.3
      groupRef.current.children.forEach((child, i) => {
        const spread = Math.sin(t.current * 0.5) * 0.5 + 0.5
        child.position.z = (i - 2) * spread * 0.6
        child.position.y = (i - 2) * spread * 0.1
      })
    }
  })

  const accent = '#06b6d4'
  const colors = ['#1e3a4a', '#1a4a5a', '#06b6d4', '#1a4a5a', '#1e3a4a']

  return (
    <group ref={groupRef}>
      {layers.map((layer, i) => (
        <lineSegments key={i} geometry={layer.edges}>
          <lineBasicMaterial color={i === 2 ? accent : colors[i]} transparent opacity={i === 2 ? 1 : 0.4} />
        </lineSegments>
      ))}
      {/* Content lines on each layer */}
      {layers.map((_, i) => (
        <group key={`content-${i}`}>
          {[0.5, 0.2, -0.1, -0.4, -0.7].map((y, j) => (
            <lineSegments key={j}>
              <edgesGeometry args={[new THREE.PlaneGeometry(j === 0 ? 1.5 : 2.2, 0.05)]} />
              <lineBasicMaterial color={i === 2 ? accent : '#334155'} transparent opacity={0.3} />
            </lineSegments>
          ))}
        </group>
      ))}
    </group>
  )
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#06b6d4" intensity={1} />
      <WebpageLayers />
      <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
