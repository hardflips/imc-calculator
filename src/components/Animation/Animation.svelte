<script>
    import * as THREE from 'three';
    import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
	import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
	
	import Loading from '../../components/shared/Loading.svelte';
    
    let container, controls;
	let camera, renderer, light;
	let clock = new THREE.Clock();
	let mixer, mixer2, object;
	
	let isLoading = true;
	let isLoadingFemale = true;
	let isLoadingMale = true;

    export let scene;
    export let handleGetAnimationScene;

	const init = () => {

		container = document.createElement( 'div' );
		container.setAttribute('class', 'scene');
		document.body.appendChild( container );

		camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
		camera.position.set( 100, 200, 300 );

		scene = new THREE.Scene();
		scene.background = new THREE.Color( 0xf2f2f2 );
		scene.fog = new THREE.Fog( 0xf2f2f2, 200, 1000 );

		light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
		light.position.set( 0, 200, 0 );
		scene.add( light );

		light = new THREE.DirectionalLight( 0xffffff );
		light.position.set( 0, 200, 100 );
		light.castShadow = true;
		light.shadow.camera.top = 180;
		light.shadow.camera.bottom = - 100;
		light.shadow.camera.left = - 120;
		light.shadow.camera.right = 120;
		scene.add( light );

		// ground
		let mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false } ) );
		mesh.rotation.x = - Math.PI / 2;
		mesh.receiveShadow = true;
		scene.add( mesh );

		let grid = new THREE.GridHelper( 2000, 25, 0x000000, 0x000000 );
		grid.material.opacity = 0.2;
		grid.material.transparent = true;
		scene.add( grid );

		// model
		let loader = new FBXLoader();

		loader.load( 'build/assets/models/fbx/female.fbx', ( female ) => {
			mixer2 = new THREE.AnimationMixer( female );
			let action2 = mixer2.clipAction( female.animations[ 0 ] );
			female.visible = true;
			female.children[1].material.color = {r: 0.2, g: 0.2, b: 0.2};
			female.children[2].material.color = {r: 0.5, g: 0.5, b: 0.5};
			if (scene && window.innerWidth <= 800){
				female.position.x = 0;
			}
			else {
				female.position.x = -50;
            }
            
            action2.play();
            
			female.traverse( ( child ) => {

				if ( child.isMesh ) {

					child.castShadow = true;
					child.receiveShadow = true;

				}

			});
			scene.add( female );
			isLoadingFemale = false;
		});

		loader.load( 'build/assets/models/fbx/male.fbx', ( male ) => {
			mixer = new THREE.AnimationMixer( male );
			let action = mixer.clipAction( male.animations[ 0 ] );
			male.visible = false;
			male.children[1].material.color = {r: 0.5, g: 0.5, b: 0.5};
			male.children[2].material.color = {r: 0.2, g: 0.2, b: 0.2};
			if (scene && window.innerWidth <= 800){
				male.position.x = 0;
			}
			else {
				male.position.x = -50;
            }
            
            action.play();
            
			male.traverse( ( child ) => {
				if ( child.isMesh ) {
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});
			scene.add( male );
			isLoadingMale = false;
		});

		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.shadowMap.enabled = true;
		container.appendChild( renderer.domElement );

		controls = new OrbitControls( camera, renderer.domElement );
		controls.target.set( 0, 100, 0 );
		controls.enableZoom = false;
		controls.update();

		window.addEventListener( 'resize', onWindowResize, false );

    }

	const onWindowResize = () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );

		if (scene && window.innerWidth <= 800){
			if (scene.children[4]){
				scene.children[4].position.x = 0;
			}
			if (scene.children[5]){
				scene.children[5].position.x = 0;
			}
		} else {
			if (scene.children[4]){
				scene.children[4].position.x = -50;
			}
			if (scene.children[5]){
				scene.children[5].position.x = -50;
			}
		}
	}

	const animate = () => {

		requestAnimationFrame( animate );

		let wrapper = document.querySelector('.wrapper');
		let delta = clock.getDelta();

		if ( mixer2 ) mixer2.update( delta );
		if ( mixer ) mixer.update( delta );

		renderer.render( scene, camera );

		let angle = controls.getAzimuthalAngle();

		if (wrapper) {
			if (angle <= -1){
				wrapper.style.filter = 'blur(20px)';
				wrapper.style.pointerEvents = 'none';
				wrapper.style.opacity = '0';
			} else {
				wrapper.style.filter = 'blur(0)';
				wrapper.style.pointerEvents = 'all';
				wrapper.style.opacity = '1';
			}
		}
		
		if (!isLoadingFemale && !isLoadingMale){
			isLoading = false;
		}
    }

    init();
	animate();
    handleGetAnimationScene(scene);
    
</script>

<style>
	:global(.scene) {
		position: absolute;
	}
</style>

<Loading
	isLoading={isLoading}
/>