var ans = ' ';
function vowelPrint(vow){
    var spec = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U' ];
    
    for ( char of vow){
        
        if (spec.indexOf(char) >= 0){
            ans += char;
        }
    }
    console.log(ans);
}
vowelPrint('Thanos is the best villain');