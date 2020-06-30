<script>
    import {
        Button,
        Form,
        FormGroup,
        Input,
        Label,
        Card,
        CardBody,
        CardHeader,
        CardTitle,
		Toast,
		ToastHeader,
		ToastBody
	} from 'sveltestrap';
	
	import { fly, fade } from 'svelte/transition';
    
	export let optionsGender;
    export let personGender;
    export let personHeight;
	export let personWeight;
	export let handleChangeGender;
	export let handleChangeHeight;
	export let handleChangeWeight;
	export let handleCalculateIMC;
	export let idealWeight;

</script>

<section id="calculator" class="wrapper">
	<Card color="dark" inverse>
		<CardHeader>
			<CardTitle>
				<h1 class="page-title">Peso ideal - Calculadora IMC</h1>
			</CardTitle>
		</CardHeader>
		<CardBody>
			<Form id="calculator" on:submit={e => e.preventDefault()}>
			
				<div class="radio-group">
					{#each optionsGender as value}
						<FormGroup>
							<Label>
								<input
									type="radio"
									{value}
									bind:group={personGender}
									on:change={handleChangeGender(personGender)}
									required
								>
								{value}
							</Label>
						</FormGroup>
					{/each}
				</div>

				<FormGroup>
					<Label for="heightInput">Altura:</Label>
					<Input
						type="number"
						name="height"
						id="heightInput"
						placeholder="Digite sua altura (ex: 170 cm)"
						minlength="1"
						maxlength="4"
						bind:value={personHeight}
						required
						on:change={handleChangeHeight(personHeight)}
						class="{personHeight === undefined || personHeight === '' ? 'has-error' : ''}"
					/>
				</FormGroup>

				<FormGroup>
					<Label for="weightInput">Peso:</Label>
					<Input
						type="number"
						name="weight"
						id="weightInput"
						placeholder="Digite seu peso (ex: 85 quilos)"
						minlength="1"
						maxlength="3"
						bind:value={personWeight}
						required
						on:change={handleChangeWeight(personWeight)}
						class="{personWeight === undefined || personWeight === '' ? 'has-error' : ''}"
					/>
				</FormGroup>

				<Button color="success" block type="button" on:click={handleCalculateIMC}>
					Calcular
				</Button>
			</Form>
			{#if idealWeight}
				<br/>
				<div in:fly="{{y: 50, duration: 500 }}" out:fly="{{y: 50, duration: 500 }}">
					<Toast class="mr-1">
						<ToastBody>
							Faixa de peso ideal: <strong>{idealWeight.weight} kg</strong>
						</ToastBody>
					</Toast>
				</div>
			{/if}

		</CardBody>
	</Card>
</section>

<style>
	:global(.card-header) {
		background-color: rgba(0, 0, 0, .2);
	}
	:global(.card-title) {
		margin-bottom: 0;
	}

	:global(.card-title .page-title) {
		font-size: 18px;
		margin-bottom: 0;
	}

	:global(.radio-group .form-group label):hover {
		cursor: pointer;
	}

	:global(.radio-group .form-group) {
		margin-right: 24px;
	}

	.radio-group {
		display: flex;
	}

	:global(.toast-body) {
		font-size: 16px;
		color: white;
		background-color: #5e64ff;
	}

	:global(.toast-header) {
		color: #333;
	}

	:global(.toast-body strong) {
		font-size: 18px;
	}
	
	:global(:invalid) {
		box-shadow: none;
	}

	:global(:-moz-submit-invalid) {
		box-shadow: none;
	}

	:global(:-moz-ui-invalid) {
		box-shadow:none;
	}

	:global(.form-control.has-error) {
		border-color: red;
	}

	:global(.form-control.has-error::placeholder) {
		color: red;
		opacity: 1;
	}

	@media (min-width:320px) {
		:global(.wrapper) {
			position: absolute;
			width: 100%;
			min-height: 346px;
			max-height: 0;
			border-radius: 4px;
			transition: all .5s ease-in-out;
			box-shadow: 0 0 8px rgba(0,0,0, .25);
			bottom: 0;
			top: 0;
			z-index: 99;
		}
		:global(.toast){
			width: 100%;
			max-width: 100%;
			text-align: center;
		}
	}

	@media (min-width: 480px) {
		
	}

	@media (min-width: 801px) {
		:global(.wrapper) {
			position: absolute;
			right: 10%;
			top: 15%;
			bottom: auto;
			width: 320px;
		}
	}

	@media (min-width:1025px) {
		:global(.wrapper) {
			right: 20%;
		}
	}

	@media (min-width: 1441px) {
		:global(.wrapper) {
			right: 30%;
			top: 240px;
		}
	}
	
</style>