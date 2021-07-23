function timeConversion(time){
    var hours = Math.floor(time / 60);
    var minutes = time % 60;

    console.log(hours + " hours, " + minutes + " minutes"); 
}
timeConversion(133);