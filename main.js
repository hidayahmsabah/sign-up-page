let button = document.querySelector("form button");
let inputs = document.querySelectorAll("form input");
let labels = document.querySelectorAll("form label");

// input.name === "email"

// button.addEventListener("click", (e) => {
//     for (let input of inputs) {
//         if (!input.value) {
//             if (input.name === "email") {
//                 input.style.setProperty("--placeholder-color", "rgba(255, 122, 122, 0.7")
//                 input.placeholder = "email@example.com";
//             }
//             else {
//                 input.placeholder = "";
//             }
//             input.classList.add("border-color", "background")
//             input.nextElementSibling.classList.add("display-on");
//         }
//         else {
//             input.classList.remove("border-color", "background")
//             input.nextElementSibling.classList.remove("display-on");
//         }
//     }
//     let i = 0;
//     for (let label of labels) {
//         if (label.classList.contains("display-on")) {
//             i++;
//         }
//     }
//     if (i === 0) {
//         let newDiv = document.createElement("div");
//         newDiv.classList.add("new-div");
//         newDiv.innerText = "An email has been sent to your email address for confirmation. Thank you for testing this sign up page."
//         document.querySelector("form").appendChild(newDiv);
//         document.body.classList.add("new-body");
//         for (allElements of [button, ...inputs,
//             document.querySelector("h1"),
//             document.querySelector("p"),
//             document.querySelector("#free"),
//             document.querySelector("form div")]) {
//             allElements.remove()
//         }
//         document.querySelector("form").classList.add("margin-auto");
//     }
// })

button.addEventListener("click", (e) => {
    for (let input of inputs) {
        if ((input.name === "email" && !validateEmail(input.value)) || !input.value) {
            if (input.name === "email") {
                input.style.setProperty("--placeholder-color", "rgba(255, 122, 122, 0.7")
                input.placeholder = "email@example.com";
            }
            else if (!input.value) {
                input.placeholder = "";
            }
            input.classList.add("border-color", "background")
            input.nextElementSibling.classList.add("display-on");
        }
        else {
            input.classList.remove("border-color", "background")
            input.nextElementSibling.classList.remove("display-on");
        }

    }
    let i = 0;
    for (let label of labels) {
        if (label.classList.contains("display-on")) {
            i++;
        }
    }
    if (i === 0) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("new-div");
        newDiv.innerText = "An email has been sent to your email address for confirmation. Thank you for testing this sign up page."
        document.querySelector("form").appendChild(newDiv);
        document.body.classList.add("new-body");
        for (allElements of [button, ...inputs,
            document.querySelector("h1"),
            document.querySelector("p"),
            document.querySelector("#free"),
            document.querySelector("form div")]) {
            allElements.remove()
        }
        document.querySelector("form").classList.add("margin-auto");
    }
})

function validateEmail(inputText) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}

