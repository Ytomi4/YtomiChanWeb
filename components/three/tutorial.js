import * as THREE from 'three'

const Sample = () => {
    const onCanvasLoaded = (canvas) => {
        if(!canvas) {
            return
        }
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(
            45, window.innerWidth/window.innerHeight, 0.1, 1000
        );

        var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
        renderer.setClearColor(new THREE.Color(0xEEEEEE));
        renderer.setSize(window.innerWidth, window.innerHeight);

        var axes = new THREE.AxisHelper(20);
        scene.add(axes);

        var planeGeometry = new THREE.PlaneGeometry(60, 20);
        var planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);

        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;

        scene.add(plane);

        var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
        var cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

        cube.position.x = -4;
        cube.position.y = 4;
        cube.position.z = 0;

        scene.add(cube);

        var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
        var sphereMaterial = new THREE.MeshBasicMaterial({color: 0x7777ff, wireframe: true});
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

        sphere.position.x = 20;
        sphere.position.y = 4;
        sphere.position.z = 2;

        scene.add(sphere);

        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);

        const onResize = () => {
            camera.aspect = window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener('resize', onResize, false);

        var step = 0;
        const renderScene = () => {
            cube.rotation.x += 0.02;
            cube.rotation.y += 0.02;
            cube.rotation.z += 0.02;

            step += 0.04;
            sphere.position.x = 20 + (10 * (Math.cos(step)));
            sphere.position.y = 5 + (10 * Math.abs(Math.sin(step)));
            
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

export default Sample