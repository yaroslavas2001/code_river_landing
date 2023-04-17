import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import {d} from 'dat.gui'
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { deserialize } from 'v8';
// import { deserialize } from 'v8';

const AnimationLine = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, .1, 1000);
    camera.position.set(0, 10, -10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    // container.appendChild( renderer.domElement );

    const resolution = new THREE.Vector2(window.innerWidth, window.innerHeight);
    // const controls =new OrbitControls( camera, renderer.domElement );
    const clock = new THREE.Clock();

    const sphereGeometry = new THREE.OctahedronGeometry(0.02, 2);
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
    });

    const duration = 300;

    let p = 0.2;
    // let line;
    // let lineMesh;
    // let path;

    const params = {
        amount: 100,
        lineWidth: 2,
        taper: 'parabolic',
        strokes: false,
        sizeAttenuation: false,
        spread: false,
        update: () => {

        }
        // amount = 100,
        //  lineWidth = 2;
        // let taper = 'parabolic';
        // let strokes = false;
        // let sizeAttenuation = false;
        // let animateWidth = false;
        // let spread = false;
        // let update = function() {
        //     // clearLines();
        //     // createLines();
        // }
    };

    const spline: any = [-3.67447, -5.03325e-08, -1.15147, -3.05759, -7.29892e-08, -1.6698, -2.45876, -8.71493e-08, -1.99374, -1.88066, -9.40567e-08, -2.15177, -1.32596, -9.49556e-08, -2.17233, -0.797348, -9.10899e-08, -2.08389, -0.297504, -8.37035e-08, -1.91491, 0.17089, -7.40406e-08, -1.69385, 0.605152, -6.33449e-08, -1.44916, 1.0026, -5.28607e-08, -1.20931, 1.36056, -4.38317e-08, -1.00275, 1.67633, -3.75021e-08, -0.857948, 1.94726, -3.51157e-08, -0.803354, 2.19219, -3.35645e-08, -0.767866, 2.43052, -2.91877e-08, -0.667736, 2.66031, -2.24006e-08, -0.512467, 2.87964, -1.36187e-08, -0.31156, 3.08657, -3.25724e-09, -0.0745169, 3.27919, 8.26847e-09, 0.18916, 3.45555, 2.05431e-08, 0.46997, 3.61374, 3.31512e-08, 0.758411, 3.75183, 4.56776e-08, 1.04498, 3.86789, 5.77068e-08, 1.32018, 3.95998, 6.88236e-08, 1.5745, 4.0262, 7.86126e-08, 1.79845, 4.06942, 8.72655e-08, 1.9964, 4.09315, 9.53069e-08, 2.18037, 4.09629, 1.02821e-07, 2.35226, 4.07779, 1.09891e-07, 2.51401, 4.03657, 1.16601e-07, 2.66752, 3.97156, 1.23036e-07, 2.81473, 3.8817, 1.29278e-07, 2.95754, 3.7659, 1.35413e-07, 3.09788, 3.6231, 1.41523e-07, 3.23767, 3.45224, 1.47693e-07, 3.37883, 3.25223, 1.54007e-07, 3.52328, 3.02201, 1.60549e-07, 3.67293, 2.73359, 1.65915e-07, 3.79568, 2.36576, 1.68869e-07, 3.86328, 1.92757, 1.69751e-07, 3.88345, 1.4281, 1.68897e-07, 3.86391, 0.87641, 1.66645e-07, 3.81238, 0.281565, 1.63331e-07, 3.73658, -0.347365, 1.59294e-07, 3.64422, -1.00132, 1.54871e-07, 3.54303, -1.67122, 1.50399e-07, 3.44072, -2.34801, 1.46216e-07, 3.34502, -3.02262, 1.42659e-07, 3.26365, -3.68599, 1.40065e-07, 3.20431, -4.22293, 1.37071e-07, 3.13583, -4.5464, 1.32282e-07, 3.02626, -4.6895, 1.25987e-07, 2.88225, -4.68535, 1.18476e-07, 2.71041, -4.56706, 1.10038e-07, 2.51736, -4.36774, 1.00962e-07, 2.30975, -4.1205, 9.15395e-08, 2.09418, -3.85846, 8.20588e-08, 1.87729, -3.61472, 7.28098e-08, 1.6657, -3.42241, 6.40822e-08, 1.46603, -3.31462, 5.61656e-08, 1.28492, -3.32447, 4.93494e-08, 1.12898, -3.44609, 4.42911e-08, 1.01326, -3.63473, 4.09859e-08, 0.937648, -3.86524, 3.87307e-08, 0.886056, -4.11249, 3.68224e-08, 0.842399, -4.3513, 3.45579e-08, 0.790592, -4.55654, 3.12339e-08, 0.714549, -4.70306, 2.61475e-08, 0.598184, -4.7657, 1.85953e-08, 0.425412, -4.71931, 7.87442e-09, 0.180146, -4.53874, -6.71844e-09, -0.1537, -4.19884, -2.58864e-08, -0.592211];

    // const params =  Params();
    // const gui = new dat.GUI();
    // let points; // geometry

    // const colors = [
    //     0xed6a5a,
    //     0xf4f1bb,
    //     0x9bc1bc,
    //     0x5ca4a9,
    //     0xe6ebe0,
    //     0xf0b67f,
    //     0xfe5f55,
    //     0xd6d1b1,
    //     0xc7efcf,
    //     0xeef5db,
    //     0x50514f,
    //     0xf25f5c,
    //     0xffe066,
    //     0x247ba0,
    //     0x70c1b3
    // ];

    // function deserialize(points) {
    //   const g = new THREE.Geometry();
    //   const n = Math.floor(points.length / 3);

    //   for (let i = 0; i < n; i++) {
    //    g.vertices.push( new THREE.Vector3( spline[i * 3],  spline[i * 3 + 1], spline[i * 3 + 2] ));
    //   }

    //   let curve = new THREE.CatmullRomCurve3(g.vertices);
    //   const geometry = new THREE.Geometry();
    //   const splinePoints = curve.getPoints(50);

    //   for (let i = 0; i < splinePoints.length; i++) {
    //     geometry.vertices.push(splinePoints[i]);
    //   }

    //   return { curve, geometry };
    // }

    // // add scene helpers
    // function addHelpers() {
    //   const axisHelper = new THREE.AxisHelper(10);
    //   const gridHelper = new THREE.GridHelper(1000, 1000);

    //   scene.add(axisHelper);
    //   scene.add(gridHelper);
    // }

    // function render(time) {
    //     const delta = clock.getDelta();
    //     const t = clock.getElapsedTime();  

    //   p = p < 1 ? Math.min(p + 1/50, 1) : 0.01;
    //   const point = path.curve.getPointAt(p);
    //   line.advance(point);

    //   controls.update();
    //     renderer.render( scene, camera );
    //     requestAnimationFrame( render );
    // }

    // function addPoints() {
    // let points = deserialize(spline).geometry; // makeSquare(3);


    // }

    // function addLine() {
    //     const material = new MeshLineMaterial( {
    //         color: new THREE.Color( 0xffffff),
    //         opacity: 1,
    //         resolution: resolution,
    //         sizeAttenuation: params.sizeAttenuation,
    //         lineWidth: params.lineWidth,
    //         near: camera.near,
    //         far: camera.far,
    //         depthWrite: false,
    //         depthTest: !params.strokes,
    //         alphaTest: params.strokes ? .5 : 0,
    //         transparent: true,
    //         side: THREE.DoubleSide
    //     });  

    //   const curve = deserialize(spline).curve;
    //   const points = new THREE.Geometry();

    //   for (let i = 0; i < 10; i++) {
    //     points.vertices.push(curve.getPointAt( p / 10 * i ));
    //   }

    //   line = new MeshLine();
    //   line.setGeometry(points);

    //   lineMesh =  new THREE.Mesh( line.geometry, material );
    //   scene.add(lineMesh);
    // }




    // let r = points.vertices.map((el: any) => {
    //     <mesh >
    //         <sphereGeometry />
    //         <meshStandardMaterial color={0xff0000} />
    //     </mesh>
    // })

    return (
        <Canvas className='canva' >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            {/* {r} */}
            {/* <Line start={[-1000, 0, 0]} end={[100, 0, 0]} /> */}
            {/* <Line start={[1, -1000, 0]} end={[1, 100, 0]} /> */}
        </Canvas>
    )
}
export default AnimationLine;