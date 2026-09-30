const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('#navMenu a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.course-card');
filters.forEach(filter => {
  filter.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('active'));
    filter.classList.add('active');
    const value = filter.dataset.filter;
    cards.forEach(card => {
      const show = value === 'all' || card.dataset.category === value;
      card.style.display = show ? 'flex' : 'none';
    });
  });
});

const courseSelect = document.getElementById('course');
document.querySelectorAll('[data-course]').forEach(link => {
  link.addEventListener('click', () => {
    const course = link.dataset.course;
    if (courseSelect) courseSelect.value = course;
  });
});

document.querySelectorAll('.accordion details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    const icon = detail.querySelector('summary span');
    if (icon) icon.textContent = detail.open ? '−' : '+';
  });
});

const form = document.getElementById('leadForm');
const toast = document.getElementById('toast');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  toast.classList.add('show');
  form.reset();
  setTimeout(() => toast.classList.remove('show'), 4000);
});
