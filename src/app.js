var project = [
   {
      id: 0,
      nama: 'Al-fatihah',
      ayat: '7 ayat',
      tempat: 'makkiyah',
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

   ];
   //meload arry ke dalam sebuah item
   const katagori = [...new Set(project.map((item => {
      return item;
   })))];
   let i=0;
//load data produk ke sistem
const page = document.querySelector('.content-box');
page.innerHTML = katagori.map((item => {
   var {nama, ayat , tempat} = item;
   
   return(
      `
       <div class="card">
      <div class="card-nama"><h1>${nama}</h1></div>
      <div class="card-subtext"><p>ayat: ${ayat}</p></div>
      <div class="card-subtext"><p>${tempat}</p></div>
    </div>
      `
      )
})).join('')