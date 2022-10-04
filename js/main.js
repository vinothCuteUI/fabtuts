let onLiveCode = function(){
	let _htmlCode = document.getElementById("htmlCodeEditor").value;
	let _cssCode = "<style>"+document.getElementById("cssCodeEditor").value+"</style>";
	// let _jsCode = "<scri"+"pt>"+document.getElementById("jsCodeEditor").value+"</scri"+"pt>";
	let _showOutput = document.getElementById("codeOutPut").contentWindow.document;
	_showOutput.open();
	_showOutput.write(_cssCode+_htmlCode);
	_showOutput.close();
} 