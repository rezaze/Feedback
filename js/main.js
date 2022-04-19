const btn = document.querySelectorAll(".rate");
const submit = document.querySelector(".button");
const showResult = document.getElementById("result");

submit.disabled = true;
submit.style.opacity = "0.5";

async function showNum() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", () => {
            let currect = document.querySelector(".active");
            submit.classList.add("hov");
            submit.disabled = false;
            submit.style.opacity = "1";
            btn[i].classList.toggle("active");
            currect.className = btn[i].className.replace("active", "");
            btn[i].classList.add(".active");
        });
    }
}



// const setCookie = (name, value, exday) => {
//     let d = new Date();
//     d.setTime(d.getTime() + (exday * 24 * 60 * 60 * 1000));
//     let expires = "expires=" + d.toGMTString();
//     document.cookie = name + " = " + value + ";" + expires + ";path=/";

// }
// const getCookie = (name) => {
//     var name = name + "=";
//     let decodeCookie = decodeURIComponent(document.cookie);
//     let cook = decodeCookie.split(';');
//     for (let i = 0; i < cook.length; i++) {

//         var c = cook[i];

//         while (c.charAt(0) == ' ') {

//             c = c.substring(1);
//         }

//         if (c.indexOf(name == 0)) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";

// }
// const checkedcookie = () => {
//     const currect = document.querySelector(".active");
//     var user = getCookie("username");
//     user = currect.innerHTML;
//     if (user != "") {
//         setCookie('username', user, 3);
//         window.open("result.html");
//     }
// }

// function checkCookie() {
//     let user = getCookie('username');
//     showResult.innerHTML = `You selected ${user} out of 5`;
//     setCookie("username", user, 3);
// }




////////////////// cookie


function createItem() {
    let currect = document.querySelector(".active");
    sessionStorage.setItem("show", `You selected ${currect.innerHTML} out of 5`);
    if (currect.innerHTML != "") {
        window.open("result.html", "_self");
    } else if (currect.innerHTML == "") {
        submit.disabled = true;
        submit.style.opacity = "0.5";
    }
}

function showItem() {
    var result = sessionStorage["show"];
    showResult.innerHTML = result;
}

showNum();


////////////////storage(setItam);