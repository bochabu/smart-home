const firebaseConfig = {
    apiKey: "AIzaSyCC_nezjS8o34YNU-yRJiSXZCns0yrwkJw",
    authDomain: "esp32-dd9fb.firebaseapp.com",
    databaseURL: "https://esp32-dd9fb-default-rtdb.firebaseio.com",
    projectId: "esp32-dd9fb",
    storageBucket: "esp32-dd9fb.appspot.com",
    messagingSenderId: "935979264762",
    appId: "1:935979264762:web:ae132d6c96ced27a3af743",
    measurementId: "G-FP91ST5RJY"
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
    var dbRef1 = firebase.database().ref().child('livingroom').child("device").child("maylanh").set({
        status: 1,
      })
})
BTN_Device_1_OFF.addEventListener("click", function(){
    Device_1_ON.classList.add("hiden")
    Device_1_OFF.classList.remove("hiden")
    BTN_Device_1_ON.classList.remove("set_btn")
    BTN_Device_1_OFF.classList.add("set_btn")
    control_device_1.classList.add("hiden")
    var dbRef1 = firebase.database().ref().child('livingroom').child("device").child("maylanh").set({
        status: 0,
      })
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
    var dbRef3 = firebase.database().ref().child('livingroom').child("device").child("led").set({
        status: 1,
      })
    
})
BTN_Device_2_OFF.addEventListener("click", function(){
    Device_2_ON.classList.add("hiden")
    Device_2_OFF.classList.remove("hiden")
    BTN_Device_2_ON.classList.remove("set_btn")
    BTN_Device_2_OFF.classList.add("set_btn")
    var dbRef3 = firebase.database().ref().child('livingroom').child("device").child("led").set({
        status: 0,
      })
})

BTN_Device_3_ON.addEventListener("click", function(){
    Device_3_ON.classList.remove("hiden")
    Device_3_OFF.classList.add("hiden")
    BTN_Device_3_OFF.classList.remove("set_btn")
    BTN_Device_3_ON.classList.add("set_btn")
    var dbRef1 = firebase.database().ref().child('livingroom').child("device").child("tv").set({
        status: 1,
      })
})
BTN_Device_3_OFF.addEventListener("click", function(){
    Device_3_ON.classList.add("hiden")
    Device_3_OFF.classList.remove("hiden")
    BTN_Device_3_ON.classList.remove("set_btn")
    BTN_Device_3_OFF.classList.add("set_btn")
    var dbRef1 = firebase.database().ref().child('livingroom').child("device").child("tv").set({
        status: 0,
      })
})

BTN_Device_4_ON.addEventListener("click", function(){
    Device_4_ON.classList.remove("hiden")
    Device_4_OFF.classList.add("hiden")
    BTN_Device_4_OFF.classList.remove("set_btn")
    BTN_Device_4_ON.classList.add("set_btn")
    var dbRef1 = firebase.database().ref().child('livingroom').child("device").child("hutbui").set({
        status: 1,
      })
})
BTN_Device_4_OFF.addEventListener("click", function(){
    Device_4_ON.classList.add("hiden")
    Device_4_OFF.classList.remove("hiden")
    BTN_Device_4_ON.classList.remove("set_btn")
    BTN_Device_4_OFF.classList.add("set_btn")
    var dbRef1 = firebase.database().ref().child('livingroom').child("device").child("hutbui").set({
        status: 0,
      })
})
/*
var Value_Temp = document.querySelector(".Value_Temp")
var temp_living = firebase.database().ref().child('livingroom').child("sensor").child("temp")
temp_living.on('value', function(snap) {Value_Temp.innerText = snap.val()})
var Value_Humidity = document.querySelector(".Value_Humidity")
var humidity_living = firebase.database().ref().child('livingroom').child("sensor").child("humidity")
humidity_living.on('value', function(snap) {Value_Humidity.innerHTML = snap.val()})

var value_3 = document.querySelector(".value_3")
var light_living = firebase.database().ref().child("livingroom").child("sensor").child("light")
light_living.on("value", function(snap){value_3.innerHTML = snap.val()})

var value_2 = document.querySelector(".value_2")
var dust_living = firebase.database().ref().child("livingroom").child("sensor").child("dust")
dust_living.on("value", function(snap){value_2.innerHTML = snap.val()})
*/
var status_led_living = firebase.database().ref().child('livingroom').child("device").child("led").child("status")
status_led_living.on('value', function(snap) {if(snap.val()==1){
    Device_2_ON.classList.remove("hiden")
    Device_2_OFF.classList.add("hiden")
    BTN_Device_2_OFF.classList.remove("set_btn")
    BTN_Device_2_ON.classList.add("set_btn")
}
else{
    Device_2_ON.classList.add("hiden")
    Device_2_OFF.classList.remove("hiden")
    BTN_Device_2_ON.classList.remove("set_btn")
    BTN_Device_2_OFF.classList.add("set_btn")
}})

var status_maylanh_living = firebase.database().ref().child('livingroom').child("device").child("maylanh").child("status")
status_maylanh_living.on('value', function(snap) {if(snap.val()==1){
    Device_1_ON.classList.remove("hiden")
    Device_1_OFF.classList.add("hiden")
    BTN_Device_1_OFF.classList.remove("set_btn")
    BTN_Device_1_ON.classList.add("set_btn")
    control_device_1.classList.remove("hiden")
}
else{
    Device_1_ON.classList.add("hiden")
    Device_1_OFF.classList.remove("hiden")
    BTN_Device_1_ON.classList.remove("set_btn")
    BTN_Device_1_OFF.classList.add("set_btn")
    control_device_1.classList.add("hiden")
}})

var status_tv_living = firebase.database().ref().child('livingroom').child("device").child("tv").child("status")
status_tv_living.on('value', function(snap) {if(snap.val()==1){
    Device_3_ON.classList.remove("hiden")
    Device_3_OFF.classList.add("hiden")
    BTN_Device_3_OFF.classList.remove("set_btn")
    BTN_Device_3_ON.classList.add("set_btn")
}
else{
    Device_3_ON.classList.add("hiden")
    Device_3_OFF.classList.remove("hiden")
    BTN_Device_3_ON.classList.remove("set_btn")
    BTN_Device_3_OFF.classList.add("set_btn")
}})

var status_hutbui_living = firebase.database().ref().child('livingroom').child("device").child("hutbui").child("status")
status_hutbui_living.on('value', function(snap) {if(snap.val()==1){
    Device_4_ON.classList.remove("hiden")
    Device_4_OFF.classList.add("hiden")
    BTN_Device_4_OFF.classList.remove("set_btn")
    BTN_Device_4_ON.classList.add("set_btn")
}
else{
    Device_4_ON.classList.add("hiden")
    Device_4_OFF.classList.remove("hiden")
    BTN_Device_4_ON.classList.remove("set_btn")
    BTN_Device_4_OFF.classList.add("set_btn")
}})