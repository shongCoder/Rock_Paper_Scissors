var comImput;

var rnd = Math.random();

if(rnd < 0.33){
    comImput = '가위';
}else if(rnd < 0.66){
    comImput = '바위';
}else{
    comImput = '보';
}

console.log(comImput);

//결과 텍스트
var textField = document.getElementById('result');
var textWin = document.createTextNode('컴퓨터를 이겼습니다!!');
var textLose = document.createTextNode('컴퓨터에게 졌습니다...');
var textFire = document.createTextNode('컴퓨터와 비겼습니다.');

//이미지 나타나기
function comGa(){
    document.getElementById('comGawi').style.display = 'inline';
    document.getElementById('imgVs').style.display = 'inline';
}
function comBa(){
    document.getElementById('comBawi').style.display = 'inline';
    document.getElementById('imgVs').style.display = 'inline';
}
function comBo(){
    document.getElementById('comBo').style.display = 'inline';
    document.getElementById('imgVs').style.display = 'inline';
}
function userGa(){
    document.getElementById('userGawi').style.display = 'inline';
    document.getElementById('imgVs').style.display = 'inline';
}
function userBa(){
    document.getElementById('userBawi').style.display = 'inline';
    document.getElementById('imgVs').style.display = 'inline';
}
function userBo(){
    document.getElementById('userBo').style.display = 'inline';
    document.getElementById('imgVs').style.display = 'inline';
}

function loadView(){
    document.getElementById('reload').style.display = 'inline-block';
}
function reload(){
    window.location.reload();
}

function gameGawi(){
    if(comImput === '가위'){
        textField.appendChild(textFire);
        comGa();
    }else if(comImput === '바위'){
        textField.appendChild(textLose);
        comBa();
    }else{
        textField.appendChild(textWin);
        comBo();
    }
    userGa();
    loadView();
    document.getElementById('btn_game').style.display = 'none';
}


function gameBawi(){
    if(comImput === '가위'){
        textField.appendChild(textWin);
        comGa();
    }else if(comImput === '바위'){
        textField.appendChild(textFire);
        comBa();
    }else{
        textField.appendChild(textLose);
        comBo();
    }
    userBa();
    loadView();
    document.getElementById('btn_game').style.display = 'none';
}

function gameBo(){
    if(comImput === '가위'){
        textField.appendChild(textLose);
        comGa();
    }else if(comImput === '바위'){
        textField.appendChild(textWin);
        comBa();
    }else{
        textField.appendChild(textFire);
        comBo();
    }
    userBo();
    loadView();
    document.getElementById('btn_game').style.display = 'none';
}

//예제
/*
var userInput = prompt('가위, 바위, 보!');

if(userInput !== '가위' && userInput !== '바위' && userInput !== '보'){
    alert('가위, 바위, 보 중 하나를 입력해야 합니다!');
}else{
    var comImput;

    var rnd = Math.random();

    if(rnd < 0.33){
        comImput = '가위';
    }else if(rnd < 0.66){
        comImput = '바위';
    }else{
        comImput = '보';
    }

    if(userInput === '가위'){
        if(comImput === '가위'){
            alert('컴퓨터: ' + comImput + ' - 컴퓨터와 비겼습니다.')
        }else if(comImput === '바위'){
            alert('컴퓨터: ' + comImput + ' - 컴퓨터에게 졌습니다...')
        }else{
            alert('컴퓨터: ' + comImput + ' - 컴퓨터를 이겼습니다!!')
        }
    }else if(userInput === '바위'){
        if(comImput === '가위'){
            alert('컴퓨터: ' + comImput + ' - 컴퓨터룰 이겼습니다!!')
        }else if(comImput === '바위'){
            alert('컴퓨터: ' + comImput + ' - 컴퓨터와 비겼습니다.')
        }else{
            alert('컴퓨터: ' + comImput + ' - 컴퓨터에게 졌습니다...')
        }
    }else{
        if(comImput === '가위'){
            alert('컴퓨터: ' + comImput + ' - 컴퓨터에게 졌습니다...')
        }else if(comImput === '바위'){
            alert('컴퓨터: ' + comImput + ' - 컴퓨터에게 이겼습니다!!')
        }else{
            alert('컴퓨터: ' + comImput + ' - 컴퓨터와 비겼습니다.')
        }
    }
}
*/