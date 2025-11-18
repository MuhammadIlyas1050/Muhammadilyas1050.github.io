const YEAR_EL = document.getElementById('year');
if (YEAR_EL) YEAR_EL.textContent = new Date().getFullYear();

const PROJECTS = [
  {
    slug: "project-1",
    title: "Pedestrian Bridge — 25 m Span",
    area: "Structures",
    date: "2025",
    summary: "Concept-to-detail design with ETABS; ACI/AISC checks; 14% steel optimization.",
    skills: ["ETABS","AutoCAD","ACI/AISC"],
    thumb: "assets/img/bridge.webp",
    md: "project-1.md"
  },
  {
    slug: "project-2",
    title: "Urban Arterial LOS Upgrade",
    area: "Transportation",
    date: "2024",
    summary: "Geometric redesign; signal timing; LOS from D to B with minor ROW impact.",
    skills: ["Civil 3D","Synchro","HCM"],
    thumb: "assets/img/road.webp",
    md: "project-2.md"
  }
];

function projectCard(p) {
  const tags = p.skills.map(s=>`<li>${s}</li>`).join('');
  return `
    <a class="card" href="${p.md}">
      <img class="thumb" src="${p.thumb}" alt="${p.title}" loading="lazy" />
      <div class="card-body">
        <h3>${p.title}</h3>
        <div class="meta">${p.area} • ${p.date}</div>
        <p>${p.summary}</p>
        <ul class="tags">${tags}</ul>
      </div>
    </a>
  `;
}

function loadFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.slice(0,3).map(projectCard).join('');
}

function loadProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(projectCard).join('');
  const chips = document.querySelectorAll('.chip');
  chips.forEach(ch=>{
    ch.addEventListener('click', ()=>{
      chips.forEach(x=>x.classList.remove('active'));
      ch.classList.add('active');
      const f = ch.dataset.filter;
      const items = PROJECTS.filter(p=> f==='all' ? true : p.area===f);
      grid.innerHTML = items.map(projectCard).join('');
    });
  });
}

function fetchAndRenderMDLinks() {
  document.querySelectorAll('a.card').forEach(a=>{
    const href = a.getAttribute('href');
    if (href && href.endsWith('.md')) {
      a.addEventListener('click', (e)=>{
        e.preventDefault();
        window.location.href = href; // let GitHub Pages render raw md or have your browser download. Alternative: build HTML pages.
      });
    }
  });
}

loadFeatured();
loadProjects();
fetchAndRenderMDLinks();
