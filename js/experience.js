const experienceData = [
  {
    role: 'Backend Engineer Mentor',
    company: 'Go Escape',
    workMode: 'Remote',
    start: 'Mar 2025',
    end: 'present',
    bullets: [
      'Design and develop an application development curriculum based on microservice architecture using Golang, following a sprint-based approach.',
      'Teach mentees the fundamentals of Golang programming, integration of third-party services, and implementation of inter-service communication in a scalable and efficient microservice environment.',
      'Led 2 batches, mentoring 9 mentees in total.'
    ],
    techStack: ['Golang', 'PostgreSQL', 'Kafka', 'Redis']
  },
  {
    role: 'Web Development Tutor',
    company: 'Superprof.co.id',
    workMode: 'Remote',
    start: 'Oct 2021',
    end: 'present',
    bullets: [
      'Teach students programming fundamentals and guide them in applying their knowledge to develop websites.',
      'Have mentored over 50 students in private one-on-one sessions, helping them build a solid foundation in web development.'
    ],
    techStack: ['PHP', 'Go', 'JavaScript', 'SQL', 'Laravel', 'React.js', 'JQuery']
  },
  {
    role: 'Backend Engineer',
    company: 'Exepart Electronics Inc.',
    workMode: 'Remote',
    location: 'British Columbia',
    start: 'Sep 2024',
    end: 'Mar 2025',
    description:
      'Worked as a backend engineer at Exepart Electronics Inc., a company under the same management as Venatronics LLC, specializing in providing effective solutions in the trade of active and passive electronic components. I contributed to enhancing the reliability and availability of Exepart.com to ensure that clients outside of America and Europe, particularly in the Chinese market, received the same level of service. I also developed a service listing platform that facilitated connections and empowered users to engage in meaningful exchanges beyond just transactions. It strove to be a supportive community where newcomers could find resources, build connections, and feel at home in Canada.',
    techStack: ['Golang', 'PostgreSQL', 'NATS', 'Jenkins', 'Firebase Cloud Messaging']
  },
  {
    role: 'Backend Engineer Mentor',
    company: 'After Office',
    workMode: 'Remote',
    location: 'Jakarta',
    start: 'May 2024',
    end: 'Mar 2025',
    bullets: [
      'Designed and developed an application development curriculum based on microservice architecture using Golang, with a sprint-based approach.',
      'Mentored over 100 mentees across 3 batches.',
      'teaching the fundamentals of Golang programming, integration of third-party services, and implementation of inter-service communication in a scalable and efficient microservice environment, covering advanced concepts such as circuit breakers, API gateways, caching, and distributed locking.'
    ],
    techStack: ['Golang', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    role: 'Backend Engineer',
    company: 'Venatronics LLC',
    workMode: 'Remote',
    location: 'California',
    start: 'Mar 2024',
    end: 'Aug 2024',
    description:
      'Deals with wholesale electronic components owned by the company, creating a reliable parts search application for hundreds of thousands of existing parts in seconds and helping the company monitor potential client searches. This application also facilitates prospective Venatronics clients to inquire about specific components they are looking for. Developing a second-hand listing platform that focuses on facilitating connections and empowering users to engage in meaningful exchanges beyond just transactions. The platform aims to be more than just a marketplace; it strives to be a supportive community where newcomers can find resources, make connections, and feel at home in Canada.',
    techStack: ['Golang', 'PostgreSQL', 'NATS', 'Jenkins', 'Firebase Cloud Messaging']
  },
  {
    role: 'Backend Developer',
    company: 'PT Solusi Konvergen Indonesia',
    workMode: 'Hybrid',
    location: 'Jakarta',
    start: 'Feb 2023',
    end: 'Mar 2024',
    description:
      'PT. Solusi Konvergen Indonesia employed me as a contract worker and referred me to PT. Telkom Indonesia as a backend developer.',
    bullets: [
      'Conducted research and experimentation to fully understand the DBT (Digital Business & Technology Division) development standards.',
      'Give comments, modifications, answers, and new suggestions to the standard in any format.',
      'Maintenance golang code base that relates to CLI boilerplate as standard in the company.',
      'Using the Go language, Redis, Apache Kafka, PostgreSQL, Minio, and MongoDB as standard in the development life cycle.',
      'Helping PT. Telkom Indonesia\'s Pijar Sekolah work unit identifies bottlenecks through load testing andƒ reverse engineering from node.js to golang.',
      'Developed curriculum materials for backend programmers, especially in the secure code, security, database, and reliability sections.',
      'Assisted in accelerating the completion of the One Data project of the University of North Sumatra (One Data USU).'
    ],
    techStack: ['Golang', 'PostgreSQL', 'NATS', 'Node JS', 'MongoDB', 'Kafka', 'Docker']
  },
  {
    role: 'Fullstack Web Development Mentor',
    company: 'PT Rakamin Kolektif Madani',
    workMode: 'Remote',
    location: 'Jakarta',
    start: 'Oct 2023',
    end: 'Dec 2023',
    bullets: [
      'Mentored a team of 6 participants during live sessions, guiding them through their final projects and helping them achieve an "excellent" rating in their presentations.',
      'Assessed leadership, communication, collaboration, teamwork, and technical skills, and reviewed 3 project submissions, providing detailed feedback via the Rakamin Academy LMS.',
      'Focused on strengthening skills and unlocking participants\’ potential to ensure optimal outcomes in their final projects.'
    ],
    techStack: ['Node.js', 'Next.js']
  },
  {
    role: 'Full Stack Development Tutor',
    company: 'PT Aurora Teknologi Indonesia',
    workMode: 'Hybrid',
    location: 'Makassar',
    start: 'Jan 2023',
    end: 'May 2023',
    description:
      'Taught programming fundamentals to 9 participants across 2 batches (Batch 18 and 19), guiding them to apply their knowledge in developing functional websites. Topics covered included:',
    bullets: [
      'Fundamentals of HTML5 and CSS3',
      'JavaScript',
      'Data Structures and Algorithms',
      'Bootstrap Framework',
      'Node.js',
      'Express',
      'Firestore'
    ]
  },
  {
    role: 'Backend Engineer',
    company: 'CV Lucy Teknology',
    workMode: 'Office',
    location: 'Makassar',
    start: 'May 2022',
    end: 'Nov 2022',
    bullets: [
      'Managed and maintained the back-end of a point-of-sale application using Laravel.',
      'Refactored existing code and applied design patterns.',
      'Rebuilt a cashier application in Go from PHP (Laravel Framework).',
      'Implemented Clean Architecture in a new cashier application.',
      'Dockerized backend applications.'
    ],
    techStack: ['PHP', 'Laravel', 'Golang', 'MySQL', 'MongoDB', 'Docker']
  },
  {
    role: 'Web Developer',
    company: 'Wevelope',
    workMode: 'Remote',
    location: 'Surabaya',
    start: 'Nov 2021',
    end: 'Apr 2022',
    bullets: [
      'Developed new ERP systems using Laravel and Vue.js.',
      'Implemented design patterns in the systems.',
      'Maintained existing systems.',
      'Created APIs for mobile-based games and applications.',
      'Created website UI.'
    ],
    techStack: ['PHP', 'Laravel', 'Vue JS']
  },
  {
    role: 'Web Development Freelance',
    company: 'PT Hadji Kalla (Kalla Toyota)',
    workMode: 'Hybrid',
    location: 'Makassar',
    start: 'Jul 2021',
    end: 'Aug 2021',
    description:
      'Developed a web-based application to provide customers with product management, service price estimation, and service education features.',
    techStack: ['PHP', 'Laravel', 'JQuery']
  },
  {
    role: 'Web Development Internship',
    company: 'PT PLN UIW Sulselrabar',
    workMode: 'Hybrid',
    location: 'Makassar',
    start: 'Feb 2020',
    end: 'Feb 2021',
    bullets: [
      'Developed a web-based application to streamline the employee transfer approval process for HR.',
      'Improved operational efficiency by integrating the system with existing workflows.'
    ],
    techStack: ['CodeIgniter 3', 'JQuery']
  },
  {
    role: 'Web Development Freelance',
    company: 'Projects.co.id',
    workMode: 'Remote',
    start: 'May 2020',
    end: 'Jun 2020',
    description:
      'Fixed bugs and implemented mailing features for a web-based academic information system, enhancing system reliability and user communication.',
    techStack: ['CodeIgniter 3', 'JQuery']
  }
];


// ===================== Utils =====================
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function toPeriodToken(v) {
  if (!v) return '';
  const s = String(v).trim();
  if (/^present$/i.test(s)) return 'present';
  if (/^\d{4}$/.test(s)) return s;                    // '2023'
  if (/^\d{4}-\d{1,2}$/.test(s)) {                    // '2023-05'
    const [y, m] = s.split('-').map(Number);
    return `${MONTHS[(m || 1) - 1]} ${y}`;
  }
  if (/^[A-Za-z]{3,9}\s+\d{4}$/.test(s)) return s;    // 'May 2023'
  return s;                                           // fallback
}

function formatPeriod(exp) {
  const a = toPeriodToken(exp.start);
  const b = toPeriodToken(exp.end);
  if (a && b) return `${a} - ${b}`;
  if (a && !b) return a;
  if (!a && b) return b;
  return '';
}

function joinMeta(parts) {
  return parts.filter(Boolean).join(' • ');
}

// ===================== Render =====================
/**
 * Render daftar experience
 * @param {string} containerId - id container untuk list
 * @param {number} initialCount - jumlah kartu awal di mobile
 */
function renderExperiences(containerId = '#experience-list', initialCount = 3) {
  const container = document.querySelector(containerId);
  if (!container) return;

  container.innerHTML = experienceData.map((exp, idx) => {
    const hideMobile = idx >= initialCount ? 'hidden md:block' : '';
    const period = formatPeriod(exp);
    const meta = joinMeta([exp.workMode, exp.location]);
    const headerRight = [period ? `<div class="text-xs text-[var(--muted)]">${period}</div>` : '', meta ? `<div class="text-xs text-[var(--muted)]">${meta}</div>` : '']
      .filter(Boolean)
      .join('');

    const bullets = Array.isArray(exp.bullets) ? exp.bullets : [];
    const bulletList = bullets.length
      ? `<ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
           ${bullets.map(li => `<li>${li}</li>`).join('')}
         </ul>`
      : '';

    const description = exp.description
      ? `<p class="mt-3 text-sm text-[var(--muted)] leading-relaxed">${exp.description}</p>`
      : '';

    // ⬇️ Tambahan: baris Tech stack seperti di gambar
    const techLine = Array.isArray(exp.techStack) && exp.techStack.length
      ? `<p class="mt-3 text-sm italic text-[var(--muted)]">Tech stack: ${exp.techStack.join(', ')}</p>`
      : '';

    const title = [exp.role, exp.company].filter(Boolean).join(', ');

    return `
      <article class="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 ${hideMobile}">
        <header class="flex flex-wrap items-baseline justify-between gap-2">
          <h3 class="font-semibold">${title}</h3>
          <div class="flex flex-col items-end gap-0.5 text-right">${headerRight}</div>
        </header>
        ${description}
        ${bulletList}
        ${techLine}
      </article>
    `;
  }).join('');
}

renderExperiences();
