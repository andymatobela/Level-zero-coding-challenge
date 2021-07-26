function timeConversion(time){
    var hours = Math.floor(time / 60);
    var minutes = time % 60;
    if (hours > 1 && minutes > 1){
    console.log(hours + " hours, " + minutes + " minutes"); 
    }

    else if (hours > 1 && minutes < 0){

        console.log(hours + " hours, " + minutes + " minute"); 
    }

    else if (hours <= 1 && minutes > 1){

            console.log(hours + " hour, " + minutes + " minutes"); 
        }

    else {
        console.log(hours + " hour, " + minutes + " minute"); 

    }
}
timeConversion(183);
