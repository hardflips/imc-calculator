<script>
    import { fade } from 'svelte/transition';

    export let isLoading;
</script>

{#if isLoading}
    <div class="backdrop" in:fade="{{duration: 500 }}" out:fade="{{duration: 500 }}" >
        <div class="loader"></div>
    </div>
{/if}

<style>
    .backdrop {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: rgba(255,255,255, .5);
		left: 0;
		top: 0;
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.loader {
		border: 4px solid #f3f3f3;
		border-top: 4px solid #343a40;
		border-radius: 50%;
		width: 48px;
		height: 48px;
		animation: spin 2s linear infinite;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
</style>