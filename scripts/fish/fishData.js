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
        length: 20,
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
        length: 4.3,
        location: ["Australia" , "southeast Asia" , "Japan"],
        food: "flakes",
        picture: "./img/clownfish-fish7.jpg"
    
    },
    {
        species: "common molly",
        name: "molly",
        length: 4.3,
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
        length: " 1.5-3.5cm",
        location: " northeast south America",
        food: " freeze dried food",
        picture: "./img/guppy-fish3.jpg"
    
    }
]

// 3, 6, 9, 12, etc... fish
const mostHolyFish = () => {
    const holyFish = [3, 6, 9, 12]

    for (const holyFish of mostHolyFish) {
        if(length % 3 === 0)
        console.log(holsyFish)

    }

    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish
const soldierFish = () => {
    const soldiers = [5, 10, 15, 20, 25]

    
    for (const soldiers of soldierFish) {
        if(length % 5 === 0)
        console.log(soldiers)
    }
    return soldiers
}

// Any fish not a multiple of 3 or 5
const nonHolyFish = () => {
    const regularFish = []
     
     for (const regularFish of nonHolyFish){
        if(length % 3 !== 0 &&  % 5 !== 0 )
        console.log(regularFish)
     }
   
     return regularFish
}