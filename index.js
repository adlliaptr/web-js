console.log("Hello world");
// alert('Halo semua');

//Number, untuk tipe variable yang akan menampung angka
console.log(1);
const angka = 10;
let count = 10;
count++;
console.log(angka+1);
console.log(count);
count++;
console.log(count);
count--;
console.log(count);

//String, untuk tipe variable yang akan menampung huruf baik 1 huruf maupun multi huruf
let nama = 'Zaki Fauzan';
console.log('nama saya adalah',nama);

//Boolean, untuk tipe variable yang akan menampung true atau false
console.log(angka == '10')
console.log(angka === '10')

//Array
const mahasiswa = ['Arsel', 'Novil', 'Rezky', 'Zaki'];
let namaMahasiswa = new Array('Zaki', 'Arsel', 'Novil', 'Rezky');
let namaMahasiswi = new Array(3);
let mhsNIM = [28, 29, 30];

console.log(mahasiswa);
console.log(namaMahasiswa);
console.log(namaMahasiswi);
console.log(mhsNIM);

namaMahasiswi[0] = 'Nurul';
namaMahasiswa.push('Novil');
console.log(namaMahasiswi);

//Variable
//Var
var jadwal = 'Pagi';
console.log(jadwal);
var jadwal = 'Sore';
console.log(jadwal);
jadwal = 'Subuh';
console.log(jadwal);

//const
const namaDosen = 'Putut'; 
console.log(namaDosen);
//Tidak bisa di deklarasi ulang
// const namaDosen = 'labib';
// namaDosen = 'labib';
// console.log(namaDosen);

//let
let mataKuliah = 'Pemograman Web';
console.log(mataKuliah);
mataKuliah = 'Analisis Design Perangkat Lunak';
console.log(mataKuliah);

//Kondisi
//if else
const nilaiMahasiswa = new Array(80,82,85);
console.log(namaMahasiswa[0], 'mendapatkan nilai', nilaiMahasiswa[0])
if(nilaiMahasiswa[0]>=80){
    console.log(namaMahasiswa[0], 'lulus')
}else{
    console.log(namaMahasiswa[0], 'tidak lulus')
}
//swicth
const golDarah = [
    {
        nama:'Zaki',
        gol:'B'
    },
    {
        nama:'Arsel',
        gol:'A'
    }
]
switch (golDarah[0].gol){
    case 'A':
        console.log('Golongan darah A');
        break;
    case 'B':
        console.log('Golongan darah B');
        break;
    case 'AB':
        console.log('Golongan darah AB');
        break;
}

//Perulangan
for (let i =0; i<mahasiswa.length;i++){
    console.log('Nama mahasiswa ke',i+1,'=',mahasiswa[i]);
};
mahasiswa.forEach(nama => {
    console.log('Nama mahasiswa = ',nama);
});
mahasiswa.forEach(function(nama, index ){
    console.log('Nama mahasiswa ke ',index+1,'=',nama);
});

const dataMhs = [
    {
        nama:'Zaki',
        NIM:28
    },
    {
        nama:'Arsel',
        NIM:27
    }
]

//Function
dataMhs.map((item)=>(
    Kuliah(item.nama,item.NIM)
))
function Kuliah(nama, nim){
    console.log(`${nama} memiliki NIM ${nim}`)
}
function User(pertanyaan, email){
    alert('User dengan Email '+email+' memiliki pertanyaan '+pertanyaan)
}


//DOM
const ambilNama = document.getElementById('Nama');
console.log(ambilNama);

ambilNama.innerHTML= 'saya Arsel';

const setData = document.getElementById('data');
const setData2 = document.getElementById('data-2');
setData.innerHTML=mahasiswa[0];
setData2.innerHTML='<h1>'+mahasiswa[1]+'</h1>';

const btn1 = document.getElementById('btn-mk')
const btn2 = document.getElementById('btn-ad')
const btn3 = document.getElementById('btn-tc')

const KI = document.getElementById('KI');
const Adopsi = document.getElementById('Adopsi');
const Tecno = document.getElementById('Tecno');
console.log(KI.innerHTML)

//Event
btn1.addEventListener('click' ,function(event){
    event.preventDefault()
    alert('Ini Matkul '+ KI.innerHTML)
})
btn2.addEventListener('click' ,function(event){
    event.preventDefault()
    alert('Ini Matkul '+Adopsi.innerHTML)
})
btn3.addEventListener('click' ,function(event){
    event.preventDefault()
    alert('Ini Matkul '+Tecno.innerHTML)
})

const formPertanyaan = document.getElementById('formPertanyaan');
formPertanyaan.addEventListener('submit', function(event){
    event.preventDefault()
    const Email = document.getElementById('email');
    const emailValue = Email.value;
    const Pertanyaan = document.getElementById('pertanyaan');
    const pertanyaanValue = Pertanyaan.value;

    console.log(emailValue);
    console.log(pertanyaanValue);
    // alert('Pertanyaan '+ pertanyaanValue +' berhasil masuk, silakan menunggu jawaban...')

    User(pertanyaanValue,emailValue);
    localStorage.setItem('emailUser',emailValue);
    const emailUser = localStorage.getItem('emailUser');
    console.log('Email = ',emailUser);
})

//Style
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.remove("bg-dark");
        navbar.classList.remove("navbar-dark");
        navbar.classList.add("navbar-light");
        navbar.classList.add("bg-light");
    } else {
        navbar.classList.remove("navbar-light");
        navbar.classList.remove("bg-light");
        navbar.classList.add("bg-dark");
        navbar.classList.add("navbar-dark");
    }
  }