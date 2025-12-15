const envelope = document.getElementById('envelope');
const start = document.getElementById('start');
const letter = document.getElementById('letter');
const video = document.getElementById('bgVideo');

const heroWords = document.querySelectorAll('.hero-title span');
const subtitle = document.getElementById('subtitle');
const scrollHint = document.getElementById('scrollHint');

const modal = document.getElementById('certificateModal');
const closeModal = document.getElementById('closeModal');
const mainContent = document.getElementById('mainContent');

const openPage = document.getElementById('openPage');
const downloadPdf = document.getElementById('downloadPdf');

function typeText(text, element, speed = 60) {
  let i = 0;
  element.textContent = '';
  const timer = setInterval(() => {
    element.textContent += text[i++];
    if (i === text.length) clearInterval(timer);
  }, speed);
}

envelope.addEventListener('click', async () => {
  start.style.opacity = '0';

  setTimeout(async () => {
    start.style.display = 'none';
    letter.classList.add('active');

    await document.fonts.ready;
    video.play().catch(() => {});

    heroWords.forEach((word, i) => {
      setTimeout(() => word.style.opacity = 1, i * 600);
    });

    setTimeout(() => {
      typeText(
        'Сертификат на урок верховой езды в окружении природы',
        subtitle
      );

      setTimeout(() => {
        scrollHint.classList.add('show');
      }, 6000);

    }, heroWords.length * 600 + 400);

  }, 900);
});

mainContent.addEventListener('click', () => {
  modal.classList.add('show');
  mainContent.classList.add('hidden');
  scrollHint.classList.remove('show');
});

closeModal.onclick = () => {
  modal.classList.remove('show');
  mainContent.classList.remove('hidden');
};

openPage.onclick = () => {
  window.open('certificate.html', '_blank');
};

downloadPdf.onclick = () => {
  const link = document.createElement('a');
  link.href = 'сертификат-1.pdf';
  link.download = 'сертификат-1.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};