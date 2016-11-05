/***********************************************
This sets the 1 sec (1000 ms) timer event when the
#clock page is loaded
************************************************/
$(document).on("pagecreate","#clock",function(){
	myVar = setInterval(updateTime, 1000);
	/***********************************************
	JQuery: Delegation of button click
	************************************************/
	$("#clkpause").click(function(){
		pauseClock();
	});
});


/***********************************************
This function is called when the timer fires
************************************************/
function updateTime(){
	//Create a Date object containing current time
	var d = new Date();
	//Convert to short time format and update
	//the label,LED
	$("#LED").html(d.toLocaleTimeString());
}



/***********************************************
Pause and continue the timer
************************************************/
function pauseClock(){
	if(myVar != null){//Timer running
		//clearInterval stop the timer
		clearInterval(myVar);
		//Using JQuery to modify the text of pause btn
		$("#clkpause").text("Con't");
		//Change pause button color to green
		$("#clkpause").css("color","rgb(0, 255, 0)");
		//Set myVar to null for next checking
		myVar = null;
	}else{//Timer has paused
		//Start the timer again
		myVar = setInterval(updateTime, 1000);
		//Modify the text of pause button
		$("#clkpause").text("Pause");
		//Change pause button color to red
		$("#clkpause").css("color","red");	
	}
}




// Week01b - Enhanced Version of the Clock
/***********************************************
This sets the 1 sec (1000 ms) timer event when the
#clock page is loaded
************************************************/

// Add in Javascript 
$(document).on("pagecreate", "#clock2",function(){
	myVar = setInterval(updateTime2,1000);
	
	$("#clkpause").click(function(){
		pauseClock();
	});
	
	format = 0;
	$("#btnFormat").click(function(){
		format = ++format %2;
		$("#btnFormat").text(""+12*(format+1) + " Hours Format");	
	
	});
		
		
});

// End of adding Javascript

function updateTime2(){
	//Create a Date object containing current time
	var d = new Date();
	//Convert to short time format and update
	//the label,LED
	$("#LED").html(format>0?Display12HrFormat(d):Display24HrFormat(d));
}

function Display12HrFormat(date,n) {
	var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
	var am_pm = date.getHours() >= 12 ? "PM" : "AM";
	hours = hours < 10 ? "0" + hours : hours;
	var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	return hours + ":" + minutes + ":" + seconds  + am_pm;
};
function Display24HrFormat(date,n) {
	var hours = date.getHours();
	hours = hours < 10 ? "0" + hours : hours;
	var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	return hours + ":" + minutes + ":" + seconds;
};