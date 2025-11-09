// Generate sample images from local folder 'gain'
const galleryContainer = document.getElementById('gallery');
const gallery = [];
for (let i = 1; i <= 24; i++) {
	gallery.push({
		thumb: `stockid_gambar/gain/img${i}.jpg`,
		full: `stockid_gambar/gain/img${i}.jpg`,
		title: `Stock ID Gain ${i}`
	});
}

gallery.forEach((g, idx) => {
	const a = document.createElement('button');
	a.className = 'divgain';
	a.setAttribute('data-index', idx);
	a.innerHTML = `<img loading="lazy" src="${g.thumb}" alt="${g.title}"><div class="caption-gain">${g.title}</div>`;
	galleryContainer.appendChild(a);
});

// Modal behavior
const overlay = document.getElementById('overlay');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = Array.from(document.querySelectorAll('.divgain'));
const items = gallery.map(g => ({ full: g.full, title: g.title }));
let currentIndex = -1;

function openModal(index) {
	const item = items[index];
	if (!item) return;
	currentIndex = index;
	modalImage.src = item.full;
	modalImage.alt = item.title;
	modalCaption.textContent = item.title;
	overlay.classList.add('open');
	overlay.setAttribute('aria-hidden', 'false');
}

function closeModal() {
	overlay.classList.remove('open');
	overlay.setAttribute('aria-hidden', 'true');
	setTimeout(() => { modalImage.src = ''; }, 300);
	currentIndex = -1;
}

function showNext(delta) {
	if (currentIndex === -1) return;
	const next = (currentIndex + delta + items.length) % items.length;
	openModal(next);
}

cards.forEach(divgain => {
	divgain.addEventListener('click', () => {
		const idx = Number(divgain.getAttribute('data-index'));
		openModal(idx);
	});
});

closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', () => showNext(-1));
nextBtn.addEventListener('click', () => showNext(1));

overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
window.addEventListener('keydown', (e) => {
	if (overlay.classList.contains('open')) {
		if (e.key === 'Escape') closeModal();
		if (e.key === 'ArrowRight') showNext(1);
		if (e.key === 'ArrowLeft') showNext(-1);
	}
});