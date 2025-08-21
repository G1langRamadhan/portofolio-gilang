const skillsData = {
  languages: [
    'Go',
    'JavaScript',
    'TypeScript',
    'PHP',
    'SQL',
    'Node.js',
    'Express.js',
    'React.js',
    'Vue.js',
    'Laravel',
    'CodeIgniter',
    'Bootstrap',
    'Tailwind CSS',
    'Fiber',
    'Gin',
    'Echo',
    'Go chi',
    'JQuery',
  ],
  tools: [
    'Git',
    'Docker',
    'Jenkins',
    'Linux',
    'MariaDB',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'RabbitMQ',
    'Apache Kafka',
    'NATS Jetstream',
  ],
  practices: [
    'Clean Architecture',
    'Microservices',
    'REST API',
    'Caching',
    'Distributed Locking',
    'Circuit Breaker Pattern',
    'API Gateway',
    'Design Patterns',
    'Testing',
    'CI/CD',
  ],
};

// Render list + atur tombol mobile muncul hanya jika item > 6
function renderSkills() {
  document.querySelectorAll('[data-skill-box]').forEach((box) => {
    const key = box.getAttribute('data-skill-key');
    const items = skillsData[key] || [];
    const listEl = box.querySelector('[data-list]');
    const btn = box.querySelector('[data-toggle]');
    const fade = box.querySelector('[data-fade]');

    // render <li>
    listEl.innerHTML = items
      .map((t, i) => {
        // sembunyikan item >= 6 di mobile, tampilkan di md ke atas
        const hideMobile = i >= 6 ? 'hidden md:list-item' : '';
        return `<li class="${hideMobile}">${t}</li>`;
      })
      .join('');

    // tombol muncul hanya jika > 6
    if (items.length > 6) {
      btn.classList.remove('hidden');
      btn.classList.add('inline-flex');
      fade?.classList.remove('hidden');
    } else {
      btn.classList.add('hidden');
      btn.classList.remove('inline-flex');
      fade?.classList.add('hidden');
    }

    // state
    let expanded = false;
    btn.onclick = () => {
      expanded = !expanded;
      const lis = listEl.querySelectorAll('li');
      lis.forEach((li, i) => {
        if (i >= 6) {
          if (expanded) {
            li.classList.remove('hidden');
          } else {
            li.classList.add('hidden');
          }
        }
      });
      if (expanded) {
        fade?.classList.add('hidden');
        btn.textContent = 'View less';
      } else {
        if (items.length > 6) fade?.classList.remove('hidden');
        btn.textContent = 'View more';
      }
    };
  });
}

renderSkills();