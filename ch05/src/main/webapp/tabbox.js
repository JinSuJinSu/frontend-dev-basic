let tabBox = {
	
	_onWindowLoad:function(){
		let divTabBox = document.getElementsByClassName("tab-box")[0];
		let ul = divTabBox.childNodes[1];
		
		let liTabs = ul.getElementsByTagName("li");
		for(let i=0; i<liTabs.length; i++){
			liTabs[i].addEventListener('click',this.onTabClicked);
		}
	},
	
	_onTabClicked:function(){
		 // unselected
		 let lisSelected = document.getElementsByClassName("selected");
		 (lisSelected.length===1) && (lisSelected[0].className= "");
		 
		 //select
		 this.className = "selected";
	},
	
	init: function() {
		window.addEventListener('load',this._onWindowLoad.bind(this));
	}
}