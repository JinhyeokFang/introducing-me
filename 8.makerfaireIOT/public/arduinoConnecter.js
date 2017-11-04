var socket = io.connect();
var sendData = {
    light1: 0,
    door1: 0
};

function light1Button() {
    sendData.light1 = sendData.light1 * -1 + 1;
    sendHomeData();
}

function door1Button() {
    sendData.door1 = sendData.door1 * -1 + 1;
    sendHomeData();
}

function sendHomeData() {
    socket.emit('message', sendData.light1 + "" + sendData.door1);
}

function light1(status) {
    if (status == '0') {
        document.getElementById('light1').innerText = "꺼짐";
        document.getElementById('light1Button').innerText = "켜기";
    } else {
        document.getElementById('light1').innerText = "켜짐";
        document.getElementById('light1Button').innerText = "끄기";
    }
}

function door1(status) {
    if (status == '0') {
        document.getElementById('door1').innerText = "닫힘";
        document.getElementById('door1Button').innerText = "열기";
    } else {
        document.getElementById('door1').innerText = "열림";
        document.getElementById('door1Button').innerText = "닫기";
    }
}

function temperature1(temper) {
    document.getElementById('temperature1').innerText = "현재 집안 온도:" + temper * 0.01 + "℃";
}

function bright1(bright) {
    var status = "ERROR";
    if (97 < bright) {
        status = "매우 밝음";
    } else if(95 < bright) {
        status = "밝음";
    } else if (93 < bright) {
        status = "보통";
    } else if (90 < bright) {
        status = "조금 어두움";
    } else if (80 < bright) {
        status = "어두움"
    }
    document.getElementById('bright1').innerText = "현재 집안 밝기:" + status;
}

function dust (dustStatus) {
    document.getElementById('dust').innerText = "현재 미세먼지 농도:" + dustStatus + "";
}

function bell (status) {
    if (status == '1') {
        document.getElementById('bellAudio').play();
        document.getElementById('bell').innerText = '초인종이 눌렸습니다.';
        setTimeout(function() {
          document.getElementById('bellAudio').play();
        }, 3000);
        setTimeout(function() {
          document.getElementById('bell').innerText = '';
        }, 5000);
    }
}

function changeSensorValue(data) {
    light1(data[0]);
    door1(data[1]);
    temperature1(parseInt(data[2]+data[3]+data[4]+data[5]+data[6]+data[7]));
    bright1(parseInt(data[data.length - 6]+data[data.length - 5]));
    dust(parseInt(data[data.length - 3]+data[data.length - 2]+data[data.length - 1]));
    bell(data[data.length - 4]);
}




socket.on('sensorValue', (data) => {
    changeSensorValue(data);
});

socket.emit('message', '');