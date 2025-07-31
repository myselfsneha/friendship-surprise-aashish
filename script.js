// 🔐 Password Lock
function checkPassword() {
  const input = document.getElementById('passwordInput').value.trim().toLowerCase();
  if (input === 'bestfriends') {
    document.getElementById('lockScreen').style.display = 'none';
    document.getElementById('mainContent').classList.remove('hidden');
    startAnimations();
  } else {
    document.getElementById('hint').classList.remove('hidden');
  }
}

// ✨ Floating Hearts
function startAnimations() {
  const container = document.querySelector('.heart-container');
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.textContent = '💖';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 500);

  // 🌸 Petals
  const petals = ['🌸', '💐', '🌼'];
  setInterval(() => {
    const petal = document.createElement('div');
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];
    petal.style.position = 'absolute';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = '0px';
    petal.style.fontSize = '1.5rem';
    petal.style.animation = 'fall 4s linear forwards';
    document.getElementById('petals-container').appendChild(petal);
    setTimeout(() => petal.remove(), 4000);
  }, 600);

  const style = document.createElement('style');
  style.innerHTML = `@keyframes fall {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
  }`;
  document.head.appendChild(style);

  // 🌟 Stars
  const canvas = document.getElementById('starsCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const stars = Array(100).fill().map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5
  }));

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();
}

// 🎉 Confetti Burst
function launchConfetti() {
  const emojis = ['🎉', '✨', '🎈', '🎊', '💥'];
  for (let i = 0; i < 20; i++) {
    const el = document.createElement('span');
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.position = 'absolute';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.top = Math.random() * 100 + 'vh';
    el.style.fontSize = '1.5rem';
    el.style.animation = 'fadeOut 1s ease forwards';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fadeOut {
      0% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(100px); }
    }`;
  document.head.appendChild(style);
}

// 🧠 Easter Egg
function triggerEasterEgg() {
  const egg = document.getElementById('easterEgg');
  const msg = document.getElementById('miniMessage');
  egg.classList.add('shake-pop');
  burstConfetti();
  msg.classList.add('reveal');
  setTimeout(() => egg.classList.remove('shake-pop'), 500);
}

function burstConfetti() {
  const emojis = ['🎉', '✨', '🎈', '🎊', '💥'];
  for (let i = 0; i < 15; i++) {
    const el = document.createElement('span');
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.position = 'absolute';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.top = Math.random() * 100 + 'vh';
    el.style.fontSize = '1.5rem';
    el.style.animation = 'fadeOut 1s ease forwards';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
  }
}