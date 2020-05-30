import Pickr from '@simonwep/pickr';

export default function (el) {
    const picker = new Pickr({
        el: el,
        theme: 'nano',
        useAsButton: true,
        comparison: false,
        lockOpacity: true,
        defaultRepresentation: 'RGBA',
        components: {

            // Defines if the palette itself should be visible.
            // Will be overwritten with true if preview, opacity or hue are true
            palette: true,
    
            preview: false, // Display comparison between previous state and new color
            opacity: true, // Display opacity slider
            hue: true,     // Display hue slider
    
            // show or hide components on the bottom interaction bar.
            interaction: {
    
                // Buttons, if you disable one but use the format in default: or setColor() - set the representation-type too!
                hex: false,  // Display 'input/output format as hex' button  (hexadecimal representation of the rgba value)
                rgba: false, // Display 'input/output format as rgba' button (red green blue and alpha)
                hsla: false, // Display 'input/output format as hsla' button (hue saturation lightness and alpha)
                hsva: false, // Display 'input/output format as hsva' button (hue saturation value and alpha)
                cmyk: false, // Display 'input/output format as cmyk' button (cyan mangenta yellow key )
    
                input: true, // Display input/output textbox which shows the selected color value.
                // the format of the input is determined by defaultRepresentation,
                // and can be changed by the user with the buttons set by hex, rgba, hsla, etc (above).
                cancel: false, // Display Cancel Button, resets the color to the previous state
                clear: false, // Display Clear Button; same as cancel, but keeps the window open
                save: false,  // Display Save Button,
            },
        },
    });
    return picker;
}