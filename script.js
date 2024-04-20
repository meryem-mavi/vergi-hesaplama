function yillar(){
    let tarih = new Date();
    let yil = tarih.getFullYear();

    for(let i= yil;i>=1950; i--){
        let secenek = document.createElement('option');
        aracModeli.options.add(secenek);
        secenek.value = i;
        secenek.text = i;
    }
}

function vergiHesapla() {
    let aracTipi = document.getElementById('aracTipi');
    let motorGucu = document.getElementsByName('motorGucu');
    let aracModeli = document.getElementById('aracModeli');
    let sonuc = document.getElementById('sonuc');
    let odenecekVergi = 0;

    // Araç Tipi Seçimi
    for (let i = 0; i < aracTipi.length; i++) {

        if (aracTipi.options[i].selected) {
            secilenAracTipi = aracTipi.options[i].value;
            if (secilenAracTipi == "motosiklet") {
                odenecekVergi += 100;
            } else if (secilenAracTipi == "otomobil") {
                odenecekVergi += 200;
            }
            break;
        }
    }
    // Motor Gücü Seçimi
    for (let i = 0; i < motorGucu.length; i++) {

        if (motorGucu[i].checked) {
            secilenMotorGucu = motorGucu[i].value;
            if (secilenMotorGucu == "1000cc-1600cc") {
                odenecekVergi += 50;
            } else if(secilenMotorGucu == "1601cc-2000cc") {
                odenecekVergi += 100;
            } else if(secilenMotorGucu == "2001cc") {
                odenecekVergi += 150;
            }
            break;
        }
    }
    // Araç Yılı Seçimi
    secilenAracModeli = aracModeli.value;
    if(secilenAracModeli <= 2005){
        odenecekVergi -= 25;
    }

    sonuc.innerHTML = `Ödenecek vergi tutarı: ${odenecekVergi}`;
}