function arraySum (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) {
    return i + 1;
    }
    }
    }
    
    console.log(arraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));