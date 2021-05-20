// program to print only the even numbers of the array.

var Noofones = function (array) {
    var mostcount = 0;
    var currentcount = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            currentcount = 0;
        }
        else {
            currentcount++;
        }
        if (currentcount > mostcount) {
            mostcount = currentcount;
        }
    }
    return mostcount;
}
console.log(Noofones([1,0,0,0,0,1,0,0,0,1]));