//  MAGANA, Dylan G.
//  02/13/2024


//  buttons
var sf1 = document.querySelector('#sf1 .head');
var sf2 = document.querySelector('#sf2 .head');
var sf3 = document.querySelector('#sf3 .head');
var sf4 = document.querySelector('#sf4 .head');
var sf5 = document.querySelector('#sf5 .head');
var sf6 = document.querySelector('#sf6 .head');
var tang = document.querySelector('.tangButton');


//  message box
var messageBox = document.querySelector('.messageBox');



//  sunflower 1 ('i love you')
sf1.addEventListener('click', function() {
    messageBox.textContent = 'I love you ❤️'
    
    var audio01 = document.getElementById("audio01");
    audio01.play();
});


//  sunflower 2 ('you got this!')
sf2.addEventListener('click', function() {
    messageBox.textContent = 'You Got This!'

    var audio02 = document.getElementById("audio02");
    audio02.play();
});


//  sunflower 3
sf3.addEventListener('click', function() {
    messageBox.textContent = 'No Audio Yet. Tell Me What You Want To Hear, My Love.'
});


//  sunflower 4 ('get')
sf4.addEventListener('click', function() {
    messageBox.textContent = 'G  E  T'

    var audio04 = document.getElementById("audio04");
    audio04.play();
});


//  sunflower 5 ('some')
sf5.addEventListener('click', function() {
    messageBox.textContent = 'S  O  M  E'

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioFilePath = 'audios/some.m4a';

    var audio05 = document.getElementById("audio05");
    audio05.play();
});


//  sunflower 6 ('bone?')
sf6.addEventListener('click', function() {
    messageBox.textContent = 'bone?'

    var audio06 = document.getElementById("audio06");
    audio06.play();
});


//  tang ('greetings')
tang.addEventListener('click', function() {
    messageBox.textContent = 'Happy Valentine\'s Day, Tang. I love you.'

    var audio07 = document.getElementById("audio07");
    audio07.play();
});


//  MAGANA, Dylan G.
//  02/13/2024