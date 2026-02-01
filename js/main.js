lazyload();

let images = document.querySelectorAll(".gallery-img");
lazyload(images);

window.onload = function () {
    setTimeout(function() {
        document.getElementById("body").style.display = "";        
    }, 100);
}
/*
window.onresize = function() {
	var w,h;
    w = this.innerWidth;
    h = this.innerHeight;

    const diferc = document.getElementById('hidefer');
	const diferbarc = document.getElementById('difersidebutton');
	const main = document.getElementById('main');

	diferc.classList.toggle('hide-difiebar');
	diferbarc.classList.toggle('smolbutton-move');
	main.classList.toggle('hide-main');

    if (w < 1060) {
		diferc.classList.toggle('hide-difiebar');
		diferbarc.classList.toggle('smolbutton-move');
		main.classList.toggle('hide-main')
    }
}
*/


function DiferSidebarClose() {
	const diferc = document.getElementById('hidefer');
	const diferbarc = document.getElementById('difersidebutton');
	const main = document.getElementById('main');

	diferc.classList.toggle('hide-difiebar');
	diferbarc.classList.toggle('smolbutton-move');
	main.classList.toggle('main-move');

}


//getting body
const body_place = document.getElementById("body");


function KonamiBunny() {

	const bunny = document.createElement('img');
	bunny.setAttribute('src', 'assets/dillydally.png');
	bunny.setAttribute('class', 'bubunny');

	body_place.appendChild(bunny);

}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}


var activatecoll = document.getElementsByClassName("target");
var i;


for (i = 0; i < activatecoll.length; i++) {
  activatecoll[i].addEventListener("click", function() {
    var parent = this.parentElement;

    parent.classList.toggle("drop-active");
  });
}


//getting the images and setting up a variable to count
var zoomimg = document.getElementsByClassName("gallery-img");
var a;


//page click
function playAudio(url){
	new Audio(url).play();
}

//funtion to set up images and create display system
// currently revamping it with dom
for (a = 0; a < zoomimg.length; a++) {
	zoomimg[a].addEventListener("click", function(){

		//this - refers to the image clicked, its listening in for all images. But This means the image that was clicked

		//trying to make it so the image zooms-in! not zooms out.

		//this.classList.remove("gallery-img"); // has width of 90%, so it causes the image to zoom out.
		//this.classList.add("zoom-in-prep");
		
		// new image
		const display_image = document.createElement('img');

	
		//optimizes the display (new image)
		let x = this.src;
		let y = x.replace("thumb", "normal");
		console.log(y);
		//changes the source of the image to the full version
		display_image.setAttribute("src", y);

		let w = display_image.width;
		let h = display_image.height;

		if (w > h) {
			//landscape
			display_image.classList.add("zoom-in-active-2");

		} else if (w == "0" && h == "0") {
			//landscape
			display_image.classList.add("zoom-in-active-2");

		}else if (w < h) {
			//portrait
			display_image.classList.add("zoom-in-active");

		}else{
			//square
			display_image.classList.add("zoom-in-active-3");

		}


		console.log({h , w});

		// Creates background for image, protects other images from being clicked
		const backimg = document.createElement("div");
		backimg.setAttribute('class', 'zoom-in-back show-zoom-in-back');
		backimg.setAttribute('onclick', 'ImgBack()');
		const mombutton = document.createElement("button");
		mombutton.setAttribute('class','close-button');
		const button = document.createElement("span");
		button.setAttribute('class','material-symbols-outlined');
		mombutton.setAttribute('onclick','ImgBack()');
		button.appendChild(document.createTextNode('close'));


		mombutton.appendChild(button);
		
		body_place.appendChild(display_image);
		display_image.before(mombutton);
		display_image.after(backimg);

		if (this.getAttribute('src') == 'assets/art/emojipack/thumb/1_high.png') {
			playAudio('assets/Difer.mp3');
		}else if (this.getAttribute('src') == 'assets/art/emojipack/thumb/2_high.png'){
			playAudio('assets/Seraph.mp3');
		}else{
			playAudio('assets/card.mp3');
		}
	});
	
}

var zoom_emoji = document.getElementsByClassName("emoji-show");
var z;

// for (z = 0; z < zoom_emoji.length; z++) {
	zoom_emoji[z].addEventListener("click", function(){

		//trying to make it so the image zooms-in! not zooms out.

		this.classList.remove("emoji-show"); // has width of 90%, so it causes the image to zoom out.
		this.classList.add("zoom-in-prep");
		

		let w = this.width;
		let h = this.height;
		// Emoji needs reworking for high resolution version display
		let xi = this.querySelectorAll("img"); 
		let x = xi.src;
		console.log({x});
		let y = x.replace("thumb", "normal");
		
		this.classList.add("zoom-in-emoji");
		

		console.log({h , w});

		// Creates background for image, protects other images from being clicked
		const backimg = document.createElement("div");
		backimg.setAttribute('class', 'zoom-in-back show-zoom-in-back');
		backimg.setAttribute('onclick', 'ImgBack()');
		const mombutton = document.createElement("button");
		mombutton.setAttribute('class','close-button');
		const button = document.createElement("span");
		button.setAttribute('class','material-symbols-outlined');
		mombutton.setAttribute('onclick','ImgBack()');
		button.appendChild(document.createTextNode('close'));


		mombutton.appendChild(button);
		

		this.before(mombutton);
		this.after(backimg);


		// To implement more noises
		if (this.getAttribute('id') == 'difie_noise') {
			playAudio('assets/Difer.mp3');
		}else if (this.getAttribute('id') == 'seraph_noise'){
			playAudio('assets/Seraph.mp3');
		}else{
			playAudio('assets/card.mp3');
		}
	});
	
// }

let allImages = document.querySelectorAll("img");
allImages.forEach((value)=>{
    value.oncontextmenu = (e)=>{
        e.preventDefault();
    }
})

//toggle on off vtuber

var vtshow = document.getElementsByClassName("vt-title");
var b;

for (b = 0; b < vtshow.length; b++) {
	vtshow[b].addEventListener("click", function(){
		var parent = this.parentElement;

		parent.classList.toggle("vtubershowon");
	});
}

function ImgBack(){
	
	document.querySelectorAll(".zoom-in-back").forEach(el => el.remove());
	document.querySelectorAll(".close-button").forEach(el => el.remove());

	const imggoback = document.getElementsByClassName("zoom-in-active");

	document.querySelectorAll(".zoom-in-active").forEach(al => {al.remove();


	})

	document.querySelectorAll(".zoom-in-active-2").forEach(al => {al.remove();		

	})

	document.querySelectorAll(".zoom-in-active-3").forEach(al => {al.remove();


	})

	// Emoji needs reworking for high resolution version display 

	document.querySelectorAll(".zoom-in-emoji").forEach(al => {al.remove();


	})

}

function OpenTOS(){
	const tos = document.getElementById('tos');

	const backimg = document.createElement("div");
	backimg.setAttribute('class', 'zoom-in-back show-zoom-in-back');

	if (tos.classList.contains('tos-hidden') == true) {	
		tos.after(backimg);
		tos.classList.toggle('tos-hidden');
	}else{
		document.querySelectorAll(".zoom-in-back").forEach(el => el.remove());
		tos.classList.toggle('tos-hidden');
	}

}


window.onload(function(){
	const b = document.getElementById("up-illu-dtl");

	if (a.value == "0") {
		b.textContent = "SIMPLE"
	}else if (a.value == "1"){
		b.textContent = "STANDARD"
	}else if (a.value == "2"){
		b.textContent = "HIGH"
	}else if (a.value == "3"){
		b.textContent = "BLOW THE DRAWING TABLET UP!"
	}
});

var a = document.getElementById("illu-dtl");
a.addEventListener("input", function(){
	const b = document.getElementById("up-illu-dtl");

	if (a.value == "0") {
		b.textContent = "SIMPLE"
	}else if (a.value == "1"){
		b.textContent = "STANDARD"
	}else if (a.value == "2"){
		b.textContent = "HIGH"
	}else if (a.value == "3"){
		b.textContent = "BLOW THE DRAWING TABLET UP!"
	}
});

function ExampleHandler(id){
	var example = document.getElementById(id);
	var a = example.style.visibility
	if (a == "visible") {
		example.style.visibility = "hidden";
		example.classList.remove("canim");
	} else {
		example.style.visibility = "visible";
		example.classList.add("canim");
	}
}