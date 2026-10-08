// Scroll bilan elementlarni silliq chiqarish
const items = document.querySelectorAll(
  '.section h2, .section .sub, .vc, .pc, .why > div, .rc, .dgrid figure, .card, .circles > div, .map, .dtitle, .news form, .fc > div, .searchlayout > *, .section > .btn, .btn-o'
);
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });

items.forEach(el => {
  const i = [...el.parentElement.children].indexOf(el);
  el.style.transitionDelay = Math.min(i, 5) * 90 + 'ms';
  el.classList.add('reveal');
  io.observe(el);
});
