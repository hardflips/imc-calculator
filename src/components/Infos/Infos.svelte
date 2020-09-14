<script>
    import {
        Container
    } from 'sveltestrap';
    
    import Results from './components/Results.svelte';
    import Infographics from './components/Infographics.svelte';
    import Alerts from './components/Alerts.svelte';
    import Important from './components/Important.svelte';

</script>

<div id="information">
    <Container>

        <Results/>

        <Infographics/>

        <Alerts/>

        <Important/>
        
    </Container>
</div>

<style>
    :global(.row) {
        margin-top: 32px;
        margin-bottom: 32px;
    }
    :global(.card) {
        margin-bottom: 24px;
    }
    #information {
        position: relative;
        z-index: 0;
    }
    :global(.subtitle) {
        display: flex;
        align-items: center;
    }
    
    @media (min-width:320px) {
        #information {
            top: 320px;
        }
    }
	@media (min-width: 801px) {
        #information {
            top: auto;
        }
    }
</style>