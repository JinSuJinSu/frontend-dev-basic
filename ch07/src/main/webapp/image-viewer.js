let imageViewer = {

	_images : 
	[{	
		name:"국화",
		file:"Chrysanthemum.jpg"
	},{
		name:"사막",
		file:"Desert.jpg"
	},{
		name:"수국",
		file:"Hydrangeas.jpg"
	},{
		name:"해파리",
		file:"Jellyfish.jpg"
	},{
		name:"코알라",
		file:"Koala.jpg"
	},{
		name:"등대",
		file:"Lighthouse.jpg"
	},{
		name:"펭귄",
		file:"Penguins.jpg"
	},{
		name:"툴립",
		file:"Tulips.jpg"
	}
	],

	_changeImage : function(){
		let index = Math.floor(Math.random() * this._images.length);
		$(".image-viewer img").attr({
			alt:this._images[index].name,
			src:"images/" + this._images[index].file
		});
	},

	_timer : null,

	_slideImage : function(){
	if(this._timer!=null){
		clearInterval(this._timer);
		_timer=null;
		$('#btn-slideshow').text("슬라이드쇼 시작");
	}
	else{
		this._timer = setInterval(function(){
			this._changeImage();
		}.bind(this),3000);
		$('#btn-slideshow').text("슬라이드쇼 중지");
	}
	},

	init: function() {
		$(function(){
			this._changeImage();
			$('#btn-change').click(this._changeImage.bind(this));
			$(".image-viewer img").click(this._changeImage.bind(this));
			$('#btn-slideshow').click(this._slideImage.bind(this));
		}.bind(this));
	}
};

/*
let images = [
	{	
		name:"국화",
		file:"Chrysanthemum.jpg"
	},{
		name:"사막",
		file:"Desert.jpg"
	},{
		name:"수국",
		file:"Hydrangeas.jpg"
	},{
		name:"해파리",
		file:"Jellyfish.jpg"
	},{
		name:"코알라",
		file:"Koala.jpg"
	},{
		name:"등대",
		file:"Lighthouse.jpg"
	},{
		name:"펭귄",
		file:"Penguins.jpg"
	},{
		name:"툴립",
		file:"Tulips.jpg"
	}
];

let changeImage = function(){
	let index = Math.floor(Math.random() * images.length);
	$(".image-viewer img").attr({
		alt:images[index].name,
		src:"images/" + images[index].file
	});
}

let timer = null;

let slideImage = function(){
	if(timer!=null){
		clearInterval(timer);
		timer=null;
		$('#btn-slideshow').text("슬라이드쇼 시작");
	}
	else{
		timer = setInterval(function(){
			changeImage();
		},3000);
		$('#btn-slideshow').text("슬라이드쇼 중지");
	}
}

let totalFunction = function(){
		changeImage();
	$('#btn-change').click(changeImage);
	$(".image-viewer img").click(changeImage);
	$('#btn-slideshow').click(slideImage);

}

let imageViewer = {

	init: function() {
		window.addEventListener('load', totalFunction);

	}	
}
*/

