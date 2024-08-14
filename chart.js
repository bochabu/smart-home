const firebaseConfig = {
  apiKey: "AIzaSyCKep5KH1Lll9f4-3xrm5AP4iyKULcCEvw",
  authDomain: "bedroomiot-ff5b3.firebaseapp.com",
  databaseURL: "https://bedroomiot-ff5b3-default-rtdb.firebaseio.com",
  projectId: "bedroomiot-ff5b3",
  storageBucket: "bedroomiot-ff5b3.appspot.com",
  messagingSenderId: "986711442315",
  appId: "1:986711442315:web:82c3cb7334a837db72a58e",
  measurementId: "G-D7CGLJP3YK"
};

firebase.initializeApp(firebaseConfig); 
firebase.analytics();
//datetime
document.getElementById('datetime').addEventListener('change', function() {
    var canvas = document.getElementById('infomation');
    canvas.style.display = 'block'; 
});

//Bedroom
const tempRef = firebase.database().ref("bedroom/sensor/temp_history");
const humRef = firebase.database().ref("bedroom/sensor/hum_history");

let data = [];
let data2 = [];

tempRef.on('value', snapshot => {
    const firebaseData = snapshot.val();

    data = Object.entries(firebaseData).map(([timestamp, degree]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            degree: degree
        };
    });

    updateChart(data);
});

humRef.on('value', snapshot => {
    const firebaseHumData = snapshot.val();

    data2 = Object.entries(firebaseHumData).map(([timestamp, humidity]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            humidity: humidity
        };
    });

    updateChart(data, data2);
});

function updateChart(tempData, humData) {
    new Chart(document.getElementById("bar-chart-bedroom"), {
        type: "bar",
        data: {
            labels: tempData.map(row => row.hour), 
            datasets: [
                {
                    label: "Độ C",
                    backgroundColor: "aqua",
                    data: tempData.map(row => row.degree)
                },
                {
                    label: "% Độ ẩm",
                    backgroundColor: "red",
                    data: humData.map(row => row.humidity)
                }
            ]
        }
    });
}
//Kitchen
const kitchenTempRef = firebase.database().ref("kitchen/sensor/temp_history");
const kitchenHumRef = firebase.database().ref("kitchen/sensor/hum_history");

let kitchenData = [];
let kitchenData2 = [];

kitchenTempRef.on('value', snapshot => {
    const firebaseData = snapshot.val();

    kitchenData = Object.entries(firebaseData).map(([timestamp, degree]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            degree: degree
        };
    });

    updateKitchenChart(kitchenData);
});

kitchenHumRef.on('value', snapshot => {
    const firebaseHumData = snapshot.val();

    kitchenData2 = Object.entries(firebaseHumData).map(([timestamp, humidity]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            humidity: humidity
        };
    });

    updateKitchenChart(kitchenData, kitchenData2);
});
function updateKitchenChart(tempData, humData) {
    new Chart(document.getElementById("bar-chart-kitchen"), {
        type: "bar",
        data: {
            labels: tempData.map(row => row.hour), 
            datasets: [
                {
                    label: "Độ C",
                    backgroundColor: "aqua",
                    data: tempData.map(row => row.degree)
                },
                {
                    label: "% Độ ẩm",
                    backgroundColor: "red",
                    data: humData.map(row => row.humidity)
                }
            ]
        }
    });
}
//Garden
const gardenTempRef = firebase.database().ref("garden/sensor/temp_history");
const gardenHumRef = firebase.database().ref("garden/sensor/hum_history");

let gardenData = [];
let gardenData2 = [];

gardenTempRef.on('value', snapshot => {
    const firebaseData = snapshot.val();

    gardenData = Object.entries(firebaseData).map(([timestamp, degree]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            degree: degree
        };
    });

    updateGardenChart(gardenData);
});

gardenHumRef.on('value', snapshot => {
    const firebaseHumData = snapshot.val();

    gardenData2 = Object.entries(firebaseHumData).map(([timestamp, humidity]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            humidity: humidity
        };
    });

    updateGardenChart(gardenData, gardenData2);
});
function updateGardenChart(tempData, humData) {
    new Chart(document.getElementById("bar-chart-garden"), {
        type: "bar",
        data: {
            labels: tempData.map(row => row.hour), 
            datasets: [
                {
                    label: "Độ C",
                    backgroundColor: "aqua",
                    data: tempData.map(row => row.degree)
                },
                {
                    label: "% Độ ẩm",
                    backgroundColor: "red",
                    data: humData.map(row => row.humidity)
                }
            ]
        }
    });
}
//Livingroom
const livingTempRef = firebase.database().ref("livingroom/sensor/temp_history");
const livingHumRef = firebase.database().ref("livingroom/sensor/hum_history");

let livingData = [];
let livingData2 = [];

livingTempRef.on('value', snapshot => {
    const firebaseData = snapshot.val();

    livingData = Object.entries(firebaseData).map(([timestamp, degree]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            degree: degree
        };
    });

    updateLivingChart(livingData);
});

livingHumRef.on('value', snapshot => {
    const firebaseHumData = snapshot.val();

    livingData2 = Object.entries(firebaseHumData).map(([timestamp, humidity]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            humidity: humidity
        };
    });

    updateLivingChart(livingData, livingData2);
});
function updateLivingChart(tempData, humData) {
    new Chart(document.getElementById("bar-chart-livingroom"), {
        type: "bar",
        data: {
            labels: tempData.map(row => row.hour), 
            datasets: [
                {
                    label: "Độ C",
                    backgroundColor: "aqua",
                    data: tempData.map(row => row.degree)
                },
                {
                    label: "% Độ ẩm",
                    backgroundColor: "red",
                    data: humData.map(row => row.humidity)
                }
            ]
        }
    });
}
//control
document.addEventListener('DOMContentLoaded', function() {
    let bedroomLink = document.querySelector('.bedroom');
    let kitchenLink = document.querySelector('.kitchen');
    let livingroomLink = document.querySelector('.livingroom');
    let gardenLink = document.querySelector('.garden');
    
    let bedroomCanvas = document.getElementById('bar-chart-bedroom');
    let bedroomCanvas1 = document.getElementById('bar-chart-bedroom-1');
    let bedroomCanvas2 = document.getElementById('bar-chart-bedroom-2');
    let kitchenCanvas = document.getElementById('bar-chart-kitchen');
    let kitchenCanvas1 = document.getElementById('bar-chart-kitchen-1');
    let kitchenCanvas2 = document.getElementById('bar-chart-kitchen-2');
    let livingroomCanvas = document.getElementById('bar-chart-livingroom');
    let livingroomCanvas1 = document.getElementById('bar-chart-livingroom-1');
    let livingroomCanvas2 = document.getElementById('bar-chart-livingroom-2');
    let gardenCanvas = document.getElementById('bar-chart-garden');
    let gardenCanvas1 = document.getElementById('bar-chart-garden-1');
    let gardenCanvas2 = document.getElementById('bar-chart-garden-2');


    bedroomLink.addEventListener('click', function(event) {
        event.preventDefault();  
        bedroomCanvas.style.display = 'block';
        bedroomCanvas1.style.display = 'block';
        bedroomCanvas2.style.display = 'block';
        kitchenCanvas.style.display = 'none';
        kitchenCanvas1.style.display = 'none';
        kitchenCanvas2.style.display = 'none';
        livingroomCanvas.style.display = 'none';
        livingroomCanvas1.style.display = 'none';
        livingroomCanvas2.style.display = 'none';
        gardenCanvas.style.display = 'none';
        gardenCanvas1.style.display = 'none';
        gardenCanvas2.style.display = 'none';
    });

    kitchenLink.addEventListener('click', function(event) {
        event.preventDefault();  
        bedroomCanvas.style.display = 'none';
        bedroomCanvas1.style.display = 'none';
        bedroomCanvas2.style.display = 'none';
        kitchenCanvas.style.display = 'block';
        kitchenCanvas1.style.display = 'block';
        kitchenCanvas2.style.display = 'block';
        livingroomCanvas.style.display = 'none';
        livingroomCanvas1.style.display = 'none';
        livingroomCanvas2.style.display = 'none';
        gardenCanvas.style.display = 'none';
        gardenCanvas1.style.display = 'none';
        gardenCanvas2.style.display = 'none';
    });

    livingroomLink.addEventListener('click', function(event) {
        event.preventDefault();  
        bedroomCanvas.style.display = 'none';
        bedroomCanvas1.style.display = 'none';
        bedroomCanvas2.style.display = 'none';
        kitchenCanvas.style.display = 'none';
        kitchenCanvas1.style.display = 'none';
        kitchenCanvas2.style.display = 'none';
        livingroomCanvas.style.display = 'block';
        livingroomCanvas1.style.display = 'block';
        livingroomCanvas2.style.display = 'block';
        gardenCanvas.style.display = 'none';
        gardenCanvas1.style.display = 'none';
        gardenCanvas2.style.display = 'none';
    });

    gardenLink.addEventListener('click', function(event) {
        event.preventDefault();  
        bedroomCanvas.style.display = 'none';
        bedroomCanvas1.style.display = 'none';
        bedroomCanvas2.style.display = 'none';
        kitchenCanvas.style.display = 'none';
        kitchenCanvas1.style.display = 'none';
        kitchenCanvas2.style.display = 'none';
        livingroomCanvas.style.display = 'none';
        livingroomCanvas1.style.display = 'none';
        livingroomCanvas2.style.display = 'none';
        gardenCanvas.style.display = 'block';
        gardenCanvas1.style.display = 'block';
        gardenCanvas2.style.display = 'block';
    });
});
//Bedroom1
const bedDustRef = firebase.database().ref("bedroom/sensor/dust_history");

let DataDust1 = [];

bedDustRef.on('value', snapshot => {
    const firebaseData = snapshot.val();

    DataDust1 = Object.entries(firebaseData).map(([timestamp, degree]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            degree: degree
        };
    });

    updateBedChart1(DataDust1);
});

function updateBedChart1(tempData) {
    new Chart(document.getElementById("bar-chart-bedroom-1"), {
        type: "bar",
        data: {
            labels: tempData.map(row => row.hour),
            datasets: [
                {
                    label: "µg/m³ ",
                    backgroundColor: "grey",
                    data: tempData.map(row => row.degree)
                }
            ]
        }
    });
}
//Living1
const livingDustRef = firebase.database().ref("livingroom/sensor/dust_history");

let DataDust2 = [];

livingDustRef.on('value', snapshot => {
    const firebaseData = snapshot.val();

    DataDust2 = Object.entries(firebaseData).map(([timestamp, degree]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            degree: degree
        };
    });

    updateLivingChart1(DataDust2);
});

function updateLivingChart1(tempData) {
    new Chart(document.getElementById("bar-chart-livingroom-1"), {
        type: "bar",
        data: {
            labels: tempData.map(row => row.hour),
            datasets: [
                {
                    label: "µg/m³ ",
                    backgroundColor: "grey",
                    data: tempData.map(row => row.degree)
                }
            ]
        }
    });
}
//Kitchen1
const kitchenGasRef = firebase.database().ref("kitchen/sensor/gas_history");

let DataGas = [];

kitchenGasRef.on('value', snapshot => {
    const firebaseData = snapshot.val();

    DataGas = Object.entries(firebaseData).map(([timestamp, degree]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            degree: degree
        };
    });

    updateKitchenChart1(DataGas);
});

function updateKitchenChart1(tempData) {
    new Chart(document.getElementById("bar-chart-kitchen-1"), {
        type: "bar",
        data: {
            labels: tempData.map(row => row.hour),
            datasets: [
                {
                    label: "ppm ",
                    backgroundColor: "orange",
                    data: tempData.map(row => row.degree)
                }
            ]
        }
    });
}
//Garden1
const gardenRainRef = firebase.database().ref("garden/sensor/rain_history");

let DataRain = [];

gardenRainRef.on('value', snapshot => {
    const firebaseData = snapshot.val();

    DataRain = Object.entries(firebaseData).map(([timestamp, degree]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            degree: degree
        };
    });

    updateGardenChart1(DataRain);
});

function updateGardenChart1(tempData) {
    new Chart(document.getElementById("bar-chart-garden-1"), {
        type: "bar",
        data: {
            labels: tempData.map(row => row.hour),
            datasets: [
                {
                    label: "mm",
                    backgroundColor: "blue",
                    data: tempData.map(row => row.degree)
                }
            ]
        }
    });
}
//Bedroom2
const bedLightRef = firebase.database().ref("bedroom/sensor/light_history");

let DataLight1 = [];

bedDustRef.on('value', snapshot => {
    const firebaseData = snapshot.val();

    DataLight1 = Object.entries(firebaseData).map(([timestamp, degree]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            degree: degree
        };
    });

    updateBedChart2(DataLight1);
});

function updateBedChart2(tempData) {
    new Chart(document.getElementById("bar-chart-bedroom-2"), {
        type: "bar",
        data: {
            labels: tempData.map(row => row.hour),
            datasets: [
                {
                    label: "lux",
                    backgroundColor: "yellow",
                    data: tempData.map(row => row.degree)
                }
            ]
        }
    });
}
//Living2
const livingLightRef = firebase.database().ref("livingroom/sensor/light_history");

let DataLight2 = [];

livingLightRef.on('value', snapshot => {
    const firebaseData = snapshot.val();

    DataLight2 = Object.entries(firebaseData).map(([timestamp, degree]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            degree: degree
        };
    });

    updateLivingChart2(DataLight2);
});

function updateLivingChart2(tempData) {
    new Chart(document.getElementById("bar-chart-livingroom-2"), {
        type: "bar",
        data: {
            labels: tempData.map(row => row.hour),
            datasets: [
                {
                    label: "lux",
                    backgroundColor: "yellow",
                    data: tempData.map(row => row.degree)
                }
            ]
        }
    });
}
//Kitchen2
const kitchenLightRef = firebase.database().ref("kitchen/sensor/light_history");

let DataLight3 = [];

kitchenLightRef.on('value', snapshot => {
    const firebaseData = snapshot.val();

    DataLight3 = Object.entries(firebaseData).map(([timestamp, degree]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            degree: degree
        };
    });

    updateKitchenChart2(DataLight3);
});

function updateKitchenChart2(tempData) {
    new Chart(document.getElementById("bar-chart-kitchen-2"), {
        type: "bar",
        data: {
            labels: tempData.map(row => row.hour),
            datasets: [
                {
                    label: "lux",
                    backgroundColor: "yellow",
                    data: tempData.map(row => row.degree)
                }
            ]
        }
    });
}
//Garden2
const gardenLightRef = firebase.database().ref("garden/sensor/light_history");

let DataLight4 = [];

gardenLightRef.on('value', snapshot => {
    const firebaseData = snapshot.val();

    DataLight4 = Object.entries(firebaseData).map(([timestamp, degree]) => {
        return {
            hour: new Date(Number(timestamp)).getHours() + "h00",
            degree: degree
        };
    });

    updateGardenChart2(DataLight4);
});

function updateGardenChart2(tempData) {
    new Chart(document.getElementById("bar-chart-garden-2"), {
        type: "bar",
        data: {
            labels: tempData.map(row => row.hour),
            datasets: [
                {
                    label: "lux",
                    backgroundColor: "yellow",
                    data: tempData.map(row => row.degree)
                }
            ]
        }
    });
}