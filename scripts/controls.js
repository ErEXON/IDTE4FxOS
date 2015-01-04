  var brwseBtn = document.getElementById("browse-btn");
  // Must be a reference to a function name, not a function call.
  brwseBtn.onclick = clickUpload;

function clickUpload(){
  document.getElementById("fileBrowser").click();
  var nameBtn = document.getElementById("fileBrowser");
  nameBtn.onchange = displayName;
  
}

function displayName(){
  var ext = document.getElementById("fileBrowser").value;
  document.getElementById("file").value = ext;
}

function msg(){
  alert("Tapped");
}

var button = document.getElementById('browse-btn');
button.addEventListener('click', function(){
})

function initElement() {
  console.log("Initialized Sucessfully");
  var p = document.getElementById("browse-btn");
  // Must be a reference to a function name, not a function call.
  p.onclick = clickUpload;
};
