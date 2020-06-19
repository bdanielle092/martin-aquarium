
getFishData().then (
() => {
    
    fishList()
}
)


getLocationsData().then(
    () => {
        
        locationsList()
    }
)

getTipsData().then(
    () => {
        tipsList()
    }
)
// this is calling the functions and displaying it
getQuotesData().then(
    () => {
        quotesList()
    }
)


