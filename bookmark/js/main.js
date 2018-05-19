// variables

var btnSubmit = document.getElementById("add");
var list = document.getElementById("list");



//Event Listener
document.getElementById("form").addEventListener("submit", addBookmark);
	



//Functions
function addBookmark(e){
	e.preventDefault();
	var siteName = document.getElementById('sitesName').value;
	var siteUrl =document.getElementById('url').value;
	
	var addBookmark ={
		name: siteName,
		url: siteUrl
	}
	
	addBookmark.content =list;
	console.log(addBookmark)
	

	
	

}

