<script>
	import Animation from './components/Animation/Animation.svelte';
	import Calculator from './components/Calculator/Calculator.svelte';
	import Result from './components/Result/Result.svelte';
	import Loading from './components/shared/Loading.svelte';

	let scene;
	let personGender = 'Mulher';
	let personAge = '';
	let personHeight = '';
	let personWeight = '';
	let resultIMC;
	let positionLeft;
	let backgrondColor;
	let loadProgress = false;
	let isLoading = false;
	let idealWeight = null;
	
	export let progressData;
	export let idealWeightData;

	let optionsGender = [
		'Mulher',
		'Homem',
	];

	const changeGender = (param) => {
		personGender = param;
		if (personGender == 'Mulher'){
			scene.children[4].visible = true;
			scene.children[5].visible = false;
		}
		else {
			scene.children[4].visible = false;
			scene.children[5].visible = true;
		}
		calculateIMC();
	}

	const changeAge = (param) => {
		personAge = param;
		if (parseInt(personAge) > 130 || parseInt(personAge) <= 0) {
			personAge = '';
		}
	}

	const changeHeight = (param) => {
		personHeight = param;
		let scaled = parseInt(personHeight) / 180;
		let limitHeight;

		if (personGender == 'Mulher'){
			limitHeight = 185;
		}
		else {
			limitHeight = 193;
		}

		if (scaled && scaled != '' && scaled != null){
			if (parseInt(personHeight) > limitHeight){
				personHeight = '';
				scene.children[4].scale.set(1,1,1);
				scene.children[5].scale.set(1,1,1);
			}
			else if (parseInt(personHeight) >= 150){
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
		if (personAge && personHeight && personWeight){
			let heightFormated = personHeight.toString().replace(/(\d)(?=(\d{2})+(?!\d))/g, "$1.");
			resultIMC = roundToTwo(personWeight / (parseFloat(heightFormated) * parseFloat(heightFormated)));

			let genderData;

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
					isLoading = false;
				}
			},1000);

			if (!loadProgress) {
				isLoading = true;
				loadProgress = true;
				window.setTimeout(() => {
					partialProgress('.progress-bar.low',progressData.low.range);
					partialProgress('.progress-bar.normal',progressData.normal.range);
					partialProgress('.progress-bar.override',progressData.obesity.range);
					partialProgress('.progress-bar.obesity',progressData.override.range);
				},500);
			}
		}
	}

	const calculateProgressTag = (resultIMC) => {
		var item = resultIMC*10;
		positionLeft = '0px';

		if (resultIMC <= progressData.low.limit) {
			backgrondColor = '#ffc107';
			scene.children[4].children[2].material.color = {r: 0.7, g: 0.5, b: 0}; //yellow
			scene.children[5].children[1].material.color = {r: 0.7, g: 0.5, b: 0}; //yellow
		}
		else if (resultIMC <= progressData.normal.limit){
			backgrondColor = '#8bc34a';
			scene.children[4].children[2].material.color = {r: 0.3, g: 0.5, b: 0.1}; //green
			scene.children[5].children[1].material.color = {r: 0.3, g: 0.5, b: 0.1}; //green
		}
		else if (resultIMC <= progressData.override.limit){
			backgrondColor = '#ffa726';
			scene.children[4].children[2].material.color = {r: 0.8, g: 0.4, b: 0}; //orange
			scene.children[5].children[1].material.color = {r: 0.8, g: 0.4, b: 0}; //orange
		}
		else if (resultIMC <= progressData.obesity.limit) {
			backgrondColor = '#ef6c00';
			scene.children[4].children[2].material.color = {r: 0.8, g: 0.3, b: 0}; //orange dark
			scene.children[5].children[1].material.color = {r: 0.8, g: 0.3, b: 0}; //orange dark
		}
		else {
			backgrondColor = '#c62828';
			scene.children[4].children[2].material.color = {r: 0.6, g: 0.1, b: 0.1}; //red
			scene.children[5].children[1].material.color = {r: 0.6, g: 0.1, b: 0.1}; //red
		}

		if (resultIMC >= progressData.morbid.limit){
			positionLeft = '90%';
		}
		else {
			positionLeft = document.querySelector('[data-item="'+item+'"]').getBoundingClientRect().left + window.scrollX + 'px';
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

</script>

<Animation
	scene={scene}
	handleGetAnimationScene={(param) => getAnimationScene(param)}
/>

<Calculator
	optionsGender={optionsGender}
	personGender={personGender}
	personAge={personAge}
	personHeight={personHeight}
	personWeight={personWeight}
	idealWeight={idealWeight}
	handleChangeGender={(param) => changeGender(param)}
	handleChangeAge={(param) => changeAge(param)}
	handleChangeHeight={(param) => changeHeight(param)}
	handleChangeWeight={(param) => changeWeight(param)}
	handleCalculateIMC={() => calculateIMC()}
/>

<Result
	resultIMC={resultIMC}
	positionLeft={positionLeft}
	backgrondColor={backgrondColor}
	loadProgress={loadProgress}
/>

<Loading
	isLoading={isLoading}
/>