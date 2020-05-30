<script>
	import Blend from './components/Blend.svelte';
	import generateWitnessColor from './utils/generateWitnessColor.js';
	import generateCSSVar from './utils/generateCSSVar.js';
	
	let fore = {r:0, g:0, b:0};
	let back = {r:255, g:255, b:255};
	let alphas = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];

	$: witness = generateWitnessColor(fore, back);
	$: CSSVars = [
		generateCSSVar('fore', fore),
		generateCSSVar('back', back),
		generateCSSVar('witness', witness),
	].join(' ');
		
</script>

<section style={CSSVars}>
	<h1>Colorblend</h1>
	<div class="foreground picker">
		<div class="picker-value"></div>
	</div>
	<div class="background picker">
		<div class="picker-value"></div>
	</div>

	<main>
		{#each alphas as alpha}
			<div class="swatch">
				<Blend {fore} {back} {alpha} />
			</div>
		{/each}
	</main>
</section>

<style>
	section {
        width: 100%;
        min-height: 100vh;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 40vw 40vw 1fr;
        background-color: var(--back);
    }
    h1 {
        font-size: 2.5vw;
        font-weight: 900;
        margin: 0;
        grid-column-end: span 2;
    }
    main {
        grid-column-end: span 2;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
    .picker {
        cursor: pointer;
        position: relative;
    }
    .picker-value {
        color: var(--back);
        position: absolute;
        top: 0; 
        left: 0;
        margin: 0;
        z-index: 3;
        padding: 1vw;
        font-size: 12px;
        font-weight: 400;
        line-height: 1.25em;
    }
    .picker.background .picker-value {
        color: var(--fore);
    }
    
    .swatch {
        grid-column-end: span 1;
    }
    @media (min-width: 700px) {
        h1 {
            grid-column-end: span 1;
        }
        section {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 13.33vw 1fr;
        }
        main {
            grid-column-end: span 3;
        }
    }
</style>