self.addEventListener('message', function(e) {
  var file = e.data;

  // Read each file synchronously as an ArrayBuffer and
  // stash it in a global array to return to the main app.
   var dummy = new FileReaderSync();
  dummy.readAsText(file);
  dummy.onloadend = {
    alert(dummy.result);
  }
}, false);