var imageList = [
    "images/image1.gif",
    "images/image2.gif",
    "images/image3.gif",
    "images/image4.gif",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.png",
    "images/image8.jpg",
    "images/image9.jpg",
    "images/image10.jpg",
    "images/image11.gif",
    "images/image12.jpg",
    "images/image13.gif",
    "images/image14.gif",
    "images/image15.gif",
    "images/image16.gif",
    "images/image17.png",
    "images/image18.jpg",
    "images/image19.jpg"
];

$(".circle2").append('<img class="images" src="' + imageList[Math.floor(Math.random()*imageList.length)]+ '">'); 

function updateRandomImages() {
    //var imageElements = $('img');
    //$.each(imageElements, function(index, element) {
        //displayRandomImage(element);
    //});
}

function displayRandomImage(element) {
    var index = getRandomNumber(); 
    $(element).attr( 'src', imageList[index] );
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

$('.circle').click(function() {
    updateRandomImages();
    updateRandomColor();
});

//start off with some random images
updateRandomImages();


function updateRandomColor() {
    var color = '#' + Math.random().toString(16).slice(2, 8);
    $('body').css({ 'background' : color });
}

var words = ("Naw", "NO." , "Not going to happen" , "Hahaha, No." , "Absolutely..NOT" , "Yaaaas!" , "Ohhh yea!" , "Yessir!" , "YAAAAY ofcourse!" , "Positive" , "hmmm, don't know?" , "No clue" , "Not now" , "OMG YES" , "Si!" )
// -- 16 outcomes


//document.getElementById("word").textContent = word;
