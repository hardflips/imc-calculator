<script>
    import { Progress } from 'sveltestrap';
    import { fade } from 'svelte/transition';

    export let resultIMC;
    export let positionTag;
	export let backgrondColor;
	export let loadProgress;

	let widthWindow = window.innerWidth;

	const onWindowResize = () => {
		widthWindow = window.innerWidth;
	}

	window.addEventListener( 'resize', onWindowResize, false );
</script>

{#if loadProgress}
	<div class="progress-wrapper" in:fade="{{duration: 500 }}" out:fade="{{duration: 500 }}">
		<Progress multi>
			<Progress bar color="low" value="{widthWindow <= 801 ? '100' : '20'}" class="low">
				<span>Abaixo do peso <br><small>0,0 - 18,4</small></span>
			</Progress>
			<Progress bar color="normal" value="{widthWindow <= 801 ? '100' : '20'}" class="normal">
				<span>Peso saudável <br><small>18,5 - 24,9</small></span>
			</Progress>
			<Progress bar color="override" value="{widthWindow <= 801 ? '100' : '20'}" class="override">
				<span>Sobrepeso <br><small>25 - 29,9</small></span>
			</Progress>
			<Progress bar color="obesity" value="{widthWindow <= 801 ? '100' : '20'}" class="obesity">
				<span>Obeso <br><small>30 - 38,9</small></span>
			</Progress>
			<Progress bar color="morbid" value="{widthWindow <= 801 ? '100' : '20'}">
				<span>Obeso mórbido <br><small>39,0 +</small></span>
			</Progress>
		</Progress>

		{#if resultIMC}
			<div class="tag-result" out:fade="{{duration: 500 }}"
				style="left: calc({widthWindow <= 801 ? 'auto' : positionTag} - 65px); top: calc({widthWindow <= 801 ? positionTag : 'auto'}); background-color:{backgrondColor}">
				<span>Seu IMC</span>
				<br>
				<strong>{resultIMC}</strong>
				<div class="arrow-down" style="border-top-color:{widthWindow <= 801 ? '#333' : backgrondColor}"></div>
			</div>
		{/if}
	</div>
{/if}


<style>
    :global(.progress) {
		width: 100%;
		height: 100%;
		bottom: 0;
		position: fixed;
		overflow: visible;
	}

	:global(.progress-bar) {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	:global(.progress-bar span) {
		color: #333;
		width: 100%;
		text-align: center;
		font-size: 16px;
	}

	:global(.progress-bar small) {
		font-size: 16px;
		font-weight: bold;
	}

	:global(.progress-bar .block) {
		height: 10px;
		opacity: 0;
	}

	:global([color="low"]) {
		background-color: #ffc107;
	}

	:global([color="normal"]) {
		background-color: #8bc34a;
	}

	:global([color="override"]) {
		background-color: #ffa726;
	}

	:global([color="obesity"]) {
		background-color: #ef6c00;
	}

	:global([color="morbid"]) {
		background-color: #c62828;
	}

	:global([color="low"] .block) {
		width: 1.84%;
		background-color: purple;
	}

	:global([color="normal"] .block) {
		width: 6.4%;
		background-color: cyan;
	}

	:global([color="override"] .block) {
		width: 4.9%;
		background-color: red;
	}

	:global([color="obesity"] .block) {
		width: 8.9%;
		background-color: black;
	}

    .tag-result {
		position: fixed;
		height: 72px;
		padding: 8px;
		background-color: #8bc34a;
		border-radius: 8px;
		text-align: center;
		transition: left .3s ease-in-out, top .3s ease-in-out;
	}

	.tag-result strong {
		font-size: 24px;
	}

	.tag-result .arrow-down {
		position: absolute;
		content: "";
		display: block;
		width: 0;
		height: 0;
		bottom: -10px;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 10px solid #8bc34a;
		transition: opacity .3s 1s ease-in-out;
	}

    .progress-wrapper + .tag-result {
		opacity: 1;
	}

	@media (min-width:320px) {
		:global(.progress) {
			flex-direction: column;
			position: relative;
			height: auto;
		}
		.progress-wrapper {
			position: relative;
			top: -50%;
		}
		:global(.progress-bar) {
			height: 100px;
			min-height: 100px;
			flex-direction: column;
		}
		:global(.progress-bar span) {
			position: absolute;
			top: calc(50% - 24px);
			color: white;
		}
		:global(.progress-bar .block) {
			width: 100%;
		}
		:global([color="low"] .block) {
			height: 1.84%;
		}
		:global([color="normal"] .block) {
			height: 6.4%;
		}
		:global([color="override"] .block) {
			height: 4.9%;
		}
		:global([color="obesity"] .block) {
			height: 8.9%;
		}
		.tag-result {
			position: absolute;
			bottom: auto;
			color: #333;
			border: 1px solid #333;
			width: 80px;
			left: 8px;
		}
		.tag-result .arrow-down {
			transform: rotate(-90deg);
			top: calc(50% - 5px);
			right: -15px;
			bottom: auto;
			left: auto;
		}
	}

	@media (min-width: 480px) {
		
	}

	@media (min-width: 801px) {
		:global(.progress) {
			position: fixed;
			flex-direction: row;
		}
		.progress-wrapper {
			position: relative;
			top: auto;
		}
		:global(.progress-bar) {
			height: auto;
			min-height: initial;
			flex-direction: row;
			padding: 8px 0;
		}
		:global(.progress-bar span) {
			top: -54px;
			color: #333;
		}
		:global(.progress-bar .block) {
			height: 100%;
		}
		:global([color="low"] .block) {
			width: 1.84%;
		}
		:global([color="normal"] .block) {
			width: 6.4%;
		}
		:global([color="override"] .block) {
			width: 4.9%;
		}
		:global([color="obesity"] .block) {
			width: 8.9%;
		}
		.tag-result {
			position: fixed;
			border: none;
			color: white;
			width: 130px;
			bottom: 96px;
			top: auto;
			right: auto;
			left: 0;
		}
		.tag-result .arrow-down {
			transform: rotate(0deg);
			top: auto;
			right: auto;
			bottom: -10px;
			left: 55px;
		}
	}

	@media (min-width:1025px) {

	}

	@media (min-width: 1441px) {
		
	}
</style>