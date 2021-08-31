import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {VRM} from '@pixiv/three-vrm';

var scene;
var camera;
var light;
init();

const loader = new GLTFLoader();
loader.load(
    '/models/AliciaSolid.vrm',
    (gltf) => {
        VRM.from(gltf).then((vrm) => {
            scene.add(vrm.scene);
            console.log(vrm);
        })
    },
    (progress) => console.log('Loading model...', 100.0 * (progress.loaded / progress.total), '%'),
    (error) => console.error(error)
);

const VRMview = () => {
    const onCanvasLoaded = (canvas) => {
        if(!canvas) {
            return
        }
        var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xEEEEEE, 1.0);

        const onResize = () => {
            camera.aspect = window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener('resize', onResize, false);

        const renderScene = () => {
            requestAnimationFrame(renderScene);
            renderer.render(scene, camera);
        }

        renderScene();
    }
    return (
        <div>
            <canvas ref={onCanvasLoaded}></canvas>
        </div>
    )
}

export default VRMview

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        45, window.innerWidth/window.innerHeight, 0.1, 1000
    );
    camera.position.set(0.5, 1.4, -3);
    camera.lookAt(new THREE.Vector3(0, 1.4, 0));

    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(-1, 1, -1).normalize();
    scene.add(light);

    var axix = new THREE.AxesHelper(20);
    scene.add(axix);

}
