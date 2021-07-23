function commonChar(first, second){
    var result = ' ';

    for (x = 0; x < first.length; x++){
        for (y = 0; y < second.lenght; y++){
            if (first[x] === second[y]){
                result += y;
            }
        }
    }
    console.log(result);
}
commonChar("Andy", "Matt");