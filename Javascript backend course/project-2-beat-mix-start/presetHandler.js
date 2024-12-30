// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, index, newPresetArray) => {
    if (requestType !== 'GET' && requestType !== 'PUT') {
        return [400, null]; // Handle invalid requestType first
    }

    if (index >= 0 && index <= 15) {
        if (requestType === 'GET') {
            if (presets[index]) {
                return [200, presets[index]];
            } else {
                return [404, null];
            }
        } else if (requestType === 'PUT') {
            if (!newPresetArray) {
                return [404, null];
            } else {
                presets[index] = newPresetArray;
                return [200, newPresetArray];
            }
        } 
    } else {
        return [404, null];
    }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;

