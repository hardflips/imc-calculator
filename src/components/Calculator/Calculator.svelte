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
	
	import { fly } from 'svelte/transition';
    
	export let optionsGender;
    export let personGender;
    export let personAge;
    export let personHeight;
	export let personWeight;
	export let handleChangeGender;
	export let handleChangeAge;
	export let handleChangeHeight;
	export let handleChangeWeight;
	export let handleCalculateIMC;
	export let idealWeight;

</script>

<div class="wrapper">
	<Card color="dark" inverse>
		<CardHeader>
			<CardTitle>Calcule seu IMC</CardTitle>
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
					<Label for="ageInput">Idade:</Label>
					<Input
						type="number"
						name="age"
						id="ageInput"
						placeholder="Digite sua idade"
						minlength="1"
						maxlength="3"
						bind:value={personAge}
						required
						on:change={handleChangeAge(personAge)}
					/>
				</FormGroup>

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
					/>
				</FormGroup>

				<Button color="success" type="button" on:click={handleCalculateIMC}>
					Calcular
				</Button>
			</Form>
			{#if idealWeight}
				<br/>
				<div in:fly="{{duration: 500 }}">
					<Toast class="mr-1">
						<ToastBody>
							Sua faixa de peso ideal: <strong>{idealWeight.weight} kg</strong>
						</ToastBody>
					</Toast>
				</div>
			{/if}

		</CardBody>
	</Card>
</div>

<style>
	:global(.card-title) {
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
		color: #333;
	}

	:global(.toast-header) {
		color: #333;
	}

	:global(.toast-body strong) {
		font-size: 18px;
		color: #28a745;
	}

	@media (min-width:320px) {
		:global(.wrapper) {
			position: absolute;
			width: 100%;
			transition: all .5s ease-in-out;
			box-shadow: 0 0 8px rgba(0,0,0, .25);
			bottom: 0;
			top: 60%;
		}
	}

	@media (min-width: 480px) {
		
	}

	@media (min-width: 801px) {
		:global(.wrapper) {
			right: 5%;
			top: 10%;
			bottom: auto;
			width: 400px;
		}
	}

	@media (min-width:1025px) {
		:global(.wrapper) {
			right: 15%;
		}
	}

	@media (min-width: 1441px) {
		:global(.wrapper) {
			right: 25%;
			top: 240px;
		}
	}
	
</style>