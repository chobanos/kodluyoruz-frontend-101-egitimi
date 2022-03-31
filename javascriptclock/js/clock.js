let firstName = prompt("Adınızı giriniz:")

let info = document.querySelector("#myName")
info.innerHTML = `${firstName}`

//gunumuz adında değişkeni günleri oluşturmak için atama yapıtoruz
let gunumuz = new Date().getDay()

//gunumuz değişkeninden gelen veriler 0 ile 6 arasındadır ve 0 pazardır
// stringe cevirmek için switch case yapısını kullandım
switch(gunumuz){
    case 0:
    gunumuz ="Pazar"
    break;
    case 1:
    gunumuz ="Pazartesi"
    break;
    case 2:
    gunumuz ="Salı"
    break;
    case 3:
    gunumuz ="Çarşamba"
    break;
    case 4:
    gunumuz ="Perşembe"
    break;
    case 5:
    gunumuz ="Cuma"
    break;
    case 6:
    gunumuz ="Cumartesi"
    break;
}


//daha sonra time adında bir function oluşturarak dijital saatimizi yapıyoruz.
function Time() {
    //  Date sınıfından bir obje oluşturyoruz.
    var date = new Date();
    // saat kısmını alıyoruz
    var hour = date.getHours();
    // dakika kısmını alıyoruz
    var minute = date.getMinutes();
    // saniye kısmını alıyoruz
    var second = date.getSeconds();

    // AM / PM yapmak için bir period oluşturucaz
    var period = "";
    // Geçerli saate göre AM / PM atama
    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }
    // // isteğe bağlı 12 saatlik dönüşüm
    // // Saati 12 saatlik formatta dönüştürme
    // if (hour == 0) {
    // hour = 12;
    // } else {
    // if (hour > 12) {
    // hour = hour - 12;
    // }
    // }
    // Saat, dakika ve saniyenin güncellenmesi
    // 10'dan küçüklerse
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    // idsi myClock olan dive saat dakika saniye veri günü ekleme 2 yöntemlede olur.
    document.getElementById("myClock").innerText = hour + " : " + minute + " : " + second + " " + gunumuz;
    // Zamanlayıcıyı 1 saniyeye ayarlayın (1000 ms)
    setTimeout(Time, 1000);
   }
    // 10'dan küçükse zaman öğelerini güncelleme işlevi
    // 10'dan küçükse zaman öğelerinin başına 0 ekleyin
   function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
   }
   Time();


   