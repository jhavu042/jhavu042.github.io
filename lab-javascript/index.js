//display multiple random images

var imageList = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg",
    "images/image10.jpg",
    "images/image11.jpg",
    "images/image12.jpg",
];

function updateRandomImages() {
    var imageElements = $('img');
    $.each(imageElements, function(index, element) {
        displayRandomImage(element);
    });
}

function displayRandomImage(element) {
    var index = getRandomNumber(); 
    $(element).attr( 'src', imageList[index] );
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

$('button').click(function () {
    updateRandomImages();
});

//start off with some random images
updateRandomImages();