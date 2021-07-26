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
        
  return max;
}
    maxNum(1,2,3);
