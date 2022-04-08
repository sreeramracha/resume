ctr=0

function myFunction(x){
    var link = document.createElement('link'); 
    link.rel = 'stylesheet'; 
    link.type = 'text/css';
    if (ctr%2===0){
        link.href = './css/styles-dark.css'; 
        document.getElementsByTagName('HEAD')[0].appendChild(link); 
    }
    else{
        link.href= './css/styles-light.css'
        document.getElementsByTagName('HEAD')[0].appendChild(link); 
    }
    x.classList.toggle("fa-sun");
    ctr+=1;
};

