// imglink, card name, point type, annual fee, gas, grocery, restaurant, travel, transit, entertainment, drug store, recurring bills, general
const creditCards = [
    ["images/amexCobalt.png", "AMEX Cobalt Card", "AMEX", 156, 2, 5, 5, 2, 2, 1, 1, 1, 1],
    ["images/wealthsimpleCash.png", "Wealthsimple Cash Card", "Cashback", 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ["images/cibcAeroplanVisaInfinite.png", "CIBC Aeroplan Visa Infinite", "Aeroplan", 139, 1.5, 1.5, 1, 1, 1, 1, 1, 1, 1],
    ["images/cibcAventuraVisaInfinite.png", "CIBC Aventura Visa Infinite", "Aventura", 139, 1.5, 1.5, 1, 1, 1, 1, 1.5, 1, 1],
    ["images/cibcDividendVisaInfinite.png", "CIBC Dividend Visa Infinite", "Cashback", 120, 4, 4, 2, 1, 2, 1, 1, 2, 1],
    ["images/scotiabankSceneVisa.png", "Scotiabank Scene Visa", "Cashback", 0, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    ["images/bmoCashbackMastercard.png", "BMO Cashback Mastercard", "Cashback", 0, 0.5, 3, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5],
    ["images/bmoEclipseVisaInfinite.png", "BMO Eclipse Visa Infinite", "BMO", 120, 5, 5, 5, 1, 5, 1, 1, 1, 1]];
const rewards = ["Aeroplan", "Aventura", "AMEX", "Cashback", "Scene", "BMO"];
const defaultSpending = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let customizedSpending = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const defaultPointValuation = [2.1, 1.5, 1, 1, 1, 0.7];
let customizedPointValuation = [2.1, 1.5, 1, 1, 1, 0.7];

const numCards = creditCards.length;
const minIndex = 0;
const maxIndex = numCards - 1;
let cardIndex = 0;

// populate default fields on startup
document.addEventListener("DOMContentLoaded", function() {
    populateCardData(cardIndex);
    resetSpending();
    resetPointValuation();
});

// -------------
// credit card section

// on right arrow click - cycle to next credit card
document.getElementById("right-arrow").onclick = function() {
    cardIndex += 1;
    if (cardIndex > maxIndex) {
        cardIndex = minIndex
    }
    populateCardData(cardIndex);
};

// on left arrow click - cycle to previous credit card
document.getElementById("left-arrow").onclick = function() {
    cardIndex -= 1;
    if (cardIndex < minIndex) {
        cardIndex = maxIndex
    }
    populateCardData(cardIndex);
};

// -------------
// spending section

// on clicking the reset button - reset spending placeholders to the default
document.getElementById("btn-reset-spending").onclick = function() {
    resetSpending();
}

// on clicking the update button - update the customized spending and set placeholders to the new values
document.getElementById("btn-update-spending").onclick = function() {
    updateSpendingData();
}

// -------------
// point valuation section

// on clicking the reset button - reset point valuation placeholders to the default
document.getElementById("btn-reset-valuation").onclick = function() {
    resetPointValuation();
}

// on clicking the update button - update the customized point valuation and set placeholders to the new values
document.getElementById("btn-update-valuation").onclick = function() {
    updatePointValuationData();
}

// -------------
// optimization section

document.getElementById("btn-optimize").onclick = function() {
    optimize();
}


// -------------
// functions

function populateCardData(index) {
    document.getElementById("card-image").src = creditCards[index][0];
    document.getElementById("card-name").innerHTML = creditCards[index][1];
    document.getElementById("card-reward").innerHTML = creditCards[index][2] + " Points";
    document.getElementById("card-fee").innerHTML = "$ " + creditCards[index][3];
    document.getElementById("points-gas").innerHTML = creditCards[index][4];
    document.getElementById("points-grocery").innerHTML = creditCards[index][5];
    document.getElementById("points-restaurant").innerHTML = creditCards[index][6];
    document.getElementById("points-travel").innerHTML = creditCards[index][7];
    document.getElementById("points-transit").innerHTML = creditCards[index][8];
    document.getElementById("points-entertainment").innerHTML = creditCards[index][9];
    document.getElementById("points-drug-store").innerHTML = creditCards[index][10];
    document.getElementById("points-recurring-bills").innerHTML = creditCards[index][11];
    document.getElementById("points-general").innerHTML = creditCards[index][12];
};

function resetSpending() {
    document.getElementById("spending-gas").placeholder = defaultSpending[0];
    document.getElementById("spending-gas").value = "";
    document.getElementById("spending-grocery").placeholder = defaultSpending[1];
    document.getElementById("spending-grocery").value = "";
    document.getElementById("spending-restaurant").placeholder = defaultSpending[2];
    document.getElementById("spending-restaurant").value = "";
    document.getElementById("spending-travel").placeholder = defaultSpending[3];
    document.getElementById("spending-travel").value = "";
    document.getElementById("spending-transit").placeholder = defaultSpending[4];
    document.getElementById("spending-transit").value = "";
    document.getElementById("spending-entertainment").placeholder = defaultSpending[5];
    document.getElementById("spending-entertainment").value = "";
    document.getElementById("spending-drug-store").placeholder = defaultSpending[6];
    document.getElementById("spending-drug-store").value = "";
    document.getElementById("spending-recurring-bills").placeholder = defaultSpending[7];
    document.getElementById("spending-recurring-bills").value = "";
    document.getElementById("spending-general").placeholder = defaultSpending[8];
    document.getElementById("spending-general").value = "";
    for (let i = 0; i < defaultSpending.length; i++) {
        customizedSpending[i] = defaultSpending[i];
    }
}

function updateSpendingData() {
    customizedSpending[0] = document.getElementById("spending-gas").value;
    customizedSpending[1] = document.getElementById("spending-grocery").value;
    customizedSpending[2] = document.getElementById("spending-restaurant").value;
    customizedSpending[3] = document.getElementById("spending-travel").value;
    customizedSpending[4] = document.getElementById("spending-transit").value;
    customizedSpending[5] = document.getElementById("spending-entertainment").value;
    customizedSpending[6] = document.getElementById("spending-drug-store").value;
    customizedSpending[7] = document.getElementById("spending-recurring-bills").value;
    customizedSpending[8] = document.getElementById("spending-general").value;
}

function resetPointValuation() {
    document.getElementById("point-aeroplan").placeholder = defaultPointValuation[0];
    document.getElementById("point-aeroplan").value = "";
    document.getElementById("point-aventura").placeholder = defaultPointValuation[1];
    document.getElementById("point-aventura").value = "";
    document.getElementById("point-amex").placeholder = defaultPointValuation[2];
    document.getElementById("point-amex").value = "";
    document.getElementById("point-cashback").placeholder = defaultPointValuation[3];
    document.getElementById("point-cashback").value = "";
    document.getElementById("point-scene").placeholder = defaultPointValuation[4];
    document.getElementById("point-scene").value = "";
    document.getElementById("point-bmo").placeholder = defaultPointValuation[5];
    document.getElementById("point-bmo").value = "";
    for (let i = 0; i < defaultPointValuation.length; i++) {
        customizedPointValuation[i] = defaultPointValuation[i];
    }
}

function updatePointValuationData() {
    customizedPointValuation[0] = document.getElementById("point-aeroplan").value;
    customizedPointValuation[1] = document.getElementById("point-aventura").value;
    customizedPointValuation[2] = document.getElementById("point-amex").value;
    customizedPointValuation[3] = document.getElementById("point-cashback").value;
    customizedPointValuation[4] = document.getElementById("point-scene").value;
    customizedPointValuation[5] = document.getElementById("point-bmo").value;
}

function optimize() {

    let imageLinks = [];
    let cardNames = [];
    let pointTypes = [];
    let annualPointsEarned = [];
    let annualRewardValue = [];
    let annualFee = [];
    let annualNetValue = [];

    // for each credit card, find it's points/value earned
    for (let i = 0; i < numCards; i++) {
        // get the card name and image link
        imageLinks[i] = creditCards[i][0];
        cardNames[i] = creditCards[i][1];
        // get the annual points earned
        annualPointsEarned[i] = 12 * (
            creditCards[i][4]*customizedSpending[0] +
            creditCards[i][5]*customizedSpending[1] +
            creditCards[i][6]*customizedSpending[2] +
            creditCards[i][7]*customizedSpending[3] +
            creditCards[i][8]*customizedSpending[4] +
            creditCards[i][9]*customizedSpending[5] +
            creditCards[i][10]*customizedSpending[6] +
            creditCards[i][11]*customizedSpending[7] +
            creditCards[i][12]*customizedSpending[8]);
        // get the reward value
        pointTypes[i] = creditCards[i][2];
        let rewardIndex = 0;
        for (let j = 0; j < rewards.length; j++) {
            rewardIndex = j;
            if (rewards[j] == pointTypes[i]) {
                break
            }
        }
        let pointValue = customizedPointValuation[rewardIndex];
        annualRewardValue[i] = annualPointsEarned[i] * pointValue / 100;
        // get the annual fee for the card
        annualFee[i] = creditCards[i][3];
        // get the reward value accounting for the annual fee
        annualNetValue[i] = annualRewardValue[i] - annualFee[i];
    }
    // Create an array of indices and sort it based on annualNetValue
    const sortedIndices = Array.from({ length: numCards }, (_, i) => i)
    .sort((a, b) => annualNetValue[b] - annualNetValue[a]);

    // Extract the indices of the three largest values
    const indicesOfTopThree = sortedIndices.slice(0, 3);

    // update recommended card
    document.getElementById("recommended-card-img").src = imageLinks[indicesOfTopThree[0]];

    // update table of recommended cards
    // #1 card
    document.getElementById("card-name-first").innerHTML = cardNames[indicesOfTopThree[0]];
    document.getElementById("point-type-first").innerHTML = pointTypes[indicesOfTopThree[0]];
    document.getElementById("points-earned-first").innerHTML = annualPointsEarned[indicesOfTopThree[0]];
    document.getElementById("reward-value-first").innerHTML = "$ " + annualRewardValue[indicesOfTopThree[0]].toFixed(0);
    document.getElementById("fee-first").innerHTML = "$ " + annualFee[indicesOfTopThree[0]].toFixed(0);
    document.getElementById("net-value-first").innerHTML = "$ " + annualNetValue[indicesOfTopThree[0]].toFixed(0);

    // #2 card
    document.getElementById("card-name-second").innerHTML = cardNames[indicesOfTopThree[1]];
    document.getElementById("point-type-second").innerHTML = pointTypes[indicesOfTopThree[1]];
    document.getElementById("points-earned-second").innerHTML = annualPointsEarned[indicesOfTopThree[1]];
    document.getElementById("reward-value-second").innerHTML = "$ " + annualRewardValue[indicesOfTopThree[1]].toFixed(0);
    document.getElementById("fee-second").innerHTML = "$ " + annualFee[indicesOfTopThree[1]].toFixed(0);
    document.getElementById("net-value-second").innerHTML = "$ " + annualNetValue[indicesOfTopThree[1]].toFixed(0);

    // #3 card
    document.getElementById("card-name-third").innerHTML = cardNames[indicesOfTopThree[2]];
    document.getElementById("point-type-third").innerHTML = pointTypes[indicesOfTopThree[2]];
    document.getElementById("points-earned-third").innerHTML = annualPointsEarned[indicesOfTopThree[2]];
    document.getElementById("reward-value-third").innerHTML = "$ " + annualRewardValue[indicesOfTopThree[2]].toFixed(0);
    document.getElementById("fee-third").innerHTML = "$ " + annualFee[indicesOfTopThree[2]].toFixed(0);
    document.getElementById("net-value-third").innerHTML = "$ " + annualNetValue[indicesOfTopThree[2]].toFixed(0);
    
    // Add the "transition-in" class to the recommended card
    document.getElementById("recommended").classList.add("transition-in");
    
    // Add the "transition-in" class to the table of recommended cards
    document.getElementById("top-three-recommended").classList.add("transition-in");
    
    // Ensure that the browser has time to apply the "transition-in" class before changing the display property
    setTimeout(() => {
        // Update the recommended card opacity
        document.getElementById("recommended").style.opacity = 1;
    }, 50); 
    setTimeout(() => {
        // Update the table opacity
        document.getElementById("top-three-recommended").style.opacity = 1;
    }, 1050);
}