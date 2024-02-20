// Get the sum of all trail miles
const totalTrailMiles = (trails) => {
    let total = 0
    for (const trail of trails) {
        total += trail.length
    }

    return Math.round(total)
}

// Get the shortest of all trails
const shortyTrail = (trailArray) => {
    if (trailArray.length === 0) return 0
    let shortest = trailArray[0].length
    for (const trail of trailArray) {
        if(trail.length <= shortest) {
            shortest = trail.length
        }
    }

    return shortest
}

// Get the longest of all trails
const longTrail = (allTrails) => {
    if (allTrails.length === 0) return 0
    let longest = allTrails[0].length
    for (const trail of allTrails) {
        if(trail.length >= longest) {
            longest = trail.length
        }
    }

    return longest
}

// Get the sum of all river miles
const totalRiverMiles = (rivers) => {
    let totalRiver = 0
    for (const river of rivers) {
        totalRiver += river.length
    }

    return Math.round(totalRiver)
}

// Get the shortest of all rivers
const shortyRiver = (riverArray) => {
    if (riverArray.length === 0) return 0
    let shortestRiver = riverArray[0].length
    for (const river of riverArray) {
        if(river.length <= shortestRiver) {
            shortestRiver = river.length
        }
    }

    return shortestRiver
}

// Get the longest of all rivers
const longRiver = (allRivers) => {
    if(allRivers.length === 0) return 0
    let longestRiver = allRivers[0].length
    for (const river of allRivers) {
        if(river.length >= longestRiver) {
            longestRiver = river.length
        }
    }

    return longestRiver
}

const cheapTrail = (allTrailPrices) => {
    const cheapTrailNames = [] 
    for (const trail of allTrailPrices) {
        if(trail.price === "$") {
        cheapTrailNames.push(trail.trailName)
    }
    }
    return cheapTrailNames
}

const pricyTrail = (allTrailPrices) => {
    const pricyTrailNames = [] 
    for (const trail of allTrailPrices) {
        if(trail.price === "$$$$" || trail.price=== "$$$$$") {
        pricyTrailNames.push(trail.trailName)
    }
    }
    return pricyTrailNames
}
const cheapRiver = (allRiverPrices) => {
    const cheapRiverNames = [] 
    for (const riverRiver of allRiverPrices) {
        if(riverRiver.price === "$") {
        cheapRiverNames.push(riverRiver.river)
    }
    }
    return cheapRiverNames
}

const pricyRiver = (allRiverPrices) => {
    const pricyRiverNames = [] 
    for (const riverRiver of allRiverPrices) {
        if(riverRiver.price === "$$$$" || riverRiver.price === "$$$$$") {
        pricyRiverNames.push(riverRiver.river)
    }
    }
    return pricyRiverNames
}
module.exports ={
    totalTrailMiles, shortyTrail, longTrail,
    totalRiverMiles, shortyRiver, longRiver,
    cheapTrail, pricyTrail,
    cheapRiver, pricyRiver
}