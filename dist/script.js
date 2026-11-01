'use strict';

// Keep project stories grounded in the sources recorded in docs/CONTENT_SOURCES.md.
const projects = {
  asmahaney: {
    eyebrow: 'RECENT WORK / WEB DEVELOPMENT & DIGITAL DESIGN',
    title: 'Asmahaney Saad',
    lead: 'A professional website presenting Asmahaney Saad’s work across law, corporate leadership and social impact.',
    sections: [
      { title: 'The project', text: 'Create a digital home for a personal brand, bringing professional identity and areas of work into a clear online presence.' },
      { title: 'The focus', text: 'A website centred on Asmahaney’s positioning as a legal strategist, corporate leader and advocate. It connects personal-brand presentation with web development and digital design.' },
      { title: 'Explore the website', text: 'Visit asmahaneysaad.com to explore the current website.' }
    ],
    link: 'https://asmahaneysaad.com',
    linkLabel: 'Visit website ↗',
    note: 'Project supplied by Harrison. Summary grounded in the website’s current public title and description. The cover is an original portfolio illustration.'
  },
  kwikfloat: {
    eyebrow: 'RECENT WORK / SOFTWARE DEVELOPMENT / MOBILE MONEY',
    title: 'Kwikfloat',
    lead: 'A mobile money business management system focused on cash, electronic float and day-to-day operations across MTN Mobile Money and Airtel Money.',
    sections: [
      { title: 'The idea', text: 'Bring the moving parts of a mobile money business into one workspace: cash and float, agents, transactions, commissions, expenses and reconciliation.' },
      { title: 'The application', text: 'The React and TypeScript source includes views for dashboards, agents, transactions, transfers, wallet ledgers, commissions, expenses, reports and reconciliation, alongside an audit trail.' },
      { title: 'The technical foundation', text: 'Built with React, TypeScript and Vite, with Tailwind CSS and Lucide icons in the project’s toolkit. Explore the repository for the current implementation.' }
    ],
    link: 'https://github.com/KangahoH/Kwikfloat',
    note: 'Sources: public repository description, package.json and source-tree listing. The cover is an original portfolio illustration.'
  },
  sandy: {
    eyebrow: 'RECENT WORK / SOFTWARE DEVELOPMENT / RETAIL',
    title: 'Sandy Collections',
    lead: 'A shop management system for a clothing and accessories retail brand.',
    sections: [
      { title: 'The idea', text: 'Bring everyday retail operations together for a brand selling dresses, footwear, bags and jewellery.' },
      { title: 'The application', text: 'The application source includes inventory, point of sale, delivery, staff, dashboard and reporting views, together with an authentication interface.' },
      { title: 'The technical foundation', text: 'A React and TypeScript application built with Vite. The repository includes a Supabase client integration and database-related project files, with Tailwind CSS, Lucide icons and Recharts in the toolkit.' }
    ],
    link: 'https://github.com/KangahoH/SandyCollections',
    note: 'Sources: public repository description, package.json and source-tree listing. The cover is an original portfolio illustration.'
  },
  streamline: {
    eyebrow: 'STRE@MLINE HEALTH TECH / 2021–2025',
    title: 'Making healthcare software work for people',
    lead: 'Software development and product design for an electronic medical records system used across 80+ healthcare institutions.',
    sections: [
      { title: 'The context', text: 'Healthcare teams need software that supports the way they work. My contribution spanned building and maintaining the EMR, understanding client requirements, designing interfaces and helping users adopt the system.' },
      { title: 'My contribution', items: ['Software Developer, March 2021–March 2023: contributed code, debugging, optimisation and three major product updates.', 'Associate Product Designer, March 2023–February 2024; Product Designer, January 2024–May 2025: collaborated with 12+ key clients and created 50+ mockups.', 'Defined 100+ feature requirements, led user testing of 40+ features and worked with the product manager on backlog priorities.', 'In a concurrent field support role in 2025, trained healthcare professionals and supported onboarding across five facilities.'] },
      { title: 'What this work demonstrates', text: 'Connecting technical implementation with product requirements, interface clarity, user feedback and adoption. This was a collaborative product: my role evolved across engineering, design and support.' }
    ],
    note: 'Source: Harrison Kangaho Resume.md. The cover is an original portfolio illustration, not a screenshot of the EMR.'
  },
  testimony: {
    eyebrow: 'PERSONAL PROJECT / SOFTWARE DEVELOPMENT / 2025',
    title: 'Testimony App',
    lead: 'A web project intended to make recording and transcribing personal testimonies easier.',
    sections: [
      { title: 'The idea', text: 'Give personal stories a simpler path from spoken words to text. The repository describes the project as a way to make testimony recording and transcription easier.' },
      { title: 'The technical foundation', text: 'The repository uses JavaScript and includes Express, Multer, the OpenAI SDK, Sequelize and SQLite dependencies. These provide a foundation for an HTTP server, file uploads, transcription integration and data persistence.' },
      { title: 'Explore the work', text: 'Explore the implementation in the public source repository below, from its JavaScript foundation to its recording and transcription workflow.' }
    ],
    link: 'https://github.com/KangahoH/testimony-app',
    note: 'Sources: repository README and package.json. The cover is an original portfolio illustration.'
  },
  hatsoff: {
    eyebrow: 'HATS OFF ANIMATION / WEB DEVELOPMENT & DESIGN / 2026',
    title: 'A digital home for a creative studio',
    lead: 'A static website for Hats Off Animation, a Kampala-based animation studio.',
    sections: [
      { title: 'The approach', text: 'Bring a creative studio’s identity to the web using a lightweight static site. The repository documents a single-file implementation with no build step and a simple hosting workflow.' },
      { title: 'Design and development', text: 'The project pairs HTML, CSS and JavaScript with a visual direction built around Oxford Blue, Deep Saffron and a bold typographic identity. Its source includes responsive styling and browser interactions.' },
      { title: 'Explore the work', text: 'The public source repository includes the website implementation, the studio’s design palette and deployment guidance for static hosting.' }
    ],
    link: 'https://github.com/KangahoH/hatsoffanimation',
    note: 'Sources: repository README and index.html. The cover borrows the documented colours and studio wording; it is a portfolio illustration rather than a live-site screenshot.'
  }
};

const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
let previousFocus;

function element(tag, text, className) {
  const node = document.createElement(tag);
  node.textContent = text;
  if (className) node.className = className;
  return node;
}

function openProject(key) {
  const project = projects[key];
  if (!project) return;
  previousFocus = document.activeElement;
  dialogContent.replaceChildren();
  dialogContent.append(element('p', project.eyebrow, 'eyebrow'));
  const title = element('h2', project.title);
  title.id = 'dialog-title';
  dialogContent.append(title, element('p', project.lead, 'dialog-lead'));
  project.sections.forEach(section => {
    const block = element('section', '', 'dialog-section');
    block.append(element('h3', section.title));
    if (section.items) {
      const list = document.createElement('ul');
      section.items.forEach(item => list.append(element('li', item)));
      block.append(list);
    } else block.append(element('p', section.text));
    dialogContent.append(block);
  });
  if (project.link) {
    const actions = element('div', '', 'dialog-actions');
    const link = element('a', project.linkLabel || 'View source on GitHub ↗', 'button button-dark');
    link.href = project.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    actions.append(link);
    dialogContent.append(actions);
  }
  dialogContent.append(element('p', project.note, 'dialog-meta'));
  document.body.classList.add('dialog-open');
  dialog.showModal();
  dialog.scrollTop = 0;
  dialog.querySelector('.dialog-close').focus();
}

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => openProject(button.dataset.project));
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  previousFocus?.focus();
});

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let count = 0;
    document.querySelectorAll('.project').forEach(project => {
      const visible = filter === 'all' || project.dataset.categories.split(' ').includes(filter);
      project.hidden = !visible;
      if (visible) count++;
    });
    document.querySelector('#filter-count').textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
  });
});

let toastTimer;
function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500);
}
document.querySelector('.copy-email').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('harrison.kangaho28@gmail.com');
    showToast('Email address copied.');
  } catch {
    showToast('You can select the email address or click it to write to me.');
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
