const pins = [
  ...[1,2,3,4,5].map(i => ({k:'routine', src:`assets/img/routine-pin${i}.jpg`})),
  ...[1,2,3,4,5].map(i => ({k:'planner', src:`assets/img/planner-pin${i}.jpg`})),
  ...[1,2,3,4,5].map(i => ({k:'habit',   src:`assets/img/habit-pin${i}.jpg`})),
  ...[1,2,3,4].map(i   => ({k:'savings', src:`assets/img/savings-pin${i}.jpg`})),
];
const names = {routine:'Easy Routine Builder', planner:'Brain Friendly Planner', habit:'Gentle Habit Tracker', savings:'Savings Challenge Kit'};
const grid = document.getElementById('grid');

function render(f){
  grid.innerHTML = '';
  pins.filter(p => f === 'all' || p.k === f).forEach(p => {
    const img = document.createElement('img');
    img.src = p.src; img.loading = 'lazy'; img.alt = names[p.k] + ' preview';
    grid.appendChild(img);
  });
}
render('all');

document.querySelectorAll('.filters button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.filters button').forEach(x => x.classList.remove('on'));
  b.classList.add('on'); render(b.dataset.f);
}));

const lb = document.getElementById('lb'), lbImg = lb.querySelector('img');
document.addEventListener('click', e => {
  const t = e.target;
  if (t.matches('.grid img, .prev')) { lbImg.src = t.src; lbImg.alt = t.alt; lb.hidden = false; }
  else if (t === lb || t.closest('.lb button')) lb.hidden = true;
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.hidden = true; });
document.getElementById('yr').textContent = new Date().getFullYear();
