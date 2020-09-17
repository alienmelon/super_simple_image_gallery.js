//path to the images folder
//if you do not want to use thumbnails use ths ame path for thumbnails as the large files
var str_imagePath = "images/large/";
var str_imageThumbnail = "images/thumbnails/";

//fade in on load
function imageLoadComplete(img){
	img.style.visibility = "visible";
	img.style.opacity = "1";
	//div_footer.innerHTML = str_footer;
}
function imageLoadEffect(img, imgSrc){
	//if loaded
	if (img.complete) {
		imageLoadComplete(img);
	} else {
		img.addEventListener('load', function(){
		imageLoadComplete(img);
	})
	  img.addEventListener('error', function() {
	      console.log("error loading image " + imgSrc);
	  })
	}
}

function openImage(imgInfo){
		
	var strImgPath = str_imagePath + imgInfo[0];
	
	//open the image, with next/prev arrows, clicking closes...
	var _container = document.createElement("div");
	_container.id = "_fullImage";
	_container.className = "fullImage";
	
	document.body.appendChild(_container);
	
	//populate
	//note that if you don't want to let people copy images then
	//comment out all _img code and comment in the _container.style.backgroundImage
	//this sets the element's background image to the art, but makes it harder to copy
	//_container.style.backgroundImage = "url(" + strImgPath +")";
	_img = document.createElement("img");
	_img.id = "_IMGlarge";
	_img.className = "IMGlarge";
	_img.src = strImgPath;
	
	//caption
	var _caption = document.createElement("div");
	_caption.id = "_imageCaption";
	_caption.className = "imageCaption";
	_caption.innerHTML = imgInfo[1];
	
	_container.appendChild(_img);
	_container.appendChild(_caption);
	
	//close it (remove itself on click)...
	_container.addEventListener('click', function(){
		if(_container != null){
			_container.parentNode.removeChild(_container);
			//random background image
			randBodyImage();
		};
	})
	
}

function buildgrid(){
		
	for(let i = 0; i < arr_images.length; ++i){
		//make grid
		let imgInfo = arr_images[i]; //reference as "let" so it works in IE, passed to click event
		var img = document.createElement("img");
		var imgSrc = str_imageThumbnail + arr_images[i][0];
		img.src = imgSrc;
		//img.loading = "lazy";
		img.className = 'images';
		img.id = "_img_"+String(i);
		//
		//div_footer.innerHTML = "Loading: " + arr_images[i][0];
		imageLoadEffect(img, imgSrc);
		//
		var span = document.createElement('span');
		span.innerHTML = "<span class='imageDescription'>" + arr_images[i][1] + "</span>";
		//
		//the container for images and span
		var _container = document.createElement("div");
		_container.id = "_imageDiv_" + String(i);
		_container.className = "image_thumb";
		//add
		_container.appendChild(img);
		_container.appendChild(span);
		div_parent.appendChild(_container);
		//
		//
		_container.addEventListener('click', function(){
			openImage(imgInfo);
		})
	}
}

//make a random image for the background
function randBodyImage(){
	//var strImg = str_imagePath + arr_images[Math.ceil(Math.random()*arr_images.length)-1][0];
	//document.body.style.backgroundImage = "url('" + strImg + "')";
}

function init(){
	
	//build container...
	div_parent = document.createElement("div");
	div_parent.id = "container";
	div_parent.className = "imageContainer";
	document.getElementsByTagName('body')[0].appendChild(div_parent);
	//build the footer (about text)
	div_footer = document.createElement("div");
	div_footer.id = "_footer";
	div_footer.className = "footer";
	div_footer.innerHTML = str_footer;
	document.getElementsByTagName('body')[0].appendChild(div_footer);
	//build the header (small tagline or image...)
	div_header = document.createElement("div");
	div_header.id = "_header";
	div_header.className = "header";
	div_header.innerHTML = str_header;
	document.getElementsByTagName('body')[0].appendChild(div_header);
	
	//all the action happens here	
	buildgrid();
	
	//random image for background...
	randBodyImage();
	
}