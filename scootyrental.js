const data=[
    {
        name:"Arsalan",
        parking_slot:4,
        parking_fees:"50Rs/hour"
    },
    {
        name:"Riyaz",
        parking_slot:2,
        parking_fees:"20Rs/hour"
    },
    {
        name:"kareem",
        parking_slot:1,
        parking_fees:"50Rs/hour"
    },
    {
        name:"aliaah",
        parking_slot:3,
        parking_fees:"60Rs/hour"
    },
    {
        name:"Mezban",
        parking_slot:4,
        parking_fees:"40Rs/hour"
    },
    {
        name:"ArsaRoyallan",
        parking_slot:4,
        parking_fees:"50Rs/hour"
    },
    {
        name:"Allen",
        parking_slot:10,
        parking_fees:"35Rs/hour"
    },
    
]
var display=document.querySelector("#outlet");
data.map((elem)=>{
    var div=document.createElement("div");
    var para1=document.createElement("p");
    var para2=document.createElement("p");
    var para3=document.createElement("p");
    para1.innerHTML="Name:"+elem.name;
    para2.innerHTML="Parking slot -"+elem.parking_slot;
    para3.innerHTML="Fees"+elem.parking_fees;
    div.append(para1,para2,para3);
    display.append(div)
})