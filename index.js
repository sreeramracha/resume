ctr=0

function myFunction(x){
    // var link = document.createElement('link'); 
    // link.rel = 'stylesheet'; 
    // link.type = 'text/css';
    // if (ctr%2===0){
    //     link.href = './css/style-dark.css'; 
    //     document.getElementsByTagName('HEAD')[0].appendChild(link); 
    //     // document.querySelector('.whole').classList.toggle('transition');
    // }
    // else{
    //     link.href= './css/style-light.css'
    //     document.getElementsByTagName('HEAD')[0].appendChild(link); 
    //     // document.querySelector('.whole').classList.toggle('transition');
    // }
    document.body.classList.toggle("dark-theme");
    x.classList.toggle("fa-sun");    
    ctr+=1;
};

