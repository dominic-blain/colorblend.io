const DEFAULT_COLORS = {
    fore: {r:0, g:0, b:0},
    back: {r:255, g:255, b:255}
}

export default function (code, defaultColors = DEFAULT_COLORS) {
    if (!code) return defaultColors;
    const values = code.split('-').map(v => parseInt(v));
    const colors = {
        fore: {
            r: !!values[0] ? values[0] : defaultColors.fore.r,
            g: !!values[1] ? values[1] : defaultColors.fore.g,
            b: !!values[2] ? values[2] : defaultColors.fore.b
        },
        back: {
            r: !!values[3] ? values[3] : defaultColors.back.r,
            g: !!values[4] ? values[4] : defaultColors.back.g,
            b: !!values[5] ? values[5] : defaultColors.back.b
        }
    }
    return colors;
}