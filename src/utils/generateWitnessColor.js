export default function (fore, back) {
    const witness = {};
    Object.keys(fore).forEach(channel => {
        const foreValue = fore[channel];
        const backValue = back[channel];
        const witnessValue = Math.round(backValue - (backValue - foreValue) * 0.2);
        witness[channel] = witnessValue;
    });
    return witness;
}