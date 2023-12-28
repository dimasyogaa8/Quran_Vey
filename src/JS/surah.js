
var project = [
   {
      id: 0,
      nama: 'Al-fatihah',
      ayat: '7 ayat',
      tempat: 'makkiyah',
      link: '/Module/1.html'
   },
   {
     id: 1,
      nama: 'Al-Baqarah',
      ayat: '286 ayat',
      tempat: 'Madaniyah',
   },
   {
     id: 2,
      nama: 'Ali Imran',
      ayat: '200 ayat',
      tempat: 'Madaniyah ',
   },
   {
     id: 3,
     nama: 'Al-Nisa',
     ayat: '176 ayat',
     tempat: 'Madaniyah ',
   },
   {
     id: 4,
     nama: 'Al-Maidah',
     ayat: '120 ayat',
     tempat: 'Madaniyah',
   },
   {
     id: 5,
     nama: "Al-An'am",
     ayat: '165 ayat',
     tempat: 'Makkiyah',
   },
   {
     id: 6,
     nama: "Al-A'raf",
     ayat: '206 ayat',
     tempat: 'Makkiyah',
   },
   {
     id: 7,
     nama: 'Al-Anfal',
     ayat: '75 ayat',
     tempat: 'Madaniyah ',
   },
   {
     id: 8,
     nama: 'At-Taubah',
     ayat: '129 ayat',
     tempat: 'Madaniyah',
   },
   {
     id: 9,
     nama: 'Yunus',
     ayat: '109 ayat',
     tempat: 'Makkiyah',
   },
   {
      id: 10,
      nama: '',
      ayat: '',
      tempat: '',
      link: ''
   },
   {
     id: 11,
     nama: '',
     ayat: '',
     tempat: '',
     link: ''
   },
   {
      id: 12,
      nama: '',
      ayat: '',
      tempat: '',
      link: ''
   },
   {
     id: 13,
     nama: '',
     ayat: '',
     tempat: '',
     link: ''
   },
   {
     id: 14,
     nama: '',
     ayat: '',
     tempat: '',
     link: ''
   },
   {
     id: 15,
     nama: '',
     ayat: '',
     tempat: '',
     link: ''
   },
   {
     id: 16,
     nama: '',
     ayat: '',
     tempat: '',
     link: ''
   },
   {
     id: 17,
     nama: '',
     ayat: '',
     tempat: '',
     link: ''
   },
   {
     id: 18,
     nama: '',
     ayat: '',
     tempat: '',
     link: ''
   },
   {
     id: 19,
     nama: '',
     ayat: '',
     tempat: '',
     link: ''
   },
   {
     id: 20,
     nama: '',
     ayat: '',
     tempat: '',
     link: ''
   },
   {
     id: 21,
     nama: '',
     ayat: '',
     tempat: '',
     link: ''
   },

   ];
   //meload arry ke dalam sebuah item
   const katagori = [...new Set(project.map((item => {
      return item;
   })))];
   let i=0;
//load data produk ke sistem
const page = document.querySelector('.content-box');
page.innerHTML = katagori.map((item => {
   var {nama, ayat , tempat, link} = item;
   
   return(
      `
       <div class="card">
      <div class="card-nama"><h1>${nama}</h1></div>
      <div class="card-subtext"><p>ayat: ${ayat}</p></div>
      <div class="card-subtext"><p>${tempat}</p></div>
      <a href = "${link}">Read</a>
    </div>
      `
      )
})).join('')
