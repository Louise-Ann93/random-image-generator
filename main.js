let button = document.getElementById("button");
let refreshButton = document.getElementById("refresh-button");
let image = document.getElementById("image");
let imageUrls = [
	"images/imageOne.jpeg",
	"images/imageTwo.jpeg",
	"images/imageThree.jpeg",
	"images/imageFour.jpeg",
	"images/imageFive.jpeg",
	"images/imageSix.jpeg",
	"images/imageSeven.jpeg",
	"images/imageEight.jpeg",
	"images/imageNine.jpeg",
	"images/imageTen.jpeg",
	"images/imageEleven.jpeg",
	"images/imageTwelve.jpeg",
	"images/imageThirteen.jpeg",
	"images/imageFourteen.jpeg",
	"images/imageFifteen.jpeg",
	"images/imageSixteen.jpeg",
	"images/imageSeventeen.jpeg",
	"images/imageEighteen.jpeg",
	"images/imageNineteen.jpeg",
	"images/imageTwenty.jpeg",
];
let removedUrls = [];
let count = document.getElementById("count");

window.onload = count.innerHTML = imageUrls.length + " images remaining";

button.addEventListener("click", function() {
	if (imageUrls.length > 0) {
		let randomIndex = Math.floor(Math.random() * imageUrls.length);
		image.src = imageUrls[randomIndex];
		image.style.display = "block";
		removedUrls.push(imageUrls[randomIndex]);
		imageUrls.splice(randomIndex, 1);
		count.innerHTML = imageUrls.length + " images remaining";
	} else {
		alert("All images have been shown! Press the refresh button to restart.");
		count.innerHTML = "All images have been shown!"
	}
});

refreshButton.addEventListener("click", function() {
	imageUrls = imageUrls.concat(removedUrls);
	removedUrls = [];
	image.src = "";
	image.style.display = "none";
	count.innerHTML = imageUrls.length + " images remaining";
});
