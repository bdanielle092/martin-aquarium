let fishCollection = []

const getFishData = () => {

    return fetch( "http://localhost:8080/fish").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
    .then (
        (arrayOfFish) => {
            fishCollection = arrayOfFish
            console.log(fishCollection)
        }
    )
}


const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection) {
        if(fish.length % 3 === 0) {
            holyFish.push(fish)
        }

    }

    return holyFish
}


const soldierFish = () => {
    const soldiers = []

    
    for (const fish of fishCollection) {
        if(fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldiers.push(fish)
        }
        
    }
    return soldiers
}

const nonHolyFish = () => {
    const regularFish = []
     
     for (const fish of fishCollection){
        if(fish.length % 3 !== 0 && fish.length % 5 !== 0 ) {
            regularFish.push(fish)
        }
        
     }

     return regularFish
}