let name1 = prompt("Lütfen Adınızı Giriniz:");
let text1 = document.querySelector("#info")

function tarihSaat() {
    var date = new Date().toLocaleString();
    document.getElementById("myClock").innerHTML = date;
    }
    setInterval(tarihSaat, 1000); 

    document.getElementById("myName").innerHTML = `${name1}`;