function inArray(elemStr, arr) {
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] == elemStr) {
    return true;
    }
    }
    return false;
    }
    
    alert(inArray("квадрат", ["круг", "ромб", "квадрат", "треугольник"]));