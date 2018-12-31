function changeInfoPicMOver() {
    const infopic = document.querySelector("#infopic");
    infopic.setAttribute("src", "ASSETS/annaHope.png");
}
function changeInfoPicMOut() {
    infopic.setAttribute("src", "ASSETS/annaHope_sepia.png");
}

function changeTeachPicMOver() {
    const teach = document.querySelector("#teach");
    teach.setAttribute("src", "ASSETS/teaching.jpeg");
}
function changeTeachPicMOut() {
    teach.setAttribute("src", "ASSETS/teaching_sepia.jpg");
}


function answerText1() {
    let answer = document.getElementById('ans1');
    let button = document.getElementById('button1');
        if (answer.style.display === "none") {
            answer.style.display = "block";
            button.innerHTML = "Hide!";
        } else {
            answer.style.display = "none";
            button.innerHTML = "Check!";
        }
}
function answerText2() {
    let answer = document.getElementById('ans2');
    let button = document.getElementById('button2');
        if (answer.style.display === "none") {
            answer.style.display = "block";
            button.innerHTML = "Hide!";
        } else {
            answer.style.display = "none";
            button.innerHTML = "Check!";
        }
}
function answerText3() {
    let answer = document.getElementById('ans3');
    let button = document.getElementById('button3');
        if (answer.style.display === "none") {
            answer.style.display = "block";
            button.innerHTML = "Hide!";
        } else {
            answer.style.display = "none";
            button.innerHTML = "Check!";
        }
}
function answerText4() {
    let answer = document.getElementById('ans4');
    let button = document.getElementById('button4');
        if (answer.style.display === "none") {
            answer.style.display = "block";
            button.innerHTML = "Hide!";
        } else {
            answer.style.display = "none";
            button.innerHTML = "Check!";
        }
}

function alertTobey() {
    alert("NICE");
}