const fishCollection = [
    {
      
        species: "neon-tetra",
        name:"Sliver",
        length: 3.5,
        location: "South America",
        food: "flakes",
        picture: "./img/neon-tetra-fish4.jpg"
    },
    {
        species: "discus",
        name: "Red",
        length: 15.2,
        location: "Brazil",
        food: "flakes",
        picture: "./img/red-discus-fish5.jpg"
    
    },
    {
        species: "Arowana",
        name: "Spot",
        length: 90,
        location: "southwest Asia",
        food:"meatly food",
        picture: "./img/asian-arowana-red-fish6.jpg"
    
    },
    {
        species: "clownfish",
        name: "Spike",
        length: 10,
        location: ["Australia" , "southeast Asia" , "Japan"],
        food: "flakes",
        picture: "./img/clownfish-fish7.jpg"
    
    },
    {
        species: "common molly",
        name: "molly",
        length: 10,
        location: "Mexcio",
        food: "flakes",
        picture: "./img/molly-fish8.jpg"
    
    },
    {
        species: "betta",
        name: "angel",
        length: 7,
        location: "Thailand",
        food: "pellets",
        picture:"./img/betta-fish1.jpg"
    
    },
    {
        species: "goldfish",
        name: "Gerry",
        length: 10,
        location: "East Asia",
        food: "flakes",
        picture: "./img/goldfish-fish 2.jpg"
    
    },
    {
        species: "guppy",
        name: "Grumpy",
        length: 3.5,
        location: " northeast south America",
        food: " freeze dried food",
        picture: "./img/guppy-fish3.jpg"
    
    }
]


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