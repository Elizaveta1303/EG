function stringConverter(str) {
    var arr = str.split("_");
    for (var i = 1; i < arr.length; i++) {
    arr[i] = ucfirst(arr[i]);
    }
    return arr.join("");
    }
    
    alert(stringConverter("var_text_hello"));