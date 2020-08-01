// Validating Name 
function validateName(input_id,error_id,length1,length2,msg){
    const x = document.getElementById(input_id).value;
    const y = document.getElementById(error_id);
    const pattern = /^[a-zA-Z]+$/
    if(x!==""){
        if(pattern.test(x) ){
            if(x.length < length1 || x.length > length2){
                y.innerHTML = msg+` should be between ${length1} and ${length2} characters.`;
                return false;
            }
            else{
                y.innerHTML = '';
                return true;
            }
        }
        else{
            y.innerHTML = 'Should contain only alphabets.'
            return false;
        }
    }
    else{
        y.innerHTML = "Please Enter Your "+msg;
        return false;
    }
}

// Validating email
function validateEmail(input_id,error_id){
    const x = document.getElementById(input_id).value;
    const y = document.getElementById(error_id);
    const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;
    if(x!==""){
        if(pattern.test(x)){
            y.innerHTML = '';
            return true;
        }
        else{
            y.innerHTML = 'Enter valid email id.'
            return false;
        }
    }
    else{
        y.innerHTML = "Please Enter Your Email Id";
        return false;
    }
}