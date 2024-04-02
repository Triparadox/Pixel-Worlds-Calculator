/**
 * A dictionary that maps each fish species and size to its
 * corresponding gems value and count.
 * The key is a string in the format "species_size_amount".
 * The value is an array where the first element is the gems value
 * and the second element is the fish count.
 */
let fishValue = {
    "kingfish_huge_amount": [300, 0],
    "kingfish_large_amount": [100, 0],
    "kingfish_medium_amount": [70, 0],
    "kingfish_small_amount": [40, 0],
    "kingfish_tiny_amount": [10, 0],
    "herring_huge_amount": [300, 0],
    "herring_large_amount": [100, 0],
    "herring_medium_amount": [70, 0],
    "herring_small_amount": [40, 0],
    "herring_tiny_amount": [10, 0],
    "goldfish_huge_amount": [450, 0],
    "goldfish_large_amount": [150, 0],
    "goldfish_medium_amount": [105, 0],
    "goldfish_small_amount": [60, 0],
    "goldfish_tiny_amount": [15, 0],
    "butterflyfish_huge_amount": [450, 0],
    "butterflyfish_large_amount": [150, 0],
    "butterflyfish_medium_amount": [105, 0],
    "butterflyfish_small_amount": [60, 0],
    "butterflyfish_tiny_amount": [15, 0],
    "halibut_huge_amount": [600, 0],
    "halibut_large_amount": [200, 0],
    "halibut_medium_amount": [140, 0],
    "halibut_small_amount": [80, 0],
    "halibut_tiny_amount": [20, 0],
    "tuna_huge_amount": [1200, 0],
    "tuna_large_amount": [400, 0],
    "tuna_medium_amount": [280, 0],
    "tuna_small_amount": [160, 0],
    "tuna_tiny_amount": [40, 0],
    "acid_huge_amount": [2400, 0],
    "acid_large_amount": [800, 0],
    "acid_medium_amount": [560, 0],
    "acid_small_amount": [320, 0],
    "acid_tiny_amount": [80, 0],
    "angler_huge_amount": [900, 0],
    "angler_large_amount": [300, 0],
    "angler_medium_amount": [210, 0],
    "angler_small_amount": [120, 0],
    "angler_tiny_amount": [30, 0],
    "crab_huge_amount": [9600, 0],
    "crab_large_amount": [3200, 0],
    "crab_medium_amount": [2240, 0],
    "crab_small_amount": [1280, 0],
    "crab_tiny_amount": [320, 0]
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
