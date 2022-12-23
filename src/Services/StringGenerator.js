export const generateString = (params)=>{

    const symbols = "0123456789QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm!@#$%^&*_-+=?><:;~"
    
    var passLength = 0;
    var password = "";
    while(passLength < params.length)
    {
        password += symbols.charAt(Math.random()*80)
        passLength++;
    }
    // if(!params.isDigit)
    // {
    //     for(let i = 0 ; i <password.length ; i++)
    //     {
    //         if(password.charAt())
    //     }
    // }
    return password;

}