function areaOfATriangle (x, y, z){
    
    var perimeter = (x + y + z) / 2;

    var area = Math.sqrt(perimeter * (perimeter - x) * (perimeter - y) * (perimeter - z));

   return area;
}
    areaOfATriangle(3, 4, 5);
