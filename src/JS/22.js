const au = document.querySelector('.audio');
const cont = document.querySelector('.container')
fetch('https://quran-api.santrikoding.com/api/surah/22')
    .then(response => response.json())
    .then(data => {
      const sur = data.ayat;
      //console.log(data)
      const audio = data.audio;
      au.innerHTML = `<audio controls>
    <source src="${audio}" type="audio/mpeg">
    Browsermu tidak mendukung tag audio, upgrade donk!
  </audio>`;
      for (var i = 0; i < 78; i++) {
        const ayatDiv = document.createElement('div');
        const ayat = sur[i].ar;
        const arti = sur[i].idn;
        const latin = sur[i].tr;
        const no = sur[i].nomor;
            ayatDiv.className = 'surah';
            ayatDiv.innerHTML = `<h2>${ayat}</h2><span>${latin}</span></br><p>${no}.${arti}</p>`;
            cont.appendChild(ayatDiv);
      }
        
    })
    .catch(error => console.error('Error:', error));