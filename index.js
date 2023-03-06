setInterval(() => {
    let a=new Date();
    let hour=a.getHours();
    let minute=a.getMinutes();
    let second=a.getSeconds();
    let hourrotate= 30*hour + minute/2;
    let minuterotate= 6*minute;
    let secondrotate= 6*second;

    let hours=document.getElementById("hour");
    let minutes=document.getElementById("minute");
    let seconds=document.getElementById("second");

    hours.style.transform=`rotate(${hourrotate}deg)`;
    minutes.style.transform=`rotate(${minuterotate}deg)`;
    seconds.style.transform=`rotate(${secondrotate}deg)`;
},1000);
