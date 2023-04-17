import * as THREE from 'three';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Suspense } from 'react';


import { Physics } from '@react-three/cannon';

const CameraOrbitController = () => {
    const { camera, gl } = useThree();
    useEffect(() => {

    }, [camera, gl])
}
let Line = (props: any) => {
    let start = props.start
    let end = props.end

    const ref: any = useRef()
    useLayoutEffect(() => {
        ref.current.geometry.setFromPoints([start, end].map((point) => new THREE.Vector3(...point)))
    }, [start, end])

    return (
        <line ref={ref}>
            <bufferGeometry />
            <lineBasicMaterial color={'#647CE9'} linewidth={100} />
        </line>
    )
}
class Animation extends React.Component {
    componentDidMount() {

    }
    render() {
        const color2 = new THREE.Color(0xff0000);

        return (
            <div >
                {/* Suspense  */}
                <Suspense fallback={null}>
                    <Canvas className='canva' >
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <pointLight position={[-10, -10, -10]} />
                        <Line start={[-1000, 0, 0]} end={[100, 0, 0]} />
                        {/* <Line start={[1, -1000, 0]} end={[1, 100, 0]} /> */}
                    </Canvas>
                </Suspense>
            </div>
        )
    }
}
export default Animation;