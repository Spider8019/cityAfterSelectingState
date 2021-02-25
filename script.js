var array=[{state:"Uttar Pradesh",
            city:["Agra","Faizabad","Ayodhya"]},{state:"Madhya Pradesh",
            city:["Ujjain","Indore","Bhopal"]}]


for(var i=0;i<array.length;i++){
   var state=document.createElement("option")
   state.innerHTML=array[i].state
   state.value=array[i].state
   document.querySelector(".state").append(state)
}
for(var i=0;i<array[0].city.length;i++){
        var state=document.createElement("option")
        state.innerHTML=array[0].city[i]
        state.value=array[0].city[i]
        document.querySelector(".city").append(state)
}
function setCity(state){
    var cities=document.querySelector(".city");
    while(cities.firstChild){
        cities.removeChild(cities.firstChild)
    }   
    var x=0;
    for(var i=0;i<array.length;i++){
        if(array[i].state===state)
        {x=i;break;}
    }
    for(var i=0;i<array[x].city.length;i++){
        var state=document.createElement("option")
        state.innerHTML=array[x].city[i]
        state.value=array[x].city[i]
        document.querySelector(".city").append(state)
    }

}