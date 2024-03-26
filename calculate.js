// Fish gems dictionary
let fishValue = {
    "kingfish_huge_amount": 300,
    "kingfish_large_amount": 100,
    "kingfish_medium_amount": 70,
    "kingfish_small_amount": 40,
    "kingfish_tiny_amount": 10,
    "herring_huge_amount": 300,
    "herring_large_amount": 100,
    "herring_medium_amount": 70,
    "herring_small_amount": 40,
    "herring_tiny_amount": 10,
    "goldfish_huge_amount": 450,
    "goldfish_large_amount": 150,
    "goldfish_medium_amount": 105,
    "goldfish_small_amount": 60,
    "goldfish_tiny_amount": 15,
    "butterflyfish_huge_amount": 450,
    "butterflyfish_large_amount": 150,
    "butterflyfish_medium_amount": 105,
    "butterflyfish_small_amount": 60,
    "butterflyfish_tiny_amount": 15,
    "halibut_huge_amount": 600,
    "halibut_large_amount": 200,
    "halibut_medium_amount": 140,
    "halibut_small_amount": 80,
    "halibut_tiny_amount": 20,
    "tuna_huge_amount": 1200,
    "tuna_large_amount": 400,
    "tuna_medium_amount": 280,
    "tuna_small_amount": 160,
    "tuna_tiny_amount": 40,
    "acid_huge_amount": 2400,
    "acid_large_amount": 800,
    "acid_medium_amount": 560,
    "acid_small_amount": 320,
    "acid_tiny_amount": 80,
    "angler_huge_amount": 900,
    "angler_large_amount": 300,
    "angler_medium_amount": 210,
    "angler_small_amount": 120,
    "angler_tiny_amount": 30,
    "crab_huge_amount": 9600,
    "crab_large_amount": 3200,
    "crab_medium_amount": 2240,
    "crab_small_amount": 1280,
    "crab_tiny_amount": 320,
}

let gemCounter = 0;

document.addEventListener("DOMContentLoaded", startFunction);


function startFunction() {
    // Grab all fish input fields
    let inputFields = document.querySelectorAll(".fish_amount");

    // Add on-change listener to each element
    for(let i = 0; i < inputFields.length; i++) {
        let eachField = inputFields[i];
        eachField.addEventListener("change", function(event) {
            addGem(event.target.id);
        });
    }
}

function addGem(fieldId) {
    let fishCount = parseFloat(document.getElementById(fieldId).value) || 0;
    gemCounter = gemCounter + (fishValue[fieldId] * fishCount);
    console.log(`Total fish value: ${gemCounter}`);
}
