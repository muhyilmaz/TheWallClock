setInterval(GetCurrentTime, 500);



function GetCurrentTime() {
    let time = new Date();
    document.getElementById("CurrentDateTime").innerText = time.toLocaleTimeString("tr");
}