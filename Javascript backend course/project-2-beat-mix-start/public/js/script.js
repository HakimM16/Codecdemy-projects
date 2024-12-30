// Drum Arrays
let kicks = [];
let snares = [];
let hiHats = [];
let rideCymbals = [];

for (let i = 0; i < 16; i++) {
  kicks.push(false);
  snares.push(false);
  hiHats.push(false);
  rideCymbals.push(false);
}

// Function to change the value of a drum array
function toggleDrum(arrayName, index) {
    switch (arrayName) {
        case 'kicks':
            if (index >= 0 && index <= 15) {
                if (kicks[index] === true) {
                    kicks[index] = false;
                } else {
                    kicks[index] = true;
                }
            }
            break;
        case 'snares':
            if (index >= 0 && index <= 15) {
                if (snares[index] === true) {
                    snares[index] = false;
                } else {
                    snares[index] = true;
                }
            }
            break;
        case 'hiHats':
            if (index >= 0 && index <= 15) {
                if (hiHats[index] === true) {
                    hiHats[index] = false;
                } else {
                    hiHats[index] = true;
                }
            }
            break;
        case 'rideCymbals':
            if (index >= 0 && index <= 15) {
                if (rideCymbals[index] === true) {
                    rideCymbals[index] = false;
                } else {
                    rideCymbals[index] = true;
                }
            }
            break;
        default:
            break;
    }
}

// Function to reset the values of a drum array
function clear(arrayName) {
    switch (arrayName) {
        case 'kicks':
            kicks.fill(false);
            break;
        case 'snares':
            snares.fill(false);
            break;
        case 'hiHats':
            hiHats.fill(false);
            break;
        case 'rideCymbals':
            rideCymbals.fill(false);
            break;
        default:    
            break;
    }
}

// Function to invert the values of a drum array
function invert(arrayName) {
    switch (arrayName) {
        case 'kicks':
            for (let i = 0; i < kicks.length; i++) {
                if (kicks[i] === true) {
                    kicks[i] = false;
                } else {
                    kicks[i] = true;
                }
            }
            break;
        case 'snares':
            for (let i = 0; i < snares.length; i++) {
                if (snares[i] === true) {
                    snares[i] = false;
                } else {
                    snares[i] = true;
                }
            }
            break;
        case 'hiHats':
            for (let i = 0; i < hiHats.length; i++) {
                if (hiHats[i] === true) {
                    hiHats[i] = false;
                } else {
                    hiHats[i] = true;
                }
            }
            break;
        case 'rideCymbals':
            for (let i = 0; i < rideCymbals.length; i++) {
                if (rideCymbals[i] === true) {
                    rideCymbals[i] = false;
                } else {
                    rideCymbals[i] = true;
                }
            }
            break;
        default:
            break;
    }
}
