<script>
    import blendColors from '../utils/blendColors.js';
    import generateCSSVar from '../utils/generateCSSVar.js';

    export let character;
    export let progress;
    export let fore;
    export let back;

    $: CSSVars = [
        generateCSSVar('fore', blendColors(fore, back, progress)),
        generateCSSVar('back', blendColors(back, fore, progress))
    ].join(' ');
    
</script>

<span style={CSSVars}>{character}</span>

<style>
    span {
        display: inline-flex;
        width: 20%;
        height: 50%;
        align-items: center;
        justify-content: center;
        color: var(--fore);
        background-color: var(--back);
    }
</style>