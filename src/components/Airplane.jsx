/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/Airplane.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'


const Airplane = (props) => {
  const { nodes, materials } = useGLTF('/models/AirplaneNew.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Boeing_787_8obj2-Mesh'].geometry}>
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh geometry={nodes['Boeing_787_8obj2-Mesh_1'].geometry}>
        <meshStandardMaterial color="white"/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/AirplaneNew.glb')

export default Airplane