var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
function clockStart24(){
    showTimeEl          = document.querySelector("#container24 .jam");
    showDateEl          = document.querySelector("#container24 .hari-tanggal");
    let today           = new Date();
    let h               = today.getHours();
    let m               = today.getMinutes();
    let s               = today.getSeconds();
    let day             = days[today.getDay()];
    let dd              = today.getDate();
    let mm              = months[today.getMonth()];
    let yy              = today.getFullYear();
    //cek angka satu digit
    h = checkNumber(h);
    m = checkNumber(m);
    s = checkNumber(s);
    //cara display tanggal dan jam
    showDateEl.innerHTML    = day + ", " + dd + " " + mm + " " + yy;
    showTimeEl.innerHTML    = h + " : " + m + " : " + s;
    setTimeout(clockStart24, 1000);
}

//Cek angka satu digit
function checkNumber(i){
    if (i<10){
        i = "0" + i;
    }
    return i;
}


clockStart24();

function nightOrDay(){
    let backgroundTheme = document.getElementById("backgroundTheme")
    let headingToDoList = document.getElementById("headingToDoList")
    let today = new Date()
    let h = today.getHours()

    if( h>=5 && h<=17 ){
        backgroundTheme.style.backgroundImage = "url('./images/moroccan-flower.png')"
        headingToDoList.style.color = "black"
    }

    console.log(h)
}

nightOrDay()

