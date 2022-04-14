const btn = document.querySelectorAll(".rate");
const submit = document.querySelector(".button");
const showResult = document.getElementById("result");


function showNum() {
    for (let i = 0; i <= btn.length; i++) {
        btn[i].addEventListener("click", () => {
            let currect = document.querySelector(".active");
            btn[i].classList.add("active");
            currect.className = currect.className.replace("active", "");
            btn[i].classList.add("active");
        });
    }
}



const setCookie = (name, value, exday) => {
    let d = new Date();
    d.setTime(d.getTime() + (exday * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = name + " = " + value + ";" + expires + ";path=/";

}
const getCookie = (name) => {
    var name = name + "=";
    let decodeCookie = decodeURIComponent(document.cookie);
    let cook = decodeCookie.split(';');
    for (let i = 0; i < cook.length; i++) {

        var c = cook[i];

        while (c.charAt(0) == ' ') {

            c = c.substring(1);
        }

        if (c.indexOf(name == 0)) {
            return c.substring(name.length, c.length);
        }
    }
    return "";

}
const checkedcookie = () => {
    const currect = document.querySelector(".active");
    var user = getCookie("username");
    user = currect.innerHTML;
    if (user != "") {
        setCookie('username', user, 3);
        window.open("result.html");
    }
}

function checkCookie() {
    let user = getCookie('username');
    showResult.innerHTML = `You selected ${user} out of 5`;
    setCookie("username", user, 3);
}

showNum();