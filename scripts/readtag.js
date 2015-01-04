	function triggerFunc(){
	var request = myDatabase.mozCreateFileHandle("file.mp3", "binary");
	request.onsuccess = function(event) {
			var inputFile = event.target.result;
	}

	var mp3File = inputFile.open();
	var request = mp3File.readAsText(3);
	request.onsuccess = function(event) {
			var text = event.target.result;
			// 3 characters have been read.
	}
}