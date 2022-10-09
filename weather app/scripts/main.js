import orderArr from "./timeManagement.js"
// import currentDay from "./timeManagement.js"

// console.log(orderArr);
const keyAPI = "5e3422c426f7ff181977dac39e43a082"
let resultAPI

let now    = new Date()
let year   = now.getFullYear()
let month  = now.getMonth() + 1
let date   = now.getDate()
let hour      = now.getHours()

const tod = document.querySelector('.title h1')

const description = document.querySelector(".description")
const temperature = document.querySelector(".temperature")
const loc = document.querySelector(".location")

const time  = document.querySelectorAll('.time')
const value = document.querySelectorAll('.value')

const dayBlockItem = document.querySelectorAll(".dayBlockItem")
const dayBlockTemp = document.querySelectorAll(".dayBlockTemp")



if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{

        // console.log(position)
        let long = position.coords.longitude
        let lat = position.coords.latitude
        Call (long,lat)

    }, ()=>{
        alert("woops")
    })
}

function Call(long,lat){

    // console.log(long,lat)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&appid=${keyAPI}`)
    .then(re => {
        return re.json()
    })
    .then(data => {
        // console.log(data)
        resultAPI = data
        description.innerText = resultAPI.current.weather[0].description
        temperature.innerText = `${Math.trunc(resultAPI.current.temp)} °C`
        loc.innerText         = resultAPI.timezone

    
        let currentDay = new Date().toLocaleDateString('en-EN',{weekday:"long"})
        tod.innerText =currentDay + " " + date +"/"+ month +"/"+ year

        for (let i=0;i<time.length;i++){
            
            let varHour = hour + i*3

            if (varHour >= 24){
                time[i].innerText = `${varHour - 24} h`
            } else{
                time[i].innerText = varHour + " h"
            }
        }

        for(let j = 0; j < value.length; j++) {
            value[j].innerText = `${Math.trunc(resultAPI.hourly[j*3].temp)} °C`
        }

        for(let i=0; i<orderArr.length; i++) {

            dayBlockItem[i].innerText = orderArr[i]

        }

        for(let i=0; i<dayBlockTemp.length; i++){
            
            // console.log(dayBlockTemp[i]);
            dayBlockTemp[i].innerText = `${Math.trunc(resultAPI.daily[i+1].temp.day)} °`
        }
        
        if (hour>6 && hour<18){
            document.querySelector('.logoBlock img').src = `./resources/day/${resultAPI.current.weather[0].icon}.svg`
        } else{
            document.querySelector('.logoBlock img').src = `./resources/night/${resultAPI.current.weather[0].icon}.svg`
        }
        // console.log(resultAPI);
    })
}
