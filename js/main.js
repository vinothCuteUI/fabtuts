// let onLiveCode = function(){
// 	let _htmlCode = document.getElementById("htmlCodeEditor").value;
// 	let _cssCode = "<style>"+document.getElementById("cssCodeEditor").value+"</style>";
// 	// let _jsCode = "<scri"+"pt>"+document.getElementById("jsCodeEditor").value+"</scri"+"pt>";
// 	let _showOutput = document.getElementById("codeOutPut").contentWindow.document;
// 	_showOutput.open();
// 	_showOutput.write(_cssCode+_htmlCode);
// 	_showOutput.close();
// } 

let _props = "padding", _demoElmId, _cssList, _divElm, _optContent, _cssProperties, 
_propertyOption, _outPutTag, _htmlView, _outPtElm, _cssProp, _isClick, 
_dropDownCss, _cssOptions, _cssPropList, getActiveOpt, _newCssKeyVal, 
_cssKey, _cssVal, _cssValInpt, _getPropsVal, _inptBox, _addShorthand, 
_getProps, _getId, _editElm, strPredefind, preDefind, _upPreDefStr, newPreDef, cssPr;

let _getEditCssObj = {}, _updateVal = [], _initObjProp, _initObjVal,
 _getUptStyle, updateStyle,
_headTag = document.head || document.getElementsByTagName('head')[0],
_style = document.createElement('style');
_headTag.appendChild(_style);

//load selected css object array 
let newArrObj, findCaps = /\W+|(?=[A-Z])|_/g;
let preDefindObj;

_cssList = document.getElementsByClassName("csslist");
_dropDownCss = document.getElementsByClassName("css-dropdown");
//get html elements
 _outPutTag = document.getElementById("outputtag");
 _htmlView = document.getElementById("htmlview");
 _selector = document.getElementById("selector");
 _cssInfo = document.getElementById("css-info");
 _tryNow = document.getElementsByClassName("tryit");
 _viewdetails = document.getElementById("viewdetails");

//get css properties 
_cssProp = document.getElementById("css-option-tag");
_propertyOption = document.getElementById("css-dropdown-nav"); 
_cssProperties = document.getElementById("cssProperties"); 


//Load dynamic side menu
var _sideNav = document.getElementsByClassName("side-nav")[0]; 
cssData.forEach(function(obj, i){
	var _navli = document.createElement("li");
	var _navA = document.createElement("a");
	_navA.setAttribute("class", "csslist");
	_navA.setAttribute("href", "#"+obj.cssItems);
	_navA.innerText = obj.cssItems.split(findCaps).join("-");
	_navli.appendChild(_navA);
	_sideNav.appendChild(_navli);
	document.getElementsByClassName("csslist")[0].classList.add("active");
})

//Select css nav to edit
for(let i = 0; i < _cssList.length; i++){

	_cssList[i].addEventListener("click", (e)=>{
		e.preventDefault();
		var _node = Array.prototype.slice.call(_cssList);
        var _indx = _node.indexOf(e.target);
        
        document.querySelectorAll(".side-nav li a.active")[0].classList.remove("active");
        document.querySelectorAll(".side-nav li a.csslist")[_indx].classList.add("active");
        
		_props = e.target.href.split("#")[1];
		 if(_isClick != _indx){
		 	onCssLoad();
		 }
		 _isClick = _indx;
		 // document.getElementById("main").offsetTop = 0;
	})
}

//hide enable events
document.addEventListener('click', function(e){   
	// let isEventClick = document.getElementsByClassName('css-dropdown')[0];
	if (!_dropDownCss[0].contains(e.target)){
	     document.getElementById("css-dropdown-nav").classList.remove("active");
	}

});




//On css option nave enable function
for(let i = 0; i < _dropDownCss.length; i++){
	_dropDownCss[i].addEventListener("click", function(e){
		e.preventDefault();
		let _node = this.parentNode;
		let dropNave = _node.getElementsByClassName("css-dropdown-nav");
		dropNave[0].classList.toggle("active");
	})

}


//Initial load 
let onCssLoad = ()=>{
	
	_getEditCssObj = {};
	
	newArrObj = cssData.find(e => e.cssItems == _props);
	let _cssProperty = newArrObj["property"];
	
	//load predefind object
	strPredefind = [];
	if(newArrObj["preDefind"]){
		preDefindObj = newArrObj["preDefind"];
		for(let c in preDefindObj){
			strPredefind.push(c);
		}

	}

	//get demo tag
    _demoElmId = document.getElementById(_props+"-demo");

	//clear creates child elements
	_propertyOption.innerHTML = "";
	_cssProperties.innerHTML = "";
	_htmlView.innerHTML = "";
	_outPutTag.innerHTML = "";
	_selector.innerText = "";

	//load dynamic content
	_cssProp.innerText = _props;

	//load css details
	_cssInfo.innerHTML = "";

	for(let m in cssContents[0]){
		if(m == _props){
			_cssInfo.innerHTML = cssContents[0][m];
		}
	}
	
	//load css properties
	cssPr = newArrObj["property"];
	_outPutTag.innerHTML = newArrObj["htmlDOM"];
	_htmlView.innerHTML = newArrObj["htmlView"];
	_selector.innerText = document.getElementsByClassName("fb-tag")[1].innerText;

	//show main and code toggle
	for(let x = 0; x < _tryNow.length; x++){
		_tryNow[x].addEventListener("click", (e)=>{
			e.preventDefault();
			document.getElementById("code-container").classList.add("show-code");
			document.getElementById("main").classList.remove("show-main");
		})
	}
	
	_viewdetails.addEventListener("click", (e)=>{
		e.preventDefault();
		document.getElementById("code-container").classList.remove("show-code");
		document.getElementById("main").classList.add("show-main");
	})

	//Add css properties from option
	addCssProps(newArrObj["cssItems"]);
	
	for(let i in cssPr){
		if (i.split("-")[0] != "predefind") {
			_cssPropList = document.createElement("li");
			_cssPropList.setAttribute("class", "css-options");
			_cssPropList.setAttribute("data-id", i);
			_cssPropList.setAttribute("data-checked", false);
			_cssPropList.innerText = i.split(findCaps).join("-").toLowerCase();
			_propertyOption.appendChild(_cssPropList);
			_getActiveOpt = document.getElementsByClassName("css-options")[0];
			_getActiveOpt.classList.add("active");
			_getActiveOpt.setAttribute("data-checked", true);
		}

	}
	_cssOptions = document.getElementsByClassName("css-options");
	
	for(let i = 0; i < _cssOptions.length; i++){
		_cssOptions[i].addEventListener("click", onCssOption, false);

	}
	
	//update css
	onUpdateCss();

}



//Select css option properties
let onCssOption = function(e){

	let _getCss = e.target.dataset.id;
	e.target.dataset.checked = e.target.dataset.checked == "true" ? false : true;
	// if(e.target.dataset.checked == "true"){
	// 	e.target.dataset.checked = false;
	// }else{
	// 	e.target.dataset.checked = true;
	// }
	let _isChecked = e.target.dataset.checked;
	e.target.classList.toggle("active");
	
	if(_isChecked == "true"){
		addCssProps(_getCss);
	}
	else{

		//Delete css props obj
		delete _getEditCssObj[_getCss];

		//Remove disabled css props
		let _cssProsElem = document.getElementsByClassName("props-list");
		for(let i = 0; i < _cssProsElem.length; i++){
			if(_cssProsElem[i].dataset.props == e.target.dataset.id){
				//Remove added css props
				_cssProsElem[i].remove();
				
			}
		}

		//update css
		onUpdateCss();
	}
}


function addCssProps(getCss){
	
	for(let i in cssPr){
		
		if(getCss == i){
			
			//Add css props obj
			_getEditCssObj[i] = cssPr[i];
			
			_newCssKeyVal = document.createElement("div");
			_cssKey = document.createElement("div");
			_cssVal = document.createElement("div");

			_newCssKeyVal.setAttribute("class", "props-list");
			_newCssKeyVal.setAttribute("data-props", i);

			_cssKey.setAttribute("class", "csskey");
			_cssVal.setAttribute("class", "cssval");

			_cssKey.innerText = i.split(findCaps).join("-").toLowerCase()+" :";
			// _cssVal.innerText = cssOp[i]+";";

			 _getPropsVal = cssPr[i].split(" ");
			
			 // preDefindOpt(cssPr, cssPr[i]);
			 let _notValOpt;

			for(let x = 0; x < _getPropsVal.length; x++){

				
				for(let n = 0; n < strPredefind.length; n++){
					if(_getPropsVal[x] == strPredefind[n]){

						let _cssValSelect = document.createElement("select");
						_cssValSelect.setAttribute("class", "css-select"+" "+ i);
						_cssValSelect.setAttribute("data-type", i);
						preDefind = preDefindObj[strPredefind[n]];
	
						for(let z = 0; z < preDefind.length; z++){
							let _cssValOption = document.createElement("option");
							_cssValOption.value = preDefind[z];
							_cssValOption.innerText = preDefind[z];
							_cssValSelect.appendChild(_cssValOption);
						}
						_cssVal.appendChild(_cssValSelect);
						_notValOpt = x;
					}
				}
				if(x != _notValOpt){
					
					_cssValInpt = document.createElement("input");
					
					_cssValInpt.setAttribute("type", "text");
					_cssValInpt.setAttribute("class", "css-inpt"+" "+ i);
					// _cssValInpt.setAttribute("class", i);

					_cssValInpt.setAttribute("data-type", i);

					_cssValInpt.value = _getPropsVal[x];
					_cssVal.appendChild(_cssValInpt);
					
					
					
				}
				
				
			}
			_cssValSpan = document.createElement("div");
			_cssValSpan.innerText = ";";

			_newCssKeyVal.appendChild(_cssKey);
			_newCssKeyVal.appendChild(_cssVal);
			_newCssKeyVal.appendChild(_cssValSpan);
			_cssProperties.appendChild(_newCssKeyVal);

			//update css
			onUpdateCss();

			_inptBox = document.getElementsByClassName("css-inpt");
			let _selectBox = document.getElementsByClassName("css-select");

			for(let n = 0; n < _inptBox.length; n++){
				_inptBox[n].addEventListener("keyup", onEdit);
			}
			for(let n = 0; n < _selectBox.length; n++){
				_selectBox[n].addEventListener("change", onEdit);
			}


		}
		
		
	}
	
}

//Edit css props function
let onEdit = function(str){
	_updateVal = [];
	 _getProps = str.target.dataset.type;
	 _getEditVal = document.getElementsByClassName(_getProps);
	 for(let i = 0; i < _getEditVal.length; i++){
	 	
	 	_updateVal.push(_getEditVal[i].value);
	 }
	 _getEditCssObj[_getProps] = _updateVal.join(" ");

	 //Update css
	 onUpdateCss();
}


// update edit css poperties
let onUpdateCss = ()=>{
	
	_getUptStyle = "";
	updateStyle = "";
	_upPreDefStr = "";
	_style.innerHTML = "";
	let _notValid;

	for(let stl in _getEditCssObj){
		let setVal = _getEditCssObj[stl].split(" ");

		for(let i = 0; i < setVal.length; i++){

			for(let x = 0; x < strPredefind.length; x++){

				if(setVal[i] == strPredefind[x]){
					newPreDef = preDefindObj[setVal[i]]
					_upPreDefStr += newPreDef[0]+" ";
					_notValid = i;
				}

			}
			if(i != _notValid){
				_upPreDefStr+=setVal[i]+" ";
			}
			
		}

		_getUptStyle+=stl.split(findCaps).join("-").toLowerCase()+":"+_upPreDefStr+";";
		_getEditCssObj[stl] = _upPreDefStr;
		_upPreDefStr = [];
	}
	
	updateStyle = "#"+_props+"-demo"+"{"+_getUptStyle+"}";
	_style.appendChild(document.createTextNode(updateStyle));
	
}


//Initial load css 
window.load = onCssLoad();
