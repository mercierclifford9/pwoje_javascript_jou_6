
let x;
let  som=0;
x=prompt("Antre kantite not wap gen pou kalkile moyenne lan \n");
    while(x<1 || x>50 || isNaN(x)){
        x=parseInt(prompt("SVP Antre on kantite valid \n"))
    }
    for(i=0; i<x; i++){
        y=parseFloat(prompt("Antre not nimero " + (i+1)) +" an");
        while(y<0 || y>100 || isNaN(y)){
            y=parseFloat(prompt("Enkorek, svp reantre not nimero " + (i+1) + " an"));
        }
        som = som + y;
    }
    moy=som/x;
    console.log("Mwayenn not sa yo se "+ moy.toFixed(2));

if(moy>=90){
    console.log("A");
}else if(moy>=80){
    console.log("B");
}else if(moy>=70){
    console.log("C");
}else if(moy>=60){
    console.log("D");
}else {
    console.log("F");
}