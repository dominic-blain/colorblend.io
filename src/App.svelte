<script>
	import { onMount } from 'svelte';
	import TitleCharacter from './components/TitleCharacter.svelte';
	import Blend from './components/Blend.svelte';
	import createColorPicker from './utils/createColorPicker.js';
	import generateWitnessColor from './utils/generateWitnessColor.js';
	import generateCSSVar from './utils/generateCSSVar.js';
	import generateColorsFromCode from './utils/generateColorsFromCode';

	let title = 'COLORBLEND';
	
	let colors = {
		fore: {r:0, g:0, b:0},
		back: {r:255, g:255, b:255}
	};
	let alphas = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];

	let forePicker = null;
	let backPicker = null;
	let query = '';
	$: faviconHref = `/api/favicon?${query.toString()}`;

	$: witness = generateWitnessColor(colors.fore, colors.back);
	$: CSSVars = [
		generateCSSVar('fore', colors.fore),
		generateCSSVar('back', colors.back),
		generateCSSVar('witness', witness),
	].join(' ');
	
	$: console.log(query.toString());
	

	function initPicker (picker, colorName) {
		picker.on('change', color => updateColor(colorName, color.toRGBA()));
		picker.on('changestop', () => updateQuery())
	}

	function updateColor(name, color) {
		colors[name] = {
			r: Math.round(color[0]),
			g: Math.round(color[1]),
			b: Math.round(color[2])
		};
		colors = colors;
	}

	function updateQuery() {
		query = new URLSearchParams('c=' + [
			colors.fore.r,
			colors.fore.g,
			colors.fore.b,
			colors.back.r,
			colors.back.g,
			colors.back.b,
		].join('-'));
		window.history.pushState({}, '', '?' + query.toString());
	}

	function getColorsFromQuery() {
		const code = new URL(window.location.href).searchParams.get('c');
		colors = generateColorsFromCode(code, colors);
		updateQuery();
	}

	onMount(() => {
		getColorsFromQuery();
		forePicker = createColorPicker('.picker.foreground');
		backPicker = createColorPicker('.picker.background');
		forePicker.on('init', picker => initPicker(picker, 'fore'));
		backPicker.on('init', picker => initPicker(picker, 'back'));
	});
		
</script>

<section style={CSSVars}>
	<h1>
		{#each title.split('') as character, i}
			<TitleCharacter {character} {...colors} progress={1 / ((title.length - 1) / i)} />
		{/each}
	</h1>
	<div class="foreground picker">
		<div class="picker-value"></div>
	</div>
	<div class="background picker">
		<div class="picker-value"></div>
	</div>

	<main>
		{#each alphas as alpha}
			<div class="swatch">
				<Blend {...colors} {alpha} />
			</div>
		{/each}
	</main>
</section>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="{faviconHref}">
</svelte:head>

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
	.picker.foreground { background-color: var(--fore); }
    .picker.foreground .picker-value { color: var(--back); }
	.picker.background { background-color: var(--back); }
    .picker.background .picker-value { color: var(--fore); }
    
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