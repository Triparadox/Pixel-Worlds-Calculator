/**
 * A dictionary that maps each fish species and size to its
 * corresponding gems value and count.
 * The key is a string in the format "species_size_amount".
 * The value is an array where the first element is the gems value
 * and the second element is the fish count.
 */
let fishValue = {
    "kingfish": {
      "huge": [300, 0],
      "large": [100, 0],
      "medium": [70, 0],
      "small": [40, 0],
      "tiny": [10, 0]
    },
    "herring": {
      "huge": [300, 0],
      "large": [100, 0],
      "medium": [70, 0],
      "small": [40, 0],
      "tiny": [10, 0]
    },
    "goldfish": {
      "huge": [450, 0],
      "large": [150, 0],
      "medium": [105, 0],
      "small": [60, 0],
      "tiny": [15, 0]
    },
    "butterflyfish": {
      "huge": [450, 0],
      "large": [150, 0],
      "medium": [105, 0],
      "small": [60, 0],
      "tiny": [15, 0]
    },
    "halibut": {
      "huge": [600, 0],
      "large": [200, 0],
      "medium": [140, 0],
      "small": [80, 0],
      "tiny": [20, 0]
    },
    "tuna": {
      "huge": [1200, 0],
      "large": [400, 0],
      "medium": [280, 0],
      "small": [160, 0],
      "tiny": [40, 0]
    },
    "acid": {
      "huge": [2400, 0],
      "large": [800, 0],
      "medium": [560, 0],
      "small": [320, 0],
      "tiny": [80, 0]
    },
    "angler": {
      "huge": [900, 0],
      "large": [300, 0],
      "medium": [210, 0],
      "small": [120, 0],
      "tiny": [30, 0]
    },
    "crab": {
      "huge": [9600, 0],
      "large": [3200, 0],
      "medium": [2240, 0],
      "small": [1280, 0],
      "tiny": [320, 0]
    }
  };  

document.addEventListener("DOMContentLoaded", scanFields);

/**
 * Attaches an "on change" event listener to all input fields with the
 * class "fish_amount".
 * When an input field changes, it calls the updateFishCount function.
 *
 * @function
 * @name scanFields
 * @returns {void}
 */
function scanFields() {
    // Grab all fish input fields
    let inputFields = document.querySelectorAll(".fish_amount");

    // Add on-change listener to each element
    for(let i = 0; i < inputFields.length; i++) {
        let eachField = inputFields[i];
        eachField.addEventListener("change", function(event) {
            // Track the new value of the column
            updateFishCount(event.target.id);
            updateGem();
        });
    }
}

/**
 * Updates fishValue dictionary based on the changed value reflected
 * in the HTML input field.
 * Updates the dictionary into 0 if unexpected value is read
 * 
 * @function
 * @param {string} fieldId 
 * @returns {void}
 */
function updateFishCount(fieldId) {
    let fishCount = parseFloat(document.getElementById(fieldId).value) || 0;
    fishValue[document.getElementById(fieldId).id][1] = fishCount;
}

function updateGem() {
    let gemCounter = 0;
    for(let key in fishValue) {
        gemCounter += (fishValue[key][0] * fishValue[key][1]);
    }
    console.log(`Total fish value: ${gemCounter}`);
    updatePageResult(gemCounter);
}

function updatePageResult(value) {
    document.getElementById("output").textContent = value;
}
