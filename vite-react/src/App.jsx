/* eslint-disable react/no-unknown-property */
// import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import RotatingCube from './components/RotatingCube';


function App() {
  return (
    <Canvas style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    
      <OrbitControls enableZoom enablePan enableRotate />

      <directionalLight position={[1,1,1]} intensity={10} color={'0x9CDBA6'}/>

      <color attach="background" args={['#F0F0F0']}/>

      <RotatingCube y={0.01} x={0.01}/>
      {/* <RotatingCube y={1}/> */}
    </Canvas>
  )
}

export default App
