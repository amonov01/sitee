// Mobil menyu
document.getElementById('burger').addEventListener('click', () =>
  document.getElementById('menu').classList.toggle('open'));

// Newsletter
document.getElementById('nlForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('nlMsg').textContent = 'Grazie! Iscrizione completata.';
  e.target.reset();
});

// Ma'lumotlar
const spots = [
  ['Ericeira, Portogallo', 'Europa', '5 notti', '€540', '#4fb3bf,#0E5A6B'],
  ['Sardegna, Italia', 'Europa', '4 notti', '€390', '#7cc6d4,#0E5A6B'],
  ['Taghazout, Marocco', 'Africa', '7 notti', '€720', '#ffd38a,#e0603a'],
  ['Cape Town, Sudafrica', 'Africa', '8 notti', '€1.150', '#f7a35c,#c2412d'],
  ['Dakhla, Marocco', 'Africa', '6 notti', '€680', '#ffcf6b,#c2412d'],
  ['Santa Cruz, Capo Verde', 'Africa', '7 notti', '€760', '#4fb3bf,#0b3b47'],
  ['Bali, Indonesia', 'Asia', '7 notti', '€890', '#f7a35c,#c2412d'],
  ['Weligama, Sri Lanka', 'Asia', '10 notti', '€1.050', '#2a8aa0,#0b3b47'],
  ['Tamarindo, Costa Rica', 'America', '7 notti', '€980', '#ffcf6b,#c2412d'],
  ['Byron Bay, Australia', 'Oceania', '9 notti', '€1.320', '#7cc6d4,#e0603a']
];

const box = document.getElementById('results');
const page = document.body.dataset.page;

function draw(list) {
  let n = 0;
  box.innerHTML = list.map(p => { n++; return `
    <article class="card">
      <div class="img" style="background-image:url(images/pack${((n - 1) % 8) + 1}.png)"></div>
      <div class="body"><h3>${p[0]}</h3><p>${p[2]}</p><p class="price">da ${p[3]}</p></div>
    </article>`; }).join('');
}

if (page === 'dest') {
  draw(spots.filter(p => p[1] === 'Africa'));
} else {
  const q = document.getElementById('q');
  const checks = [...document.querySelectorAll('.filters input')];
  const count = document.getElementById('count');
  const update = () => {
    const text = q.value.trim().toLowerCase();
    const regions = checks.filter(c => c.checked).map(c => c.value);
    const list = spots.filter(p =>
      p[0].toLowerCase().includes(text) && (!regions.length || regions.includes(p[1])));
    count.textContent = list.length + ' risultati';
    draw(list);
  };
  q.addEventListener('input', update);
  checks.forEach(c => c.addEventListener('change', update));
  update();
}
