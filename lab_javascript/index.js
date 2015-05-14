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


var cats = ["http://40.media.tumblr.com/dfb694a9441369587fa6fbace7f1300a/tumblr_nlhadzYa621qgn992o1_500.jpg","http://41.media.tumblr.com/e7d92bf9ff7e7bd6a398c21e1bd0eb2a/tumblr_nlhabwKYO11qgn992o1_500.jpg","http://41.media.tumblr.com/9a1f93e7a5574adbfdd8151c8848eced/tumblr_njvspjar0q1qgn992o1_500.jpg","http://40.media.tumblr.com/3e358654d9b38fea7dcffd686a3a9c90/tumblr_nhx1zlburL1qgn992o1_500.jpg","http://40.media.tumblr.com/61309db165a9712fa6338cb72d02c25c/tumblr_ngdoqcpnqm1qgn992o1_500.jpg"];
 
var poems = ["Roses are red", "Violets are Blue", "Look out on the doorstep", "Oh my god, it's flaming poo"];
 
var selectedpoem = false;
 
$(".go-button").click(function() {
  var nextpoem = poems[Math.floor(Math.random()*poems.length)];

  while (selectedpoem == nextpoem) {
    nextpoem = poems[Math.floor(Math.random()*poems.length)];
  }
  
  selectedpoem = nextpoem;
  $(".poem-holder").html(nextpoem);
  $(".cat-holder").html('<img src="' + cats[Math.floor(Math.random()*cats.length)]+ '">');
  var newheight = (Math.floor(Math.random() * 100) + 100) + "px";
  $(".line").css("height", newheight);
  
  for (var increment = 0; increment < 100; increment++) {
    $("body").append("<div class='dot'></div>"); 
  }
 
  $(".dot").each(function() {
    var newtop = Math.floor(Math.random()*100) + "%";
    var newleft = Math.floor(Math.random()*100) + "%";
    $(this).css("top",newtop);
    $(this).css("left",newleft);
  });
});