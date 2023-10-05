var firebaseConfig = {
    apiKey: "AIzaSyAfmLAhpBtSmcCiLDlLwE1vBpxu-WqL5Bo",
    authDomain: "do-an-2-f5a00.firebaseapp.com",
    databaseURL: "https://do-an-2-f5a00-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "do-an-2-f5a00",
    storageBucket: "do-an-2-f5a00.appspot.com",
    messagingSenderId: "145614249155",
    appId: "1:145614249155:web:9034cd8da17c50b5309676",
    measurementId: "G-QSSR5CND2X"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.database();

// Motor
const btnTop = document.getElementById("controlTop");
const btnLeft = document.getElementById("controlLeft");
const btnStop = document.getElementById("controlStop");
const btnRight = document.getElementById("controlRight");
const btnBottom = document.getElementById("controlBottom");

let isPressed = false;

btnTop.addEventListener("mousedown", () => {
    isPressed = true;
    database.ref("/Dong Co").update({
        Motor: 1,
    });
});

btnTop.addEventListener("mouseup", () => {
    isPressed = false;
    database.ref("/Dong Co").update({
        Motor: 0,
    });
});

btnLeft.addEventListener("mousedown", () => {
    isPressed = true;
    database.ref("/Dong Co").update({
        Motor: 3,
    });
});

btnLeft.addEventListener("mouseup", () => {
    isPressed = false;
    database.ref("/Dong Co").update({
        Motor: 0,
    });
});

btnStop.addEventListener("mousedown", () => {
    isPressed = true;
    database.ref("/Dong Co").update({
        Motor: 0,
    });
});

btnStop.addEventListener("mouseup", () => {
    isPressed = false;
    database.ref("/Dong Co").update({
        Motor: 0,
    });
});

btnRight.addEventListener("mousedown", () => {
    isPressed = true;
    database.ref("/Dong Co").update({
        Motor: 4,
    });
});

btnRight.addEventListener("mouseup", () => {
    isPressed = false;
    database.ref("/Dong Co").update({
        Motor: 0,
    });
});

btnBottom.addEventListener("mousedown", () => {
    isPressed = true;
    database.ref("/Dong Co").update({
        Motor: 2,
    });
});

btnBottom.addEventListener("mouseup", () => {
    isPressed = false;
    database.ref("/Dong Co").update({
        Motor: 0,
    });
});


// var nhietDo = document.getElementById("temp");
// var doAm = document.getElementById("humid");
// var khiGa = document.getElementById("gas");
// var luongMua = document.getElementById("rain");
// var dbRef = firebase.database().ref().child("Temp");
// var dbRef2 = firebase.database().ref().child("Humid");
// var dbRef3 = firebase.database().ref().child("Gas");
// var dbRef4 = firebase.database().ref().child("Rain");
// dbRef.on("value", (snap) => (nhietDo.innerText = snap.val()));
// dbRef2.on("value", (snap) => (doAm.innerText = snap.val()));
// dbRef3.on("value", (snap) => (khiGa.innerText = snap.val()));
// dbRef4.on("value", (snap) => (luongMua.innerText = snap.val()));

// // Thay đổi sự kiện nút button
// btnOffOne.onclick = function () {
//     document.getElementById('btnOne').style.left = '0'
//     document.getElementById('imgOne').src = "./assets/img/lightbulb-regular.svg"
// }

// btnOnOne.onclick = function () {
//     document.getElementById('btnOne').style.left = '43px'
//     document.getElementById('imgOne').src = "./assets/img/lightbulb-solid.svg"
// }

// btnOffTwo.onclick = function () {
//     document.getElementById('btnTwo').style.left = '0'
//     document.getElementById('imgTwo').src = "./assets/img/door-closed-solid.svg"
// }

// btnOnTwo.onclick = function () {
//     document.getElementById('btnTwo').style.left = '43px'
//     document.getElementById('imgTwo').src = "./assets/img/door-open-solid.svg"
// }

// btnOffThree.onclick = function () {
//     document.getElementById('btnThree').style.left = '0'
//     document.getElementById('imgThree').src = "./assets/img/fan-off.png"
// }

// btnOnThree.onclick = function () {
//     document.getElementById('btnThree').style.left = '43px'
//     document.getElementById('imgThree').src = "./assets/img/fan-on.png"
// }

// btnOffFour.onclick = function () {
//     document.getElementById('btnFour').style.left = '0'
//     document.getElementById('imgFour').src = "./assets/img/bell-off.png"
// }

// btnOnFour.onclick = function () {
//     document.getElementById('btnFour').style.left = '43px'
//     document.getElementById('imgFour').src = "./assets/img/bell-on.png"
// }

// Hiển thị thời gian
function sokhongconghia(value) {
    if (value < 10) {
        value = '0' + value
    }
    return value
}

function hienthithoigian() {
    const time = new Date()
    let date = sokhongconghia(time.getDate())
    let month = sokhongconghia(time.getMonth())
    let year = time.getFullYear()

    let hour = sokhongconghia(time.getHours())
    let minute = sokhongconghia(time.getMinutes())
    let second = sokhongconghia(time.getSeconds())

    document.getElementById('timeDate').innerHTML = `${date}/${month}/${year}`
    document.getElementById('timeCurrent').innerHTML = `${hour}:${minute}:${second}`

    setTimeout(hienthithoigian, 1000)
}

hienthithoigian()



// <!-- <h2>Điều chỉnh giá trị:</h2>
//         <input
//             type="range"
//             id="giatri"
//             name="giatri"
//             min="0"
//             max="100"
//             value="50"
//         />
//         <p>Giá trị hiện tại: <span id="giatri-hientai">50</span></p>

//         <script>
//             // JavaScript để cập nhật giá trị hiện tại khi thanh điều chỉnh được di chuyển
//             var slider = document.getElementById("giatri");
//             var giatriHientai = document.getElementById("giatri-hientai");

//             slider.oninput = function () {
//                 giatriHientai.innerHTML = this.value;
//             };
//         </script> -->