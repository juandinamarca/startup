$(document).ready(function(){

	

    //localStorage

  	$('#save').click(function(){
		localStorage.setItem('key', textarea.value);
		});
		$('#clear').click(function(){
		localStorage.setItem('key','');
    $('#textarea').val('')
		});


    //IndexedDB

    if("indexedDB" in window) {
    idbSupported = true;
  }
  
  



  if(idbSupported) {

    var request = indexedDB.open("database",1);
 
    request.onupgradeneeded = function(e) {

      console.log("Running onupgradeneeded...");
      var thisDB = e.target.result;

      if(!thisDB.objectStoreNames.contains("data")) {
        thisDB.createObjectStore("data", {autoIncrement:true});
      }
    }
 
    request.onsuccess = function(e) {

      console.log("Success!");
      db = e.target.result;
      var $text = $('#textarea');

      $('#save').on('click',function(){

        var textFromTA = $text.val();
        console.log('Text: '+textFromTA);
        $text.val('');
        var data = { data:textFromTA, created:new Date() }
        var transaction = db.transaction(["data"],"readwrite");
        var store = transaction.objectStore("data");

        var request = store.add(data);

        request.onerror = function(e) {
          console.log("Error",e.target.error.name);
        }

        request.onsuccess = function(e) {
          console.log("transaction success!");
        }
      })

      

      $('#clear').on('click',function(){

        var transaction = db.transaction(["data"], "readwrite");
        var objectStore = transaction.objectStore("data");
 
        var cursor = objectStore.openCursor();
        $('#divData').html("");
        
        cursor.onsuccess = function(e) {
            
          var res = e.target.result;

          if(res) {
            objectStore.delete(res.key);
            res.continue();
          }
        }
      })
 

    }
 
    request.onerror = function(e) {
      console.log("Error");
      console.dir(e);
      }

    }
    else {
      console.log("indexedDB not supported!!");
      $('#divData').html("indexedDB not supported!!");
    }



    //Drag and Drop


      // Content section used alot
      var content = document.getElementById('content');
      
      if (!window.FileReader) {
        content.innerHTML = "<p>This browser doesnt support the File API</p>";
      } else {
        // Page Layout
        content.innerHTML =
          '<p>Pick a text file or drag one into this area <br> <input type="file" id="file" /></p>' +
          '<b>Content:</b> <br><br> <pre id="file-content"></pre>' +
          '</p>';
      
        // Input handler
        document.getElementById('file').onchange = function() {
          readFileAsText(this.files[0]);
        };
      
        // Drag and drop methods
        content.ondragover = function(e) {
          e.preventDefault();
          return false;
        };
        content.ondrop = function(event) {
          e.stopPropagation();
          readFileAsText(event.dataTransfer.files[0]);
          return false;
        };
          
        function readFileAsText(file) {
          var reader = new FileReader();
          reader.readAsText(file);
          reader.onload = function(event) {
            document.getElementById('file-content').textContent = 
              event.target.result;
          };
          reader.onerror = function() {
            document.getElementById('file-content').innerHTML = 'Unable to read ' + file.fileName;
          };
        }
      }



      // web socket
      
      var wsUri = "ws://echo.websocket.org/"; 
      var output;  function init() { output = document.getElementById("output"); 
      testWebSocket(); }  function testWebSocket() { websocket = new WebSocket(wsUri); 
        websocket.onopen = function(evt) { onOpen(evt) }; 
        websocket.onclose = function(evt) { onClose(evt) }; 
        websocket.onmessage = function(evt) { onMessage(evt) }; 
        websocket.onerror = function(evt) { onError(evt) };
         }  
        function onOpen(evt) { writeToScreen("CONNECTED");
          doSend("WebSocket rocks");
        }  
        function onClose(evt) { writeToScreen("DISCONNECTED");
        }  
        function onMessage(evt) { writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>'); 
          websocket.close();
        } 
        function onError(evt) { writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data); 
        }  
        function doSend(message) { writeToScreen("SENT: " + message);
             websocket.send(message);
        }  
        function writeToScreen(message) { var pre = document.createElement("p");
              pre.style.wordWrap = "break-word"; 
              pre.innerHTML = message; 
              output.appendChild(pre);
        } 
        window.addEventListener("load", init, false);














      //Canvas Element


  	var canvas = document.getElementById("micanvas");
      var context = canvas.getContext("2d");
      var x = Math.floor(Math.random() * 100) + 1;
      var y = Math.floor(Math.random() * 100) + 1;
      
      var width = Math.floor(Math.random() * 200) + 1;
      var height = Math.floor(Math.random() * 100) + 1;
      var colors = ["green", "blue", "red", "pink", "yellow"]
      var randomColor = colors[Math.floor((Math.random()) * colors.length)];

      context.beginPath();
      context.arc(x, y, height, 0, 2 * Math.PI, false);
      context.strokeStyle = randomColor;
      context.strokeRect(x, y, width, height);
      context.stroke();



      //Canvas API animate


           window.requestAnimFrame = (function(callback) {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60);
          };
        })();

        function drawRectangle(myRectangle, context) {
          context.beginPath();
          context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
          context.fillStyle = '#8ED6FF';
          context.fill();
          context.lineWidth = myRectangle.borderWidth;
          context.strokeStyle = 'black';
          context.stroke();
        }
        function animate(myRectangle, canvas, context, startTime) {
          // update
          var time = (new Date()).getTime() - startTime;

          var linearSpeed = 100;
          // pixels / second
          var newX = linearSpeed * time / 1000;

          if(newX < canvas.width - myRectangle.width - myRectangle.borderWidth / 2) {
            myRectangle.x = newX;
          }

          // clear
          context.clearRect(0, 0, canvas.width, canvas.height);

          drawRectangle(myRectangle, context);

          // request new frame
          requestAnimFrame(function() {
            animate(myRectangle, canvas, context, startTime);
          });
        }
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');

        var myRectangle = {
          x: 0,
          y: 75,
          width: 100,
          height: 50,
          borderWidth: 5
        };

        drawRectangle(myRectangle, context);

        // wait one second before starting animation
        setTimeout(function() {
          var startTime = (new Date()).getTime();
          animate(myRectangle, canvas, context, startTime);
        }, 1000);



})