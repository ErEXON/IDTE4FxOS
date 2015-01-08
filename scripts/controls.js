$(document).ready(function(){
  $("#browse-btn").click(function(){
	      locate();
		});
  
    });

function locate(){
var act = new MozActivity({
    name: 'pick',
    data: {
      type: 'audio/mpeg'
       }
    });
    act.onsuccess = function() {
       index = 0; // For Getting the Current Position of the File Pointer
        console.log("File opened successfuly");
        var blobSrc = this.result.blob; //Source blob
        // Show filename onto the Screen for User Convinence   
        document.getElementById("file").value = blobSrc.name.replace(/^.*[\\\/]/, '');
          // Start Tag Reading
        parseAudio(blobSrc); 
    }
    act.onerror = function() {
        console.log("The activity encouter an error: " + this.error);
        alert("No File Selected");
     }    
}

function clickUpload(){
  document.getElementById("fileBrowser").click();
  var nameBtn = document.getElementById("fileBrowser");
  nameBtn.onchange = displayName;
    
}
