const {
    trails, rivers
} = require("./adventureData.js")

const {
    totalTrailMiles, shortyTrail, longTrail,
    totalRiverMiles, shortyRiver, longRiver,
    cheapTrail, pricyTrail,
    cheapRiver, pricyRiver
} = require("./adventureFunctions.js")

console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')
const trailTotal = totalTrailMiles(trails)
console.log(`We service ${trailTotal} miles of wilderness trails across the US`)

const shortTrail = shortyTrail(trails)
console.log(`The shortest trail is ${shortTrail} kilometers`)

const longest = longTrail(trails)
console.log(`The longest trail is ${longest} kilometers`)

console.log('***************************************************')
console.log('*****              R I V E R S                *****')
console.log('***************************************************')

const riverTotal = totalRiverMiles(rivers)
console.log(`We service ${riverTotal} miles of rivers across the US`)

const shortRiver = shortyRiver(rivers)
console.log(`The shortest river is ${shortRiver} kilometers`)

const longestRiver = longRiver(rivers)
console.log(`The longest river is ${longestRiver} kilometers`)

console.log("")

const cheapTrailNames = cheapTrail(trails)
console.log("The least expensive trails are")
for (const trailName of cheapTrailNames) {
    console.log(`\t${trailName}`);
}
const pricyTrailNames = pricyTrail(trails)
console.log("The most expensive trails are")
for (const trailName of pricyTrailNames) {
    console.log(`\t${trailName}`);
}
console.log("")
const cheapRiverNames = cheapRiver(rivers)
console.log("The least expensive rivers are")
for (const river of cheapRiverNames) {
    console.log(`\t${river}`);
}
const pricyRiverNames = pricyRiver(rivers)
console.log("The most expensive rivers are")
for (const river of pricyRiverNames) {
    console.log(`\t${river}`);
}
console.log("")
console.log ("Trail Details:")
console.log("---------------------")

const printAllTrailInfo = (trails) => {
    trails.forEach((trail) => {
        console.log(`${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} kilometers long.`)
        console.log(`The highlighted plant for the trip is ${trail.plantHighlight}.`)
        console.log("")
    })
}
printAllTrailInfo(trails)
console.log("")
console.log ("River Details:")
console.log("---------------------")
const printAllRiverInfo = (rivers) => {
    rivers.forEach((riverRiver) => {
        console.log(`${riverRiver.river} starts at [${riverRiver.latitude}, ${riverRiver.longitude}] and is ${riverRiver.length} kilometers long.`)
        console.log(`The unique fish for the trip is ${riverRiver.uniqueFish}.`)
        console.log("")
    })
}
printAllRiverInfo(rivers)
