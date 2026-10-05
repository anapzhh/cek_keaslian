// ====== NAVIGASI SPA ======
function hideAll() {
  document.getElementById('home').style.display = 'none';
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
}

function openPage(pageId) {
  if (pageId === "lihatAdmin") {
    const lanjut = confirm("PERINGATAN PENTING!! all admin saluran ga dijamin aman, klo ragu rekber/midman ke admin utama aja");
    if (!lanjut) return;
  }
  
  hideAll();
  document.getElementById(pageId).style.display = 'flex'; // pakai flex biar center
}

function goHome() {
  hideAll();
  document.getElementById('home').style.display = 'flex';
}

// ====== MODE DARK/LIGHT ======
function toggleMode() {
  document.body.classList.toggle('light');
}

// ====== GREETING / NAMA VISITOR ======
function saveName() {
  const name = document.getElementById('nameInput').value.trim();
  if (!name) return;
  
  localStorage.setItem("visitorName", name);
  document.getElementById('nameModal').style.display = "none";
  showGreeting(name);
}

function showGreeting(name) {
  document.getElementById('greeting').innerHTML =
    `Halo king <span style="color:#00ffd5">${name}</span> 👋, selamat datang`;
}

window.onload = function() {
  const saved = localStorage.getItem("visitorName");
  if (saved) {
    document.getElementById('nameModal').style.display = "none";
    showGreeting(saved);
  } else {
    document.getElementById('nameModal').style.display = "flex";
  }
};

// ====== PARTICLE BACKGROUND ======
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.5 + 0.2;
  }
  
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,255,100,${this.alpha})`;
    ctx.fill();
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
}

function initParticles(count = 90) {
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

initParticles();
animate();

// ====== LINK SALURAN ======
const linkSaluran = [
  { name: 'saluran V1', link: 'https://whatsapp.com/channel/0029VbAhoIMCRs1qvCsddA44' },
  { name: 'saluran V2', link: 'https://whatsapp.com/channel/0029VasvJyKLdQea2atz4a0a' },
  { name: 'saluran V3', link: 'https://whatsapp.com/channel/0029Vb84CL6KLaHoXEFidT2C' },
  { name: 'saluran V4', link: 'https://whatsapp.com/channel/0029Vb7DKQU1NCrZpafT6y3Y' },
  { name: 'saluran V5', link: 'https://whatsapp.com/channel/0029VbBy2UWAojYxD6vcvn2q' }
];

function renderLinkSaluran() {
  const container = document.getElementById('linkSaluran');
  
  container.innerHTML = `
    <div class="page-box">
      <h2 class="title">LINK SALURAN</h2>
      ${linkSaluran.map(l =>
        `<a href="${l.link}" target="_blank" class="btn-sm">${l.name}</a>`
      ).join('')}
      <button onclick="goHome()" class="back">⬅ Home</button>
    </div>
  `;
}

renderLinkSaluran();

// ====== LIST ADMIN ======
const masterAdmin = [
  { name: 'Gaxzz', link: 'https://wa.me/62895608521050' },
  { name: 'Jrixx', link: 'https://wa.me/6285810058451' },
  { name: 'Namikaze', link: 'https://wa.me/62881027858115' },
  { name: 'Rizkan Starboy', link: 'https://wa.me/6285718934027' },
  { name: 'Ress', link: 'https://wa.me/6283169274881' },
  { name: 'Rapss Kamisato', link: 'https://wa.me/6282266305388' },
  { name: 'Kyotaka', link: 'https://wa.me/62882021911447' },
  { name: 'Zephry', link: 'https://wa.me/6287879470292' },
  { name: 'Kazz', link: 'https://wa.me/6282260341099' },
  { name: 'FarreL', link: 'https://wa.me/6281318213585' },
  { name: 'Eroz', link: 'https://wa.me/6285656641172' },
  { name: 'Saka store', link: 'https://wa.me/6289659912200' },
  { name: 'Yoo Zol', link: 'https://wa.me/6283830898187' },
  { name: 'Kibaa', link: 'https://wa.me/6287817098991' },
  { name: 'Lex', link: 'https://wa.me/6285830325641' },
  { name: 'Bang N1k', link: 'https://wa.me/6287859030934' },
  { name: 'Rrq Dricaz', link: 'https://wa.me/628134875623' },
  { name: 'Seyka mbg', link: 'https://wa.me/6287874946771' },
  { name: 'Kisuke kaizen', link: 'https://wa.me/6281990942115' },
  { name: 'Bintg', link: 'https://wa.me/6282312376494' },
  { name: 'firman itaiyo', link: 'https://wa.me/6285770610437' },
  { name: 'kenstecu', link: 'https://wa.me/6288905110453' },
  { name: 'kurir', link: 'https://wa.me/6288276323009' },
  { name: 'jena', link: 'https://wa.me/6285881809095' },
  { name: 'hiko ganz', link: 'https://wa.me/6281632269898' },
  { name: 'tiko stecu', link: 'https://wa.me/6283164230470' },
  { name: 'mr alz', link: 'https://wa.me/628214938968' },
  { name: 'kamisato yambo', link: 'https://wa.me/6285772003711' },
  { name: 'ARX MLBB', link: 'https://wa.me/6281556927898' },
  { name: 'nos mau stok', link: 'https://wa.me/62881010863506' },
  { name: 'sabix tennyson', link: 'https://wa.me/6283852465307' },
  { name: 'varane yamada', link: 'https://wa.me/6282190140955' },
  { name: 'jeron', link: 'https://wa.me/6285649729182' },
  { name: 'Kapzz', link: 'https://wa.me/6285751921499' },
  { name: 'lamskuy', link: 'https://wa.me/62881011637623'}
];

function renderListAdmin() {
  const container = document.getElementById('lihatAdmin');
  
  container.innerHTML = `
    <div class="page-box">
      <h2 class="title">LIST ADMIN</h2>
      <input type="text" id="searchAdmin"
        placeholder="lu nyari siape?"
        class="mb-3 p-2 w-full rounded bg-gray-700 text-white" />
      <ul id="adminList" class="list"></ul>
      <button onclick="goHome()" class="back">⬅ Home</button>
    </div>
  `;
  
  const listEl = document.getElementById('adminList');
  
  function updateList(filter = '') {
    const filtered = masterAdmin.filter(a =>
      a.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    listEl.innerHTML = filtered.map(a =>
      `<li><a href="${a.link}" target="_blank">${a.name}</a></li>`
    ).join('');
  }
  
  updateList();
  
  document
    .getElementById('searchAdmin')
    .addEventListener('input', e => updateList(e.target.value));
}

renderListAdmin();