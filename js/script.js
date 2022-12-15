//View box
let viewBtns = document.getElementsByClassName("view-btn");
let codeContainer = document.getElementById("code-container");
for(let i = 0; i < viewBtns.length; i++){
	viewBtns[i].addEventListener("click", onChangeView);
}


function onChangeView(str){
	let _getBtn = this.dataset.btn;
	var _node = Array.prototype.slice.call(viewBtns);
    var _indx = _node.indexOf(this);
	document.querySelectorAll(".view-mode div.active")[0].classList.remove("active");
	viewBtns[_indx].classList.add("active");

	switch (_getBtn) {
		case "viewTwo":
			codeContainer.classList.remove("flex-dr-column-reverse");
			codeContainer.classList.remove("flex-dr-row");
			codeContainer.classList.add("flex-dr-row-reverse");
			
			break;
		case "viewThree":
			codeContainer.classList.add("flex-dr-column-reverse");
			codeContainer.classList.remove("flex-dr-row-reverse");
			codeContainer.classList.remove("flex-dr-row");
			break;
		default:
			codeContainer.classList.add("flex-dr-row");
			codeContainer.classList.remove("flex-dr-column-reverse");
			codeContainer.classList.remove("flex-dr-row-reverse");
			break;
	}
	

}