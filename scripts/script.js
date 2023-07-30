const time = () => {
    let d = new Date();
    indian_clock.innerHTML = d.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata', hour: "2-digit", minute: "2-digit", second: "2-digit"
    })
    us_clock.innerHTML = d.toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles', hour: "2-digit", minute: "2-digit", second: "2-digit"
    })
    china_clock.innerHTML = d.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Shanghai', hour: "2-digit", minute: "2-digit", second: "2-digit"
    })

}

const change_time=(t_zone)=>{
    let d = new Date();
    let element=document.getElementById("input_country_clock");
    element.innerHTML = d.toLocaleTimeString('en-US', {
        timeZone: t_zone, hour: "2-digit", minute: "2-digit", second: "2-digit"
    })
}


setInterval(() => {
    let element=document.getElementsByClassName("selected")[0].textContent.split("/");
    document.getElementById("input_country_name").innerHTML=element[element.length -1] ;
    
}, 200);

setInterval(time, 1000);

setInterval(() => {
    change_time(document.getElementsByClassName("selected")[0].textContent);
}, 1000);

//To get timezone
// Intl.DateTimeFormat().resolvedOptions().timeZone
