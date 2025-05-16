// This is a simple OTP generator and verification script
// It generates a 6-digit OTP and verifies it against user input
    let otp = "";
function myFunction(){
    for (let i = 0; i<6; i++)
    {
        otp+=Math.floor(Math.random()*9);
    }
    const otpvalue = document.getElementById('result').innerHTML = otp;
    document.getElementById('otpvalid').style.display = "block";

    var counter = 30;
var value1 = document.getElementById('timer');
var value2 = document.getElementById('time');
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0) {
     		clearInterval(interval);
      	value1.innerHTML="<h3>please reclick otp button</h3>";  
        return;
    }else{
    	value2.innerHTML =counter;
      console.log( counter);
    }
}, 1000);
    
}

function result()
    {
       const results =  document.getElementById('otp').value;
       const result1 = document.getElementById('result1');
       const result2 = document.getElementById('result2');
        if(results == otp)
        {
            result1.innerHTML = "OTP is correct";
            result1.style.color = "green";
            result2.style.display = "block";
            
           
        }
        else
        {
            result1.innerHTML = "OTP is incorrect";
            result1.style.color = "red";
        }
    }
    var count = 0
    var time1 = document.getElementById('time1');
    var time2 = document.getElementById('time2');
    var interval1 =setInterval(function(){
        count++;

        if(count>60){
            clearInterval(interval1);
            time1.innerHTML="completed please stop"
        }
        else
        {
            time2.innerHTML = count;
        }
    },1000)



