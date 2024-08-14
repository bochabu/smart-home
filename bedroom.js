const firebaseConfig = {
    apiKey: "AIzaSyDzzbGlWjWJUk0jJig7Lrg-TJFyTnR6HI4",
    authDomain: "smarthome-e3c6f.firebaseapp.com",
    projectId: "smarthome-e3c6f",
    storageBucket: "smarthome-e3c6f.appspot.com",
    messagingSenderId: "693127280603",
    appId: "1:693127280603:web:0cbf2531ac64a9a1df59fe",
    measurementId: "G-93CWL1T905"
  };

firebase.initializeApp(firebaseConfig); 
firebase.analytics(); 

var BTN_Device_1_ON = document.querySelector(".BTN_Device_1_ON")
var BTN_Device_1_OFF = document.querySelector(".BTN_Device_1_OFF")
var Device_1_ON = document.querySelector(".Device_1_ON")
var Device_1_OFF = document.querySelector(".Device_1_OFF")

var control_device_1 = document.querySelector(".Control_Device_1")
var valueTemp1 = 23
var btnup = document.querySelector(".fa-chevron-up")
var btndown = document.querySelector(".fa-chevron-down")
var text_value_device_1 = document.querySelector(".text_value_device_1")

var BTN_Device_2_ON = document.querySelector(".BTN_Device_2_ON")
var BTN_Device_2_OFF = document.querySelector(".BTN_Device_2_OFF")
var Device_2_ON = document.querySelector(".Device_2_ON")
var Device_2_OFF = document.querySelector(".Device_2_OFF")

var BTN_Device_3_ON = document.querySelector(".BTN_Device_3_ON")
var BTN_Device_3_OFF = document.querySelector(".BTN_Device_3_OFF")
var Device_3_ON = document.querySelector(".Device_3_ON")
var Device_3_OFF = document.querySelector(".Device_3_OFF")

var BTN_Device_4_ON = document.querySelector(".BTN_Device_4_ON")
var BTN_Device_4_OFF = document.querySelector(".BTN_Device_4_OFF")
var Device_4_ON = document.querySelector(".Device_4_ON")
var Device_4_OFF = document.querySelector(".Device_4_OFF")

var Name_Room = document.querySelector(".Name_Room")
window.addEventListener("scroll", function() {
    if (window.scrollY > 75) {
            Name_Room.classList.add("setcontrol")
    }
    else{
        Name_Room.classList.remove("setcontrol")
    }

});

BTN_Device_1_ON.addEventListener("click", function(){
    Device_1_ON.classList.remove("hiden")
    Device_1_OFF.classList.add("hiden")
    BTN_Device_1_OFF.classList.remove("set_btn")
    BTN_Device_1_ON.classList.add("set_btn")
    control_device_1.classList.remove("hiden")
})
BTN_Device_1_OFF.addEventListener("click", function(){
    Device_1_ON.classList.add("hiden")
    Device_1_OFF.classList.remove("hiden")
    BTN_Device_1_ON.classList.remove("set_btn")
    BTN_Device_1_OFF.classList.add("set_btn")
    control_device_1.classList.add("hiden")
})

btnup.addEventListener("click", function(){
    if(valueTemp1<32){
        text_value_device_1.innerHTML = ++valueTemp1 + " °C"
    }
})
btndown.addEventListener("click", function(){
    if(valueTemp1> 16){
        text_value_device_1.innerHTML = --valueTemp1 + " °C"
    }
})

BTN_Device_2_ON.addEventListener("click", function(){
    Device_2_ON.classList.remove("hiden")
    Device_2_OFF.classList.add("hiden")
    BTN_Device_2_OFF.classList.remove("set_btn")
    BTN_Device_2_ON.classList.add("set_btn")
})
BTN_Device_2_OFF.addEventListener("click", function(){
    Device_2_ON.classList.add("hiden")
    Device_2_OFF.classList.remove("hiden")
    BTN_Device_2_ON.classList.remove("set_btn")
    BTN_Device_2_OFF.classList.add("set_btn")
})

BTN_Device_3_ON.addEventListener("click", function(){
    Device_3_ON.classList.remove("hiden")
    Device_3_OFF.classList.add("hiden")
    BTN_Device_3_OFF.classList.remove("set_btn")
    BTN_Device_3_ON.classList.add("set_btn")
})
BTN_Device_3_OFF.addEventListener("click", function(){
    Device_3_ON.classList.add("hiden")
    Device_3_OFF.classList.remove("hiden")
    BTN_Device_3_ON.classList.remove("set_btn")
    BTN_Device_3_OFF.classList.add("set_btn")
})

BTN_Device_4_ON.addEventListener("click", function(){
    Device_4_ON.classList.remove("hiden")
    Device_4_OFF.classList.add("hiden")
    BTN_Device_4_OFF.classList.remove("set_btn")
    BTN_Device_4_ON.classList.add("set_btn")
})
BTN_Device_4_OFF.addEventListener("click", function(){
    Device_4_ON.classList.add("hiden")
    Device_4_OFF.classList.remove("hiden")
    BTN_Device_4_ON.classList.remove("set_btn")
    BTN_Device_4_OFF.classList.add("set_btn")
})

var Value_Temp = document.querySelector(".Value_Temp")
var temp_bedroom = firebase.database().ref().child('bedroom').child("sensor").child("temp")
temp_bedroom.on('value', function(snap) {Value_Temp.innerText = snap.val()})
var Value_Humidity = document.querySelector(".Value_Humidity")
var humidity_bedroom = firebase.database().ref().child('bedroom').child("sensor").child("humidity")
humidity_bedroom.on('value', function(snap) {Value_Humidity.innerHTML = snap.val()})

var value_3 = document.querySelector(".value_3")
var light_bedroom = firebase.database().ref().child("bedroom").child("sensor").child("light")
light_bedroom.on("value", function(snap){value_3.innerHTML = snap.val()})

var value_2 = document.querySelector(".value_2")
var dust_bedroom = firebase.database().ref().child("bedroom").child("sensor").child("dust")
dust_bedroom.on("value", function(snap){value_2.innerHTML = snap.val()})