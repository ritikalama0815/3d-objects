import React, { useRef, useEffect} from 'react'
import { useFrame } from '@react-three/fiber'
import birdScene from '../assets/3d/birds.glb';
import { useGLTF, useAnimations } from '@react-three/drei';

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);
  

  useEffect(() =>{
    actions['Scene'].play();
  }, []);

  //   useFrame(({clock, camera}) =>{
  //   birdRef.current.rotation.y = Math.sin(clock.elapsedTime)*.2 +.02;

  //   if(birdRef.current.position.x>camera.position.x +10){
  //     birdRef.current.rotation.y = Math.PI;
  //   } else if(birdRef.current.position.x>camera.position.x +10){
  //     birdRef.current.rotation.y = 0;
  //   }
    
  //   if(birdRef.current.rotation.y === 0){
  //     birdRef.current.position.x += .01;
  //     birdRef.current.position.z -= .01;
  //   } else{
  //     birdRef.current.position.x -= .01;
  //     birdRef.current.position.z += .01;
  //   }
  // });
  
  return (
    <mesh position={[-4,2,0]} scale={[.5, .5, .5]} ref = {birdRef}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Bird
