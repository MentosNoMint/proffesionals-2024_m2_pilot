let current = 'mainPage'


function ChangeSreen(open) {
   
    console.log(open)
    document.getElementById(open).style.display = 'block';
    document.getElementById(current).style.display = 'none';
    current = open
    if(open == 'loginPage'){
        document.getElementById(open).style.display = 'flex';
    }else if (open == 'register'){
        document.getElementById(open).style.display = 'flex';
    }
    
}