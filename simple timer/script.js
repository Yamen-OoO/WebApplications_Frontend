// let datenow = new Date()
// console.log(datenow)
// console.log((datenow/1000).toFixed()) // sec 
// console.log((datenow/1000 / 60).toFixed()) // min
// console.log((datenow / 1000 / 60 /60)) // hours
// console.log((datenow/ 1000 / 60 / 60 / 24)) // 
// console.log((datenow/ 1000 / 60 / 60 / 24 / 365))

// console.log("#".repeat(200))

// let birthday = new Date("dec , 13, 2001")
// console.log(birthday)
// console.log(((datenow - birthday )/ 1000 / 60 / 60 /24 /365).toFixed())


// console.log("#".repeat(200))


// console.log(datenow.getDate()) // return number of the day in month
// console.log(datenow.getDay()) // return number of the day in week
// console.log(datenow.getMonth()) 
// console.log(datenow.getHours())
// console.log(datenow.getMinutes())
// console.log(datenow.getSeconds())


// console.log("#".repeat(200))

// datenow.setTime(0)
// console.log(datenow)
// datenow.setDate(22)
// console.log(datenow)
// datenow.setDate(-2)
// console.log(datenow)
// datenow.setFullYear(2011 , 2 , 2)
// console.log(datenow)



let days = document.querySelector(".container .countdonw-container .days [data-set = day]")
let hours = document.querySelector(".container .countdonw-container .hours [data-set = hour]")
let minutes = document.querySelector(".container .countdonw-container .mins [data-set = minute]")
let seconds = document.querySelector(".container .countdonw-container .secs [data-set = second]")
let countDown = new Date("feb 1 ,2023 , 00:00:00").getTime()
// it is static number ... returns the millseconds until this date from year 1970
// console.log(countDown / 1000 / 60 /60 /24 / 365) // 53 years


let counter = setInterval(()=>{
    // get date of now .. in milliseconds
    let datenow = new Date().getTime()

    // find the date Differnce Between now and coundtDown date in millisconds
    let timeLeft = countDown - datenow

    // get date unites
    let daysTime = Math.floor(timeLeft / 1000 / 60 / 60 / 24)
    days.textContent = daysTime
    // console.log(days)


    // take the fraction of timeleft (timeLeft % (1000 * 60 * 60 * 24 )) then convert it to hours
    let hoursTime = Math.floor((timeLeft % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60))
    hours.textContent = hoursTime
    // console.log(hours)

    let minutesTime = Math.floor((timeLeft % (1000 * 60 * 60 )) / (1000 * 60 ))
    minutes.textContent = minutesTime
    // console.log(minutes)

    let secondsTime = Math.floor((timeLeft % (1000* 60)) / (1000))
    seconds.textContent = secondsTime
    // console.log(seconds)

},1000)

