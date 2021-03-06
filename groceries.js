//global vars
var myList = [];

window.onload = loadCookieList;

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function addItem(){
    var input = document.getElementById("newItem");
    console.log(myList);
    var item = document.createElement("li");
    var itemName = document.createTextNode(input);
    var btnClose = document.createElement("button");
    btnClose.classList.add("btn");
    btnClose.classList.add("btn-danger");
    btnClose.classList.add("btn-xs");

    if(btnClose){
        btnClose.addEventListener("click", removeParentListItem);
    }
        var iconClose = document.createElement("span");
        iconClose.classList.add("glyphicon");
        iconClose.classList.add("glyphicon-remove");
        btnClose.appendChild(iconClose);
        item.appendChild(btnClose);
        item.appendChild(itemName);
        list.appendChild(item);
    } else{
        return "";
    }

    displayItem(input);
}

function removeParentListItem(){
    var mom = this.parentNode;
    var grandma = mom.parentNode;
    //var li = document.getElementById("li");
    var itemRemove = mom.firstChild.textContent;
    var itemIndex = myList.find(itemRemove);
    myList.splice(itemIndex, 1);
    console.log(myList);
    grandma.removeChild(mom);
}

function saveList(){
    var myListString = [myList.toString()];

    setCookie("myCookie", myList, myListString, 2);
}

function clearList(){
    document.getElementById("listDisplay").replaceChild("");
    myList = [];
}

function displayItem(parameter){
    if(myList.find(parameter) === -1){
        myList = [parameter];
        var list = document.getElementById("listDisplay");
    }
}

function loadCookieList(){
    var cookie = document.getCookie("myCookie");
    var arrayCookie = [cookie.split(",")];
    for(int i = 0; i < arrayCookie.length; i++){
        displayItem(arrayCookie[i]);
    }
}