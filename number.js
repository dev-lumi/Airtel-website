function checknumber(){
    let number=document.getElementById("inputmobile").value;
    let numString=number.toString();
    if (numString.length==10){  
       alert("Please select plan accordingly") 
        return false;  
    }else{
        alert("Please Enter a valid mobile number") 
    }
}