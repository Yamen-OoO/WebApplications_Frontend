let days = document.querySelector(".timer-container .countdonw-container .days [data-set = day]")
let hours = document.querySelector(".timer-container .countdonw-container .hours [data-set = hour]")
let minutes = document.querySelector(".timer-container .countdonw-container .mins [data-set = minute]")
let seconds = document.querySelector(".timer-container .countdonw-container .secs [data-set = second]")
let countDown = new Date("june 5 ,2023 , 00:00:00").getTime()
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

