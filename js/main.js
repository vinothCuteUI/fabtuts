// let onLiveCode = function(){
// 	let _htmlCode = document.getElementById("htmlCodeEditor").value;
// 	let _cssCode = "<style>"+document.getElementById("cssCodeEditor").value+"</style>";
// 	// let _jsCode = "<scri"+"pt>"+document.getElementById("jsCodeEditor").value+"</scri"+"pt>";
// 	let _showOutput = document.getElementById("codeOutPut").contentWindow.document;
// 	_showOutput.open();
// 	_showOutput.write(_cssCode+_htmlCode);
// 	_showOutput.close();
// } 

let _props, _cssList, _divElm, _optContent, _cssProperties, 
_propertyOption, _outPutTag, _htmlView, _outPtElm, _cssProp, isClick, 
_dropDownCss, _cssOptions, _cssPropList, getActiveOpt;

let newArrObj = [];

_cssList = document.getElementsByClassName("csslist");
_dropDownCss = document.getElementsByClassName("css-dropdown");
//get html elements
 _outPutTag = document.getElementById("outputtag");
 _htmlView = document.getElementById("htmlview");

//get css properties 
_cssProp = document.getElementById("css-option-tag");
_propertyOption = document.getElementById("css-dropdown-nav"); 
_cssProperties = document.getElementById("cssProperties"); 

for(let i = 0; i < _cssList.length; i++){

	_cssList[i].addEventListener("click", (e)=>{
		e.preventDefault();

		var _node = Array.prototype.slice.call(_cssList);
        var _indx = _node.indexOf(e.target);
        document.getElementsByClassName("nav-active")[0].classList.remove("nav-active");
        document.getElementsByClassName("csslist")[_indx].classList.add("nav-active");
        
		_props = e.target.href.split("#")[1];

		 if(isClick != _indx){
		 	cssData.forEach(function(obj, indx) {
				newArrObj.shift();
				newArrObj.push(obj[_props][0]);
				toCss(_props, { [_props]:obj[_props][0][_props]});
			});
			
		 }
		 isClick = _indx;
	})
}





//On side nave click function
for(let i = 0; i < _dropDownCss.length; i++){
	_dropDownCss[i].addEventListener("click", function(e){
		e.preventDefault();
		let _node = this.parentNode;
		
		let dropNave = _node.getElementsByClassName("css-dropdown-nav");
		dropNave[0].classList.toggle("css-active-nav");
	})
}


//Main css and demo function
let toCss = function(elm, cssPr){
	
	document.getElementsByClassName("active-demo")[0].classList.remove("active-demo");
    document.getElementById(elm+"-demo").classList.add("active-demo");
	//clear creates child elements
	_propertyOption.innerHTML = "";
	// _outPutTag.innerHTML = "";
	_cssProperties.innerHTML = "";
	_htmlView.innerHTML = "";

	
	//load dynamic content
	_cssProp.innerText = elm;
	_htmlView.innerText = elm;
	

	//create dynamic elements & css
	_outPtElm = document.getElementById(elm+"-demo"); 
	_outPtElm.innerText = "Demo of " + elm;


	for(let c in cssPr){
		let _cssKeyVal = document.createElement("p");
		_cssKeyVal.innerText = c+": " +cssPr[c]+";";
		_cssProperties.appendChild(_cssKeyVal);
		_outPtElm.style[c] = cssPr[c];
	}

	newArrObj.forEach( function(obj, indx) {
		for(let i in obj){
			_cssPropList = document.createElement("li");
			_cssPropList.setAttribute("class", "css-options")
			_cssPropList.setAttribute("data-id", i);
			_cssPropList.innerText = i;
			_propertyOption.appendChild(_cssPropList);
			_getActiveOpt = document.getElementsByClassName("css-options")[0];
			_getActiveOpt.classList.add("active-option");
		}
		_cssOptions = document.getElementsByClassName("css-options");
		for(let i = 0; i < _cssOptions.length; i++){
			_cssOptions[i].addEventListener("click", onCssOption);

		}
	});

	


}


//Initial load function
let onCssLoad = (csp)=>{
	cssData.forEach(function(obj, indx) {
		_outPtElm = document.getElementById("padding-demo"); 
		toCss("padding",{padding: "20px 20px 20px 20px"});
		newArrObj.shift();
		newArrObj.push(obj["padding"]);
		newArrObj.forEach(function(objs, c){
			for(let i in objs[0]){
				_cssPropList = document.createElement("li");
				_cssPropList.setAttribute("class", "css-options")
				_cssPropList.setAttribute("data-id", i);
				_cssPropList.innerText = i;
				_propertyOption.appendChild(_cssPropList);
				_getActiveOpt = document.getElementsByClassName("css-options")[0];
				_getActiveOpt.classList.add("active-option");
			}	
		})

		_cssOptions = document.getElementsByClassName("css-options");
		for(let i = 0; i < _cssOptions.length; i++){
			_cssOptions[i].addEventListener("click", onCssOption);
		}
	});

}

//Change option of css
let onCssOption = function(e){
	
	let _getCss = e.target.dataset.id;
	e.target.classList.toggle("active-option");
	newArrObj.forEach( function(cssOp, indVal) {
		for(let i in cssOp[0]){
			if(_getCss == i){
				let _newCssKeyVal = document.createElement("p");
				_newCssKeyVal.innerText = i+": " +cssOp[0][i]+";";
				_cssProperties.appendChild(_newCssKeyVal);
				_outPtElm.style[i] = cssOp[0][i];
			}
		}
	});
}
function clearChild(str) {
	
    var e = document.querySelector(str);
    
    // //e.firstElementChild can be used.
    // var child = e.lastElementChild; 
    // while (child) {
    //     e.removeChild(child);
    //     child = e.lastElementChild;
    // }
}

window.load = onCssLoad();
