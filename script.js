
function getage(){
    let da1=document.getElementById("date").value;
    let mo1=document.getElementById("month").value;
    let ye1=document.getElementById("year").value;

    let date=new Date();
    let da2=date.getDate();
    let mo2=1+date.getMonth();
    let ye2=date.getFullYear();

    let month=[31,28,31,30,31,30,31,31,30,31,30,31]

    if(da1>da2){
        da2=da2+month[mo2-1];
        mo2=mo2-1;
    }
    if(mo1>mo2){
        mo2=mo2+12;
        ye2=ye2-1
    }
    let date1=da2-da1;
    let month1=mo2-mo1;
    let year=ye2-ye1;
    document.getElementById("age").innerHTML=
    `Your Age is ${year} Years ${month1} Months ${date1} Days`
}

