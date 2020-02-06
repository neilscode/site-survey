const picBox = document.getElementById("pic");
const wifiBox = document.getElementById("wifi");
const sidBox = document.getElementById("sid");
const wpaBox = document.getElementById("wpa");

const picBTN = document.getElementById("picCopy");
const wifiBTN = document.getElementById("wifiCopy");
const sidBTN = document.getElementById("sidCopy");
const wpaBTN = document.getElementById("wpaCopy");

const clearValues = document.getElementById("clear");

document.addEventListener('DOMContentLoaded', init(), false);

function setValue(key){
    let keyValue = localStorage.getItem(key);
    if(keyValue != null){
        return keyValue;
    }
    else{
        return "";
    }
}

function init(){
    picBox.value = setValue('picID');
    wifiBox.value = setValue('wifiPassword');
    wpaBox.value = setValue('wpaPassword');
    sidBox.value = setValue('sidID');
}

picBox.onblur = function(){
    textLeave('picID', picBox.value);
};
wifiBox.onblur = function(){
    textLeave('wifiPassword', wifiBox.value);
};
sidBox.onblur = function(){
    textLeave('sidID', sidBox.value);
};
wpaBox.onblur = function(){
    textLeave('wpaPassword', wpaBox.value);
};

function textLeave(itemKey, val){
    localStorage.setItem(itemKey, val);
}

picBTN.onclick = function(){
    copyText(picBox);
}

wifiBTN.onclick = function(){
    copyText(wifiBox);
}

sidBTN.onclick = function(){
    copyText(sidBox);
}

wpaBTN.onclick = function(){
    copyText(wpaBox);
}

function copyText(node){
    node.select();
    node.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

clearValues.onclick = function(){
    picBox.value = '';
    wpaBox.value = '';
    wifiBox.value = '';
    sidBox.value = '';
    localStorage.removeItem('picID');
    localStorage.removeItem('sidID');
    localStorage.removeItem('wpaPassword');
    localStorage.removeItem('wifiPassword');
}