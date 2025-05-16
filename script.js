// This is a simple OTP generator and verification script
// It generates a 6-digit OTP and verifies it against user input
    let otp = "123456";
function myFunction(){
    for (let i = 0; i<6; i++)
    {
        otp+=Math.floor(Math.random()*9);
    }
    document.getElementById('result').innerHTML = otp;
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