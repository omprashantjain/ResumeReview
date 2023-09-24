function posDone() {
    let elements = document.getElementsByClassName('pos-checkbox');
    let posList = document.querySelector('#pos-list');
    posList.innerHTML = '';
    for(var i=0; i < elements.length; i++) {
        if (elements[i].checked) {
            posList.innerHTML = posList.innerHTML 
            + `<li class="c0 li-bullet-0"><span class="c3">${elements[i].parentElement.innerText.trim()}</span></li>`;
        }
    }
}

function negDone() {
    let elements = document.getElementsByClassName('neg-checkbox');
    let negList = document.querySelector('#neg-list');
    negList.innerHTML = '';
    for(var i=0; i < elements.length; i++) {
        if (elements[i].checked) {
            negList.innerHTML = negList.innerHTML 
            + `<li class="c0 li-bullet-0"><span class="c6">${elements[i].parentElement.innerText.trim()}</span></li>`;
        }
    }
}