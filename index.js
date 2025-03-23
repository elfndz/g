$(document).ready(function() {
let no = document.getElementById('no');
var yes = $("#yes");
var envelope = $("#envelope");

envelope.click(function(){
    open();
})

yes.click (function(){
    open();
})

no.addEventListener('mouseover', function(){
    let randX = Math.random() * 60;
    let randY = Math.random() * 80;

    no.style.left = randX + '%';
    no.style.top = randX + '%';
})

function open() {
    envelope.addClass("open")
        .removeClass("close");
}

function close() {
    envelope.addClass("close")
        .removeClass("open");
}

})
