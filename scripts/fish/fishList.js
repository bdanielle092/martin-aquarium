
const fishTypeDropdown = document.querySelector(".typeChoice")
const contentTarget = document.querySelector(".fishList")

const clearFishList = () => contentTarget.innerHTML = ""

fishTypeDropdown.addEventListener("change", (changeEvent) => {
    // Get the value of the option chosen by the user
    const userChoice = changeEvent.target.value

    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        clearFishList()
        displayHolyFish()
    }
    else if (userChoice === "soldier") {
        clearFishList()
        displaySoldierFish()
    }
    else if (userChoice === "nonHoly") {
        clearFishList()
        displayNonHolyFish()
    }
    else if (userChoice === "all") {
        clearFishList()
        fishList()
    }
})
const fishVisibilityButton = document.querySelector(".toggleFish")

fishVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".fishList").classList.toggle("hidden")
})

// Function to show holy fish in the browser
const displayHolyFish = () => {
    const fishObjectsArray = mostHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

// Function to show soldier fish in the browser
const displaySoldierFish = () => {
    const fishObjectsArray = soldierFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

// Function to show common fish in the browser
const displayNonHolyFish = () => {
    const fishObjectsArray = nonHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}


const fishList = () => {
    // Invoke all three functions here
    displayHolyFish()
    displaySoldierFish()
    displayNonHolyFish()
}
