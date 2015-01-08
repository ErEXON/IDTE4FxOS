// parseAudio function for Parsing the Whole Audio Blob
function parseAudio(myBlob)
{
    console.log("Parsing File...");
    var reader = new FileReader();
    reader.readAsArrayBuffer(myBlob);
    reader.onload = function() {
    
           var tag = new DataView(reader.result), index =0;
           console.log("Reading Header...");
           
           if((tag.getUint8(0)==73) && (tag.getUint8(1)==68) &&(tag.getUint8(2)==51))
                  console.log("ID3 Tag Detected. Parsing info...");
           else
               {
                   console.log("No ID3 tag Found. Reverting...");
                      return;
               }
          var header = {
                 version : tag.getUint8(3),
                 revision : tag.getUint8(4),
                 flags : tag.getUint8(5),
                 size_t : (tag.getUint8(9) & 0xFF) |  //Finally Desynchronise The Synch. Safe Integer i.e.0xxxxxxx 0xxxxxxx ......
                  ((tag.getUint8(8) & 0xFF) << 7 ) |  // Size    =  0xxxxxxx
                  ((tag.getUint8(7) & 0xFF) << 14 )|  //          +        0xxxxxxx
                  ((tag.getUint8(6) & 0xFF) << 21 )   //          +               0xxxxxxx
                                                      //          +                      0xxxxxxx
                                                      //__________________________________________
                                                      // Size    =  xxxxxxxxxxxxxxxxxxxxxxxxxxxx      where + = OR Operation
                };
           
           console.log("Tag Version = 2."+header.version+"."+header.revision+", Size = "+header.size_t+" Bytes");
           read_frame();
           
           function read_frame()
           {
                  var index = 10, fid,fdata;
               while(index < header.size_t)
                      {
                           get_string(index, index+4);
                             index = index + 4;
                             fid = put_str();
                            // I was going to use Switch Case but, since we have only 9 - 10 fields therefore i am using if else
                             // Also, i am not good with handling Strings in switch cases.
                             //if(fid === "TALB")       
                             console.log(fid);
                             break;
                      }
           }
           
           function put_str()
           {
                  var a = document.getElementById("data").value;
                  document.getElementById("data").value = "";
                  return(a);
           }
           
           function get_string(start,end)
           {
                 var worker = new Worker('scripts/worker.js');
                 worker.postMessage(myBlob.slice(start,end));
                  
                  worker.onmessage = function(e) {
                        document.getElementById("data").value = e.data;
                          };     
           }
           
           
      };
}