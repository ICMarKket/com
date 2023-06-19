
function showHideDiv(ele) {
    var srcElement = document.getElementById(ele);
    if (srcElement != null) {
        if (srcElement.style.display == "block") {
            srcElement.style.display = 'none';
        }
        else {
            srcElement.style.display = 'block';
        }
        return false;
    }
}



function showOrHideDiv() {
var srcElement = document.getElementById("showOrHide");
if (srcElement != null) {
        if (srcElement.style.display == "block") {
            srcElement.style.display = 'none';
        }
        else {
            srcElement.style.display = 'block';
        }
        return false;
    }
}



function myFunction() {
var x = document.getElementById("myDIV");
if (window.getComputedStyle(x).display === "none") {
x.style.display = "block";
}
}





function openTab(tabName) {
var i, x;
x = document.getElementsByClassName("containerTab");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
document.getElementById(tabName).style.display = "block";
}








