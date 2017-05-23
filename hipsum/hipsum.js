document.addEventListener('DOMContentLoaded', function () {
  requestIpsum();
});

function requestIpsum() {
    var thediv = document.getElementById('hipsums');
    var endpoint = 'http://hipsterjesus.com/api/';
    var paras = 4;
    var type = 'hipster-centric';
    var html = false;
    var url = endpoint + '?paras='+paras+'&type='+type+'&html='+html;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        var response_obj = JSON.parse(xhr.responseText);
        thediv.innerHTML = response_obj.text;
    }
    }   
}



