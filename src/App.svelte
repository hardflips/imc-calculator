<script>
	import Menu from './components/shared/Menu.svelte';
	import Loading from './components/shared/Loading.svelte';
	
	import Animation from './components/Animation/Animation.svelte';
	import Calculator from './components/Calculator/Calculator.svelte';
	import Result from './components/Result/Result.svelte';
	import Infos from './components/Infos/Infos.svelte';

	let scene,
		personGender = 'Mulher',
		personHeight = null,
		personWeight = null,
		resultIMC,
		positionTag,
		backgrondColor,
		loadProgress = false,
		isLoading = false,
		idealWeight = null,
		genderData,
		widthWindow = window.innerWidth;
	
	export let progressData;
	export let idealWeightData;

	let optionsGender = [
		'Mulher',
		'Homem',
	];

	const onWindowResize = () => {
		widthWindow = window.innerWidth;
		if (widthWindow >= 801){
			personHeight = null;
			personWeight = null;
			resultIMC = null;
			idealWeight = null;
			scene.children[4].children[2].material.color = {r: 0.5, g: 0.5, b: 0.5};
			scene.children[5].children[1].material.color = {r: 0.5, g: 0.5, b: 0.5};
			loadProgress = false;
		}
	}

	window.addEventListener( 'resize', onWindowResize, false );

	const changeGender = (param) => {
		personHeight = null;
		personWeight = null;
		resultIMC = null;
		idealWeight = null;
		scene.children[4].children[2].material.color = {r: 0.5, g: 0.5, b: 0.5};
		scene.children[5].children[1].material.color = {r: 0.5, g: 0.5, b: 0.5};
		loadProgress = false;
		personGender = param;
		if (personGender == 'Mulher'){
			scene.children[4].visible = true;
			scene.children[5].visible = false;
		}
		else {
			scene.children[4].visible = false;
			scene.children[5].visible = true;
		}
	}

	const changeHeight = (param) => {
		personHeight = param;
		let scaled = parseInt(personHeight) / 180;
		let maxHeight;
		let minHeight;

		if (personGender == 'Mulher'){
			maxHeight = 183;
			minHeight = 144;
		}
		else {
			maxHeight = 193;
			minHeight = 155;
		}

		if (scaled && scaled != '' && scaled != null){
			if (parseInt(personHeight) > maxHeight){
				personHeight = '';
				scene.children[4].scale.set(1,1,1);
				scene.children[5].scale.set(1,1,1);
			}
			else if (parseInt(personHeight) >= minHeight){
				scene.children[4].scale.set(scaled,scaled,scaled);
				scene.children[5].scale.set(scaled,scaled,scaled);
			}
			else {
				personHeight = '';
				scene.children[4].scale.set(1,1,1);
				scene.children[5].scale.set(1,1,1);
			}
		}
		calculateIMC();
	}

	const changeWeight = (param) => {
		personWeight = param;
		if (parseInt(personWeight) > 499 || parseInt(personWeight) <= 0) {
			personWeight = '';
		}
		calculateIMC();
	}

	const calculateIMC = () => {
		resultIMC = null;
		if (personHeight && personWeight){
			let heightFormated = personHeight.toString().replace(/(\d)(?=(\d{2})+(?!\d))/g, "$1.");
			resultIMC = roundToTwo(personWeight / (parseFloat(heightFormated) * parseFloat(heightFormated)));

			if (personGender == 'Mulher'){
				genderData = idealWeightData.female;
			}
			else {
				genderData = idealWeightData.male;
			}

			idealWeight = genderData
				.sort( (a, b) => Math.abs(parseFloat(heightFormated).toFixed(2) - a.height) - Math.abs(parseFloat(heightFormated).toFixed(2) - b.height) )[0];

			window.setTimeout(() => {
				if (resultIMC){
					calculateProgressTag(resultIMC);
					let result = document.getElementById('result');
					if (widthWindow <= 800){
						scrollIt(result);
					}
					hideKeyboard();
					isLoading = false;
				}
			},1000);

			if (!loadProgress) {
				isLoading = true;
				loadProgress = true;
				window.setTimeout(() => {
					partialProgress('.progress-bar.low',progressData.low.range);
					partialProgress('.progress-bar.normal',progressData.normal.range);
					partialProgress('.progress-bar.override',progressData.override.range);
					partialProgress('.progress-bar.obesity',progressData.obesity.range);
				},500);
			}
		}
		else {
			if (personHeight === null){
				personHeight = '';
			}
			if (personWeight === null){
				personWeight = '';
			}
		}
	}

	const calculateProgressTag = (resultIMC) => {
		var item = resultIMC*10;
		positionTag = '0px';

		let female = scene.children[4].children[2];
		let male = scene.children[5].children[1];

		if (resultIMC <= progressData.low.limit) {
			backgrondColor = '#ffc107';
			female.material.color = {r: 0.7, g: 0.5, b: 0}; //yellow
			male.material.color = {r: 0.7, g: 0.5, b: 0}; //yellow
		}
		else if (resultIMC <= progressData.normal.limit){
			backgrondColor = '#8bc34a';
			female.material.color = {r: 0.3, g: 0.5, b: 0.1}; //green
			male.material.color = {r: 0.3, g: 0.5, b: 0.1}; //green
		}
		else if (resultIMC <= progressData.override.limit){
			backgrondColor = '#ffa726';
			female.material.color = {r: 0.8, g: 0.4, b: 0}; //orange
			male.material.color = {r: 0.8, g: 0.4, b: 0}; //orange
		}
		else if (resultIMC <= progressData.obesity.limit) {
			backgrondColor = '#ef6c00';
			female.material.color = {r: 0.8, g: 0.3, b: 0}; //orange dark
			male.material.color = {r: 0.8, g: 0.3, b: 0}; //orange dark
		}
		else {
			backgrondColor = '#c62828';
			female.material.color = {r: 0.6, g: 0.1, b: 0.1}; //red
			male.material.color = {r: 0.6, g: 0.1, b: 0.1}; //red
		}

		if (resultIMC >= progressData.morbid.limit){
			if (widthWindow <= 801){
				positionTag = '90% - 36px';
			}
			else {
				positionTag = '90%';
			}
		}
		else {
			if (widthWindow <= 801){
				let parentOffset = document.querySelector('[data-item="'+item+'"]').offsetParent.offsetTop;
				positionTag = (document.querySelector('[data-item="'+item+'"]').offsetTop + parentOffset) + 'px - 36px';
			}
			else {
				positionTag = document.querySelector('[data-item="'+item+'"]').getBoundingClientRect().left + window.scrollX + 'px';
			}
		}
	}

	const partialProgress = (obj, range) => {
		let rangePerHundred = range * 10;
		let item = '<div class="block"></div>';

		let i;
		for (i = 0; i < rangePerHundred; i++) {
			document.querySelector(obj).innerHTML += item;
		}

		let elems = document.querySelectorAll('.block');
		for(let i = 0; i < elems.length; i++){
			elems[i].setAttribute('data-item', (i+1));
		}
	}

	const roundToTwo = (num) => {
		return +(Math.round(num + "e+1")  + "e-1");
	}

	const getAnimationScene = (param) => {
		scene = param;
	}

	document.body.addEventListener('keyup', (e) => {
		if (e.keyCode == 13) {
			calculateIMC();
		}
	});

	const scrollIt = (element) => {
		window.scrollTo({
			'behavior': 'smooth',
			'left': 0,
			'top': element.offsetTop
		});
	}

	const hideKeyboard = () => {
		document.activeElement.blur();
	}

</script>

<Menu />

<Animation
	scene={scene}
	handleGetAnimationScene={(param) => getAnimationScene(param)}
/>

<Calculator
	optionsGender={optionsGender}
	personGender={personGender}
	personHeight={personHeight}
	personWeight={personWeight}
	idealWeight={idealWeight}
	handleChangeGender={(param) => changeGender(param)}
	handleChangeHeight={(param) => changeHeight(param)}
	handleChangeWeight={(param) => changeWeight(param)}
	handleCalculateIMC={() => calculateIMC()}
/>

<Result
	resultIMC={resultIMC}
	positionTag={positionTag}
	backgrondColor={backgrondColor}
	loadProgress={loadProgress}
/>

<Infos />


<Loading
	isLoading={isLoading}
/>