const ids = ['pic', 'rid', 'email', 'wpa', 'zipcode', 'streetAddress', 'wifi'];
const clearValues = document.getElementById("clear");
const inputs = document.getElementsByName("inputBox");
const copyBTNs = document.getElementsByName("copyBTN");

document.addEventListener('DOMContentLoaded', init(), false);

function init(){
    ids.forEach(elementID => {
        let element = document.getElementById(elementID);
        if(localStorage.getItem(elementID) != null){
            element.value = localStorage.getItem(elementID);
        }
    })
}

inputs.forEach(input => {
    input.onblur = function(){
        localStorage.setItem(input.id, input.value);
    }
})

copyBTNs.forEach(btn => {
    btn.onclick = function(){
        let node = btn.previousElementSibling;
        node.select();
        node.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }
})

clearValues.onclick = function(){
    inputs.forEach(input => {
        input.value = '';
    })
    localStorage.clear();
}