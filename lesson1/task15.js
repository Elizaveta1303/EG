document.write("<hr><h3>Task 1</h3>");

var arr = [1, 2, 3, 4, 5];
elemArrRecursion(arr);

function elemArrRecursion(arr) {
document.write(arr.shift() + "<br>");
if (arr.length > 0) {
elemArrRecursion(arr);
}
}