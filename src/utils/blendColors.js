export default function (fore, back, alpha) {
    const blend = {};
    Object.keys(fore).forEach(channel => {
        const foreValue = fore[channel];
        const backValue = back[channel];
        const blendedValue = Math.round(foreValue * alpha + (1 - alpha) * backValue);
        blend[channel] = blendedValue;
    });
    return blend;
}