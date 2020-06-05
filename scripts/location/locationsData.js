let locationsCollection = []

const getLocationsData = () => {
    return fetch("http://localhost:8080/locations").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then (
        (arrayOfLocations) => {
            locationsCollection = arrayOfLocations
            console.log(locationsCollection)
        }
    )
}


