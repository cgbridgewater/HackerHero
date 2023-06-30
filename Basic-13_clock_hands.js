// Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, returns angles (in degrees) of the hour, minute and second hands. As review, 360 degrees form a full rotation. Have the degree round up as a whole number (e.g. 38 instead of 37.632...)

// For input of 3600 secs (equivalent to 1:00:00), have it return "[30, 0, 0]" meaning the hour is 30 degrees, the minute and the second is 0 degree from noon.

// Similarly, clockHandAngles(10800) should return [90, 0, 0] as 10,800 seconds is equivalent to 3:00:00.

// function clockHandAngles(seconds) {
//     hours = Math.round((seconds/3600)*30)
//     minutes = Math.round((seconds/60)*6)
//     while(hours >=360){
//         hours-=360
//     }
//     while(minutes >=360){
//         minutes-=360
//     }60   
//     while(seconds >=360){
//         seconds-=360
//     }
//     return hours
// }

// function clockHandAngles(seconds){
//     var hour = seconds/3600 % 12;
//     var minute = seconds/60 % 60;
//     var seconds =seconds % 60;
//     return [Math.round(hour*30), Math.round(minute*6), Math.round(seconds*6)]
// }
function clockHandAngles(seconds){
    var hour = Math.round((seconds/3600 % 12)*30);
    var minute = Math.round((seconds/60 % 60)*6);
    var seconds = Math.round((seconds % 60)*6);
    return [hour, minute, seconds]
}
console.log(clockHandAngles(3600));
console.log(clockHandAngles(10800));
console.log(clockHandAngles(5000));
console.log(clockHandAngles(8000));
console.log(clockHandAngles(50000));
clockHandAngles(3600) //to return [30,0,0]
clockHandAngles(10800) //to return [90,0,0]
clockHandAngles(5000) //to return [42,140,120]
clockHandAngles(8000) //to return [67,80,120]
clockHandAngles(50000) //to return [57,320,120]