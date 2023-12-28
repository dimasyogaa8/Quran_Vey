const cont = document.querySelector('.container')
fetch('https://quran-api.santrikoding.com/api/surah/2')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const sur = data.ayat;
      console.log(sur);
      for (var i = 0; i < 286; i++) {
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