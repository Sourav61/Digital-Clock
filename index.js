let currentTime = new Date();

let hour = currentTime.getHours();

// Converting the 24 hour format to 12 hour format.
hour = hour % 12;

let minutes = currentTime.getMinutes();

let seconds = currentTime.getSeconds();

console.log('The time info is: hour = ' + hour + ', minutes = ' + minutes + ', seconds = ' + seconds);

// Total degrees = 360 deg, Total hours = 12 hrs, Rotation per hour = 30 deg;
// To Calculate the amount of rotation needed for the hour hand,
// multiply the current time(hours) by 30 degrees

let hourAngle = hour * 30;

// Total degrees = 360 deg, Total minutes = 60 minutes, Rotation per minute = 6 deg;
// To Calculate the amount of rotation needed for the minute hand,
// multiply the current time(minutes) by 6 degrees

let minutesAngle = minutes * 6;

// Total degrees = 360 deg, Total minutes = 60 minutes, Rotation per minute = 6 deg;
// To Calculate the amount of rotation needed for the minute hand,
// multiply the current time(minutes) by 6 degrees

let secondsAngle = seconds * 6;

let hourHandDiv = document.querySelector('.hour-hand');

hourHandDiv.style.transform = `rotate(${hourAngle}deg)`;

let minutesHandDiv = document.querySelector('.minutes-hand');

minutesHandDiv.style.transform = `rotate(${minutesAngle}deg)`;

let secondsHandDiv = document.querySelector('.seconds-hand');

secondsHandDiv.style.transform = `rotate(${secondsAngle}deg)`;
