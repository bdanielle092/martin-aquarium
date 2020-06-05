const quotesVisibilityButton = document.querySelector(".toggleQuotes")

quotesVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".quotesList").classList.toggle("hidden")
})

/*
Responsible for generating a list of quotes HTML
representations, and putting in the browser
*/

const quotesList = () => {
    // Iterate the collection of quotes objects
    for (const currentQuotesObject of quotesCollection) {

        // Convert the current quotes to its HTML representation
        const quotesHTML = quotesConverter(currentQuotesObject)

        // Find the <article> element in index.html
        const quotesArticleElement = document.querySelector(".quotesList")

        // Put the quotes HTML representation inside the <article> element
        quotesArticleElement.innerHTML += quotesHTML
    }
}