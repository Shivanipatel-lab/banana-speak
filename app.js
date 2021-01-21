var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTraslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {

    fetch(getTraslationURL(error))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerHTML = json.error.code + "\n" +json.error.message
        })
        .catch(errorHandler);

    console.log("error occured",error)
    
    alert("somethign wrong with server! try again after some time...")
}

function clickEventHandler(){

    var inputText = txtInput.value;

    fetch(getTraslationURL(inputText))
        .then(response => response.json())
        .then(json => outputDiv.innerHTML = json.contents.translated)
        .catch(errorHandler);

    
}

btnTranslate.addEventListener('click', clickEventHandler );