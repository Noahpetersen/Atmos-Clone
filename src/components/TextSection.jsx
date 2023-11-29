import { Text } from '@react-three/drei'
import React from 'react'
import { fadeOnBeforeCompile, fadeOnBeforeCompileFlat } from '../utils/fadeMaterial'

const TextSection = ({title, subTitle, ...props}) => {
  return (
    <>
        <group {...props}>
            { !!title && (
                <Text
                    color={"white"}
                    anchorX={"left"}
                    anchorY={"bottom"}
                    fontSize={0.52}
                    maxWidth={2.5}
                >
                {title}
                <meshStandardMaterial
                    color={"white"}
                    onBeforeCompile={fadeOnBeforeCompileFlat}
                />
                </Text>
            )
            }
            <Text
                color={"white"}
                anchorX={"left"}
                anchorY={"top"}
                fontSize={0.22}
                maxWidth={2.5}
                lineHeight={1}
            >
                {subTitle}
                <meshStandardMaterial
                    color={"white"}
                    onBeforeCompile={fadeOnBeforeCompileFlat}
                />
            </Text>
        </group>
    </>
  )
}

export default TextSection