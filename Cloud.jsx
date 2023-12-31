/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/cloud.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/cloud.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mball001.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/cloud.gltf')
