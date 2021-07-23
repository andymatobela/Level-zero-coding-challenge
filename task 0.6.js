function maxNum(a,b,c){
    var max = 0;

        if (a >= b && a>= c){
            max = a;
        }
        else if (b >= a && b >= c){
            max = b;
        }
        else {
        max = c;
        }
        
    console.log(max);
}
    maxNum(1,2,3);