// let onLiveCode = function(){
// 	let _htmlCode = document.getElementById("htmlCodeEditor").value;
// 	let _cssCode = "<style>"+document.getElementById("cssCodeEditor").value+"</style>";
// 	// let _jsCode = "<scri"+"pt>"+document.getElementById("jsCodeEditor").value+"</scri"+"pt>";
// 	let _showOutput = document.getElementById("codeOutPut").contentWindow.document;
// 	_showOutput.open();
// 	_showOutput.write(_cssCode+_htmlCode);
// 	_showOutput.close();
// } 

let _props = "padding", _cssList, _divElm, _optContent, _cssProperties, 
_propertyOption, _outPutTag, _htmlView, _outPtElm, _cssProp, isClick, 
_dropDownCss, _cssOptions, _cssPropList, getActiveOpt, _newCssKeyVal, 
_cssKey, _cssVal, _cssValInpt, _getPropsVal, _inptBox, _addShorthand, 
_getProps, _getId, _editElm;

//load selected css object array 
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


//Load dynamic side menu
var _sideNav = document.getElementsByClassName("side-nav")[0]; 
for(let i in cssData[0]){
	var _navli = document.createElement("li");
	var _navA = document.createElement("a");

	_navA.setAttribute("class", "csslist");
	_navA.setAttribute("href", "#"+i);
	_navA.innerText = i;
	

	_navli.appendChild(_navA);
	_sideNav.appendChild(_navli);
	document.getElementsByClassName("csslist")[0].classList.add("nav-active");


}

//Select css nav to edit
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
				newArrObj.push(obj[_props]);
				toCss(_props, {[_props]:obj[_props][0][_props]});
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
	
	//load shorthand css
	newArrObj.forEach( function(obj, indx) {
		for(let s in obj[1]){
			_addShorthand = obj[1][s];
		}
	});
	
	//pre load css
	for(let c in cssPr){
		_newCssKeyVal = document.createElement("div");
		_cssKey = document.createElement("div");
		_cssVal = document.createElement("div");
		
		
		_newCssKeyVal.setAttribute("class", "props-list");
		_newCssKeyVal.setAttribute("data-props", c);
		
		_cssKey.setAttribute("class", "csskey");
		_cssVal.setAttribute("class", "cssval");

		_cssKey.innerText = c+" :";

		_getPropsVal = cssPr[c].split(" ");
		
	
		for(let i = 0; i < _getPropsVal.length; i++){
			_cssValInpt = document.createElement("input");
			_cssValInpt.setAttribute("type", "text");
			_cssValInpt.setAttribute("class", "css-inpt"+" "+ c+"-"+_addShorthand[i]);
			// _cssValInpt.setAttribute("class", c+"-"+_addShorthand[i]);
			
			_cssValInpt.setAttribute("data-type", c+"-"+_addShorthand[i]);
			
			
			_cssValInpt.value = _getPropsVal[i];
			_cssVal.appendChild(_cssValInpt);

		}
		
		// _cssVal.innerText = cssPr[c]+";";
		_newCssKeyVal.appendChild(_cssKey);
		_newCssKeyVal.appendChild(_cssVal);
		_cssProperties.appendChild(_newCssKeyVal);
		_outPtElm.style[c] = cssPr[c];

		_inptBox = document.getElementsByClassName("css-inpt");
		for(let n = 0; n < _inptBox.length; n++){
			_inptBox[n].addEventListener("keyup", onEdit);
		}

	}

	//load css properties
	newArrObj.forEach( function(obj, indx) {

		for(let i in obj[0]){
			
			_cssPropList = document.createElement("li");
			_cssPropList.setAttribute("class", "css-options");
			_cssPropList.setAttribute("data-id", i);
			_cssPropList.setAttribute("data-checked", false);
			_cssPropList.innerText = i;
			_propertyOption.appendChild(_cssPropList);
			_getActiveOpt = document.getElementsByClassName("css-options")[0];
			_getActiveOpt.classList.add("active-option");
			_getActiveOpt.setAttribute("data-checked", true);

		}
		_cssOptions = document.getElementsByClassName("css-options");
		for(let i = 0; i < _cssOptions.length; i++){
			_cssOptions[i].addEventListener("click", onCssOption, false);

		}
	});


}


//Initial load 
let onCssLoad = (csp)=>{
	cssData.forEach(function(obj, indx) {
		_outPtElm = document.getElementById("padding-demo"); 
		newArrObj.shift();
		newArrObj.push(obj[_props]);
		toCss(_props, { [_props]:obj[_props][0][_props]});
		
	});

}

//Select css option properties
let onCssOption = function(e){
	let _getCss = e.target.dataset.id;
	if(e.target.dataset.checked == "true"){
		e.target.dataset.checked = false;
	}else{
		e.target.dataset.checked = true;
	}
	let _isChecked = e.target.dataset.checked;
	e.target.classList.toggle("active-option");
	
	if(_isChecked == "true"){
		newArrObj.forEach(function(cssOp, indVal) {
			for(let i in cssOp[0]){
				
				if(_getCss == i){
					_newCssKeyVal = document.createElement("div");
					_cssKey = document.createElement("div");
					_cssVal = document.createElement("div");

					_newCssKeyVal.setAttribute("class", "props-list");
					_newCssKeyVal.setAttribute("data-props", i);

					_cssKey.setAttribute("class", "csskey");
					_cssVal.setAttribute("class", "cssval");

					_cssKey.innerText = i+" :";
					// _cssVal.innerText = cssOp[i]+";";

					 _getPropsVal = cssOp[0][i].split(" ");
					if(_props == _getCss){
						for(let x = 0; x < _getPropsVal.length; x++){
							_cssValInpt = document.createElement("input");
							_cssValInpt.setAttribute("type", "text");
							_cssValInpt.setAttribute("class", "css-inpt"+" "+ i+"-"+_addShorthand[x]);
							
							
							_cssValInpt.setAttribute("data-type", i+"-"+_addShorthand[x]);
							
							
							_cssValInpt.value = _getPropsVal[x];
							_cssVal.appendChild(_cssValInpt);


						}
					}else{
						for(let x = 0; x < _getPropsVal.length; x++){
						
							_cssValInpt = document.createElement("input");
							_cssValInpt.setAttribute("type", "text");
							_cssValInpt.setAttribute("class", "css-inpt", i);
							// _cssValInpt.setAttribute("class", i);

							_cssValInpt.setAttribute("data-type", i);

							_cssValInpt.value = _getPropsVal[x];
							_cssVal.appendChild(_cssValInpt);
							
							let _findCssVal = document.getElementsByClassName(i);
							if(_findCssVal.length > 0){
								document.getElementsByClassName(i)[0].setAttribute("disabled", true);
							}

						}
					}


					_newCssKeyVal.appendChild(_cssKey);
					_newCssKeyVal.appendChild(_cssVal);

					_cssProperties.appendChild(_newCssKeyVal);
					_outPtElm.style[i] = cssOp[0][i];
					
					_inptBox = document.getElementsByClassName("css-inpt");

					for(let n = 0; n < _inptBox.length; n++){
						_inptBox[n].addEventListener("keyup", onEdit);
					}


				}
				
				
			}
		});
	}else{
		let _cssProsElem = document.getElementsByClassName("props-list");
		let _cssInpt = document.getElementsByClassName("css-inpt");
		for(let i = 0; i < _cssProsElem.length; i++){
			if(_cssProsElem[i].dataset.props == e.target.dataset.id){
				
				//Remove added css props
				_cssProsElem[i].remove();
				removeEdit(e.target.dataset.id);

				//updated css
				for(let j = 0; j < _cssInpt.length; j++){
					
					if(_cssInpt[j].dataset.type == e.target.dataset.id){
						_getProps = _cssInpt[j].dataset.type;
						 _getId = _getProps.split("-")[0];
						 _editElm = document.getElementById(_getId+"-demo");
						_editElm.style[_getProps] = _cssInpt[j].value;
					}
				}
				//remove disable
				let _rmCssVal = document.getElementsByClassName(e.target.dataset.id);
				if(_rmCssVal.length != 0){
					document.getElementsByClassName(e.target.dataset.id)[0].removeAttribute("disabled");
				}
				

			}
		}
		
		
		
		
	}
}



//Edit css props function
let onEdit = function(str){
	console.log(str)
	 _getProps = str.target.dataset.type;
	 _getId = _getProps.split("-")[0];
	 _editElm = document.getElementById(_getId+"-demo");
	_editElm.style[_getProps] = str.target.value;
}

//remove css props function
let removeEdit = function(str){
	 _getId =  str.split("-")[0];
	 _editElm = document.getElementById(_getId+"-demo");
	_editElm.style.removeProperty(str);
	// element.style.removeProperty("width");

}


// function clearChild(str) {
	
//     var e = document.querySelector(str);
    
//     // //e.firstElementChild can be used.
//     // var child = e.lastElementChild; 
//     // while (child) {
//     //     e.removeChild(child);
//     //     child = e.lastElementChild;
//     // }
// }

window.load = onCssLoad();
