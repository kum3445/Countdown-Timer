var target = new Date();

document.querySelector("#button").addEventListener("click",function(){
    var t=document.querySelector("#event").value;
    var x=t.slice(5,7)+'-'+t.slice(8,10)+'-'+t.slice(2,4);
    target=new Date(x);
    var event = document.getElementById("name").value;
    document.querySelector("h1").innerHTML=event;
    setInterval(eval,1000);

})
function eval(){
    const today = new Date();
    const diff=target-today;
    const sec=Math.floor(diff/1000);
    const min=Math.floor((diff/1000)/60);
    const hour=Math.floor(((diff/1000)/60)/60);
    const days=Math.floor((((diff/1000)/60)/60)/24);
    const years=((((diff/1000)/60)/60)/24)/365;
    const months=Math.floor(years*12);
    const h= hour%24;
    const m=min%60;
    const s=sec%60;
    document.querySelector("div .days p").innerHTML=add(days);
    document.querySelector("div .hours p").innerHTML=add(h);
    document.querySelector("div .minutes p").innerHTML=add(m);
    document.querySelector("div .seconds p").innerHTML=add(s);

}

function add(n){
    if (n<=0){
        return "00";
    }
    else if (n<10){
        return "0"+n;
    }
    else{
        return n;
    }
}


