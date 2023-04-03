/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const meterFeet = document.getElementById("meter-feet")
const litresGallons = document.getElementById("litres-gallons")
const kilosLbs = document.getElementById("kilos-lbs")

convertBtn.addEventListener("click", function () {
    let inputVal = document.getElementById("input").value
    //Convert Length
    meterFeet.innerHTML = `${inputVal} meters = ${convertFeet(inputVal).toFixed(3)} feet | 
    ${inputVal} feet = ${convertMeters(inputVal).toFixed(3)}  meters`
    //
    //Convert Volume
    litresGallons.innerHTML = `${inputVal} litres = ${convertGallons(inputVal).toFixed(3)} gallons |
    ${inputVal} gallons = ${convertLitres(inputVal).toFixed(3)} litres`
    //
    //Convert Mass
    kilosLbs.innerHTML = `${inputVal} kilos = ${convertLbs(inputVal).toFixed(3)} pounds |
    ${inputVal} pounds = ${convertKilos(inputVal).toFixed(3)} kilos`
    //

    console.log(inputVal)
    console.log(convertFeet(inputVal))
    console.log(convertMeters(inputVal))
})

//Feet-Meters
function convertFeet(feet) {
    return feet * 3.28084
}
function convertMeters(meters) {
    return meters / 3.281
}
//

//Litres-Gallons
function convertLitres(litres) {
    return litres / 0.264172
}
function convertGallons(gallons) {
    return gallons * 0.264172
}
//

//Kilograms-Pounds
function convertKilos(kilos) {
    return kilos / 2.20462
}
function convertLbs(lbs) {
    return lbs * 2.20462
}
//