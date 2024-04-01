import * as THREE from "three"
import { useEffect, useRef } from "react"
import { useAnimations, useGLTF } from "@react-three/drei"

type Primitive = THREE.Object3D<THREE.Object3DEventMap>

/**
 * 飞机
 */
function Aircraft() {
  const aircraft = useRef<Primitive>()

  const model = useGLTF("./models/aircraft.glb")
  const animations = useAnimations(model.animations, model.scene)

  // 播放模型动画
  useEffect(() => {
    const action = animations.actions["Take 001"]

    // 淡入
    action?.fadeIn(0.5).play()

    return () => {
      // 淡出
      action?.fadeOut(0.5)
    }
  }, [animations])

  return (
    <>
      <primitive
        ref={aircraft}
        object={model.scene}
        scale={5.5}
        position={[-0.5, -1.5, 0]}
        rotation={[Math.PI / 10, -Math.PI / 6, -Math.PI / 20]}
      />
    </>
  )
}

useGLTF.preload("./models/aircraft.glb")

export default Aircraft
