// Mobil menyu
document.getElementById('burger').addEventListener('click', () =>
  document.getElementById('menu').classList.toggle('open'));

// 9 ta vacanza kartasi (null = rasm hali yo'q)
const vac = [
  ['cat1','Surf Camp'], ['cat4','Gruppi'], ['cat3','Surf Lodge'],
  [null,'Surf Resort','🏝️'], [null,'Boat Trip','⛵'], [null,'Junior','🏄'],
  [null,'Surf & Yoga','🧘'], [null,'Adventures','🚙'], ['cat2','Family Trip']
];
document.getElementById('vac').innerHTML = vac.map(v => `
  <article class="vc">
    <div class="vi">${v[0] ? `<img src="images/${v[0]}.png" alt="${v[1]}">` : `<span>${v[2]}</span>`}</div>
    <h3>${v[1]}</h3>
    <ul><li>Da 3 a 10 giorni</li><li>Aria condizionata</li></ul>
  </article>`).join('');

// Mashhur paketlar
document.getElementById('packs').innerHTML = [1, 8, 7, 6, 5, 4].map(n => `
  <article class="pc">
    <div class="pi" style="background-image:url(images/pack${n}.png)"><span class="badge">Surf Camp</span></div>
    <div class="pb"><p class="loc">Africa, Marocco</p><h3>Jeffrey’s Bay Surf Camp in Hotel</h3></div>
  </article>`).join('');

// Destinazioni galereyasi (2-qiymat: yozuv rasmning o'zida bormi)
document.getElementById('dgrid').innerHTML = [
  ['gal1',1], ['pack3',0], ['pack2',0], ['gal4',1], ['gal3',1], ['gal2',1]
].map(d => `
  <figure style="background-image:url(images/${d[0]}.png)">
    ${d[1] ? '' : '<figcaption><b>Dakhla</b><br>Marocco, Africa</figcaption>'}
  </figure>`).join('');

// Sharhlar
document.getElementById('rev').innerHTML = [
  ['av2','Joe Blo'], ['av1','Jane Blo'], ['av3','Joe Blo']
].map(r => `
  <article class="rc">
    <img src="images/${r[0]}.png" alt="${r[1]}">
    <h3>${r[1]}</h3><p class="vis">Visited: France</p><hr>
    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar lorem justo, id faucibus mi.”</p>
  </article>`).join('');

// Newsletter
document.getElementById('nlForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('nlMsg').textContent = 'Grazie! Iscrizione completata.';
  e.target.reset();
});
