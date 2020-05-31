import generateColorsFromCode from '../src/utils/generateColorsFromCode.js';

module.exports = (req, res) => {
    const c = req.query.c;
    const colors = generateColorsFromCode(c);
    console.log(colors);
    let f = `rgb(${colors.fore.r},${colors.fore.g},${colors.fore.b})`;
    let b = `rgb(${colors.back.r},${colors.back.g},${colors.back.b})`;
    const svg = `<svg width="1023" height="1023" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="${f}" d="M0 0h1023v1023H0z"/><path fill="${b}" d="M777.66 610.772c-2.086 45.082-14.298 84.973-36.639 119.675-22.34 34.405-53.766 61.098-94.276 80.08C606.532 829.509 560.511 839 508.681 839c-85.49 0-152.809-27.731-201.958-83.194S233 622.042 233 520.904v-32.032c0-63.471 11.021-118.934 33.064-166.389 22.34-47.752 54.362-84.529 96.064-110.333C403.83 186.05 452.085 173 506.894 173c78.936 0 142.383 20.762 190.34 62.285 47.957 41.226 75.213 98.172 81.766 170.837H622.617c-1.191-39.447-11.17-67.771-29.936-84.974-18.766-17.202-47.362-25.803-85.787-25.803-39.022 0-67.617 14.533-85.788 43.599-18.17 29.066-27.702 75.483-28.595 139.25v45.824c0 69.106 8.638 118.489 25.915 148.148 17.574 29.66 47.659 44.489 90.255 44.489 36.042 0 63.596-8.453 82.659-25.358 19.064-16.906 29.192-43.748 30.383-80.525H777.66z"/></svg>`
	res.setHeader('Content-Type', 'image/svg+xml');
	res.end(svg);
}