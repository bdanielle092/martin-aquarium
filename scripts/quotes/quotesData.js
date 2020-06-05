let quotesCollection = []
// this is fetching the quotes data
const getQuotesData = () => {
    return fetch( "http://localhost:8080/quotes").then(
        // it pulling the array from the json server. the then is order of operations
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then (
        // its turning the array into an object and console logging it back into the object
        (arrayOfQuotes) => {
            quotesCollection = arrayOfQuotes
            console.log(quotesCollection)
        }
    )
}