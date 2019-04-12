

var idleTime = 0;
$(document).ready(function () {

        $('[data-toggle="tooltip"]').tooltip();

        var idleInterval = setInterval(timerIncrement, 1000); // 1 seg
        
        //event desktop
		    $(this).mousemove(function (e) {
          idleTime = 0;
          clearInterval(idleInterval);
		      idleInterval = setInterval(timerIncrement, 1000);
		    });
		    document.addEventListener("click", function( event ) {     
            idleTime = 0;
		        clearInterval(idleInterval);
		        idleInterval = setInterval(timerIncrement, 1000);
		    }, false);
		    $(this).keypress(function (e) {
            idleTime = 0;
		        clearInterval(idleInterval);
		        idleInterval = setInterval(timerIncrement, 1000);
        });
        

        //event mobile
        document.addEventListener("touchstart", function( event ) {     
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);

        document.addEventListener("touchend", function( event ) {     
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);

        document.addEventListener("touchcancel", function( event ) {     
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);

        document.addEventListener("touchleave", function( event ) {     
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);

        document.addEventListener("touchmove", function( event ) {     
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);
});


function timerIncrement() {
  idleTime = idleTime + 1;
  console.log("time: "+idleTime);
  if (idleTime == 30) { // 30 sec
    $('#myModal3').modal('show');
  }
}

