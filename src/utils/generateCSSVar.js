export default function (handle, color, alpha = 1) {
    const mode = (alpha === 1) ? 'rgb' : 'rgba';
    const output = [`--${handle}: ${mode}(${color.r}, ${color.g}, ${color.b}`];
    if (mode === 'rgba') output.push(`, ${alpha}`);
    output.push(');');
    return output.join('');
}