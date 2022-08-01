const prcnt=document.getElementById("percent");
const bg=document.getElementById("bg");
var load=0;


let int=setInterval(inc,10);

function inc(){
    load++;
    if (load>99){
        clearInterval(int);
    }
    prcnt.innerText=`${load}%`
    bg.style.filter=`blur(${30-load*3/10}px`;
}
