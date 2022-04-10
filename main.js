const btn = document.querySelectorAll(".rate");
const submit = document.getElementById("submit")
const href = document.querySelector("a");
const border = document.querySelector(".rates");

function showNum(e) {
    for (let i = 0; i <= btn.length; i++) {
        btn[i].addEventListener("click", () => {
            let currect = document.querySelector(".active");
            btn[i].classList.add("active");
            currect.className = currect.className.replace("active", "");
            btn[i].className += "active";
            href.setAttribute("href", "result.html");
            href.setAttribute("target", "__blonk");
        })

    }

}

showNum();