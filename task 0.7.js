function celsiusToFahrenheit(temp){
    var ans = (temp * (9/5) ) + 32;
    console.log(ans);
}

function fahrenheitToCelsius(temp){
    var ans = (temp - 32) * (5/9);
   return ans;
}
celsiusToFahrenheit(20);
fahrenheitToCelsius(20);
