// soal 1
let angka1 = 5;
let angka2 = 3;

if (angka2 > angka1) {
    console.log(true);
} else if (angka1 === angka2) {
    console.log(-1);
} else {
    console.log(false);
}

// soal 2
let nama = "saya";
let nilai = 70;
let absen = 7;

if (nilai > 70 && absen < 5) {
    console.log(nama + " lulus");
} else {
    console.log(nama + " tidak lulus");
}

// soal 3 
let detik = 60;
let menit = 0;

function formattingTime() {
    if (detik >= 60) {
        detik = detik % 60;
        menit = detik / 60;
    }
    console.log(menit + ":" + detik);
}

// soal 4
let value = 0;
function gatcha() {
    value = Math.floor(Math.random() * 5) + 1;
    return value;
}

switch (gatcha()) {
    case 1:
        console.log("coba lagi ya");
        break;
    case 2:
        console.log("selamat kamu mendapatkan kupon sebanyak 5");
        break;
    case 3:
        console.log("selamat kamu mendapatkan kupon sebanyak 15");
        break;
    case 4:
        console.log("selamat kamu mendapatkan kupon sebanyak 50");
        break;
    case 5:
        console.log("WOW, kamu menang jackpot! Selamat!!");
        break;
}
