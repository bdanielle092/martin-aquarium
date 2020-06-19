let tipsCollection = []

const getTipsData = () => {
    return fetch("http://localhost:8080/tips").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then (
        (arrayOfTips) => {
            tipsCollection = arrayOfTips
            console.log(tipsCollection)
        }
    )
}