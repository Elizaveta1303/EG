function arrayFill(elem, numElem) {
    var arr = [];
    for (var i = 0; i < numElem; i++) {
    arr.push(elem);
    }
    return arr;
    }
    
    console.log(arrayFill('x', 5)); //["x", "x", "x", "x", "x"]