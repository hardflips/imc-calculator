<script>
    import { Progress } from 'sveltestrap';
    import { fade } from 'svelte/transition';

    export let resultIMC;
    export let positionLeft;
	export let backgrondColor;
	export let loadProgress;
</script>

{#if loadProgress}
	<div class="progress-wrapper" in:fade="{{duration: 500 }}" out:fade="{{duration: 500 }}">
		<Progress multi>
			<Progress bar color="low" value="20" class="low">
				<span>Abaixo do peso <br><small>0,0 - 18,4</small></span>
			</Progress>
			<Progress bar color="normal" value="20" class="normal">
				<span>Peso saudável <br><small>18,5 - 24,9</small></span>
			</Progress>
			<Progress bar color="override" value="20" class="override">
				<span>Sobrepeso <br><small>25 - 29,9</small></span>
			</Progress>
			<Progress bar color="obesity" value="20" class="obesity">
				<span>Obeso <br><small>30 - 38,9</small></span>
			</Progress>
			<Progress bar color="morbid" value="20">
				<span>Obeso mórbido <br><small>39,0 +</small></span>
			</Progress>
		</Progress>
	</div>
{/if}

{#if resultIMC}
	<div class="tag-result" out:fade="{{duration: 500 }}" style="left: calc({positionLeft} - 65px); background-color:{backgrondColor}">
		<span>Seu IMC</span>
		<br>
		<strong>{resultIMC}</strong>
		<div class="arrow-down" style="left: 55px; border-top-color:{backgrondColor}"></div>
	</div>
{/if}


<style>
    :global(.progress) {
		width: 100%;
		bottom: 0;
		position: fixed;
		overflow: visible;
	}

	:global(.progress-bar) {
		position: relative;
		padding: 8px 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	}

	:global(.progress-bar span) {
		color: #333;
		position: absolute;
		top: -54px;
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
		opacity: 0;
		position: fixed;
		width: 130px;
		height: 72px;
		padding: 8px;
		background-color: #8bc34a;
		color: #fff;
		border-radius: 8px;
		bottom: 96px;
		left: 0;
		text-align: center;
		transition: left .3s ease-in-out, opacity .3s 1s ease-in-out;
	}

	.tag-result strong {
		font-size: 24px;
	}

	.arrow-down {
		position: absolute;
		content: "";
		display: block;
		width: 0;
		height: 0;
		top: 71px;
		bottom: -10px;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 10px solid #8bc34a;
		transition: opacity .3s 1s ease-in-out;
	}

    .progress-wrapper + .tag-result {
		opacity: 1;
	}
</style>