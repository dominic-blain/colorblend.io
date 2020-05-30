<script>
    import blendColors from '../utils/blendColors.js';
    import generateCSSVar from '../utils/generateCSSVar.js';

    export let fore = {r:0, g:0, b:0};
    export let back = {r:255, g:255, b:255};
    export let alpha = 1;

    let isReverse = alpha <= 0.5;

    $: blend = blendColors(fore, back, alpha);
    $: CSSVars = [
        generateCSSVar('blend', blend),
        generateCSSVar('swatch', fore, alpha)
    ].join(' ');
</script>

<section style={CSSVars}>
    <div class="witness"></div>
    <div class="blended"></div>
    <div class="foreground"></div>
    <h2 class:isReverse>
        RGBA<br/>
        {fore.r}, {fore.g}, {fore.b}, {alpha}<br/>
        <br/>
        RGB<br/>
        {blend.r}, {blend.g}, {blend.b}
    </h2>
</section>

<style>
    section {
        grid-column: auto / span 1;
        grid-row: auto / span 1;
        width: 100%;
        height: 100%;
        position: relative;
        box-sizing: border-box;
    }
    .witness {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        background: conic-gradient(from 0deg, var(--witness), transparent);
    }
    .foreground,
    .blended {
        width: 100%;
        height: 50%;
        position: relative;
        z-index: 2;
    }
    .blended {
        background-color: var(--blend);
    }
    .foreground {
        background-color: var(--swatch);
    }
    h2 {
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
    h2.isReverse {
        color: var(--original);
    }
</style>