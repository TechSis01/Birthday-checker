let year = document.querySelector('#year')
let date = document.querySelector('#Dob')
let month = document.querySelector('#month')
let btn = document.querySelector('button')
let user = document.querySelector('#user')
function birthday(){
    let userName = user.value
    let myYear = year.value 
    let myDate = date.value 
    let myMonth = month.value
    let birthdate = new Date(myYear,myMonth - 1,myDate)
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    let textMonth= birthdate.toLocaleString('default',{month:'long'})
    let textDate = birthdate.toLocaleString('default',{weekday:'long'})
    alert(` ${userName} you were born on ${textDate}  ${myDate} ${textMonth} ${myYear}`)
    let myAge = currentYear - myYear
    alert(`So ${userName} your current age in the year ${currentYear} is ${myAge}`)
    year.value = ''
    date.value = ''
    month.value = ''
    user.value = ''
}

btn.addEventListener('click',birthday)