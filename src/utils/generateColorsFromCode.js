const DEFAULT_COLORS = {
    fore: {r:0, g:0, b:0},
    back: {r:255, g:255, b:255}
}

export default function (code, defaultColors = DEFAULT_COLORS) {
    if (!code) return defaultColors;
    const values = code.split('-').map(v => parseInt(v));
    const colors = {
        fore: {
            r: values[0] != 'NaN' ? values[0] : defaultColors.fore.r,
            g: values[1] != 'NaN' ? values[1] : defaultColors.fore.g,
            b: values[2] != 'NaN' ? values[2] : defaultColors.fore.b
        },
        back: {
            r: values[3] != 'NaN' ? values[3] : defaultColors.back.r,
            g: values[4] != 'NaN' ? values[4] : defaultColors.back.g,
            b: values[5] != 'NaN' ? values[5] : defaultColors.back.b
        }
    }
    return colors;
}