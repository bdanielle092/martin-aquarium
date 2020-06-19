const locationsVisibilityButton = document.querySelector(".toggleLocations")

locationsVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".locationsList").classList.toggle("hidden")
})
/*
Responsible for generating a list of locations HTML
representations, and putting in the browser
*/

const locationsList = () => {
    // Iterate the collection of locations objects
    for (const currentlocationsObject of locationsCollection) {

        // Convert the current locations to its HTML representation
        const locationsHTML = locationsConverter(currentlocationsObject)

        // Find the <article> element in index.html
        const locationsArticleElement = document.querySelector(".locationsList")

        // Put the locations HTML representation inside the <article> element
        locationsArticleElement.innerHTML += locationsHTML
    }
}