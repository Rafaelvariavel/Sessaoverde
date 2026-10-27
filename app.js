'use strict';

const MOVIES = [
  {
    id: 'charada',
    title: 'Charada',
    originalTitle: 'Charade',
    year: 1963,
    duration: '1h 53min',
    genres: ['Suspense', 'Mistério'],
    labels: ['Suspense', 'Mistério'],
    language: 'Dublado em português',
    poster: 'img/charada.jpg',
    source: 'https://cdn.hyperserve.io/6d57e440-219e-49d7-814b-9c7e0f149ec4/20a6c601-fdee-4e34-be80-2e119a51b766/720p.mp4',
    posterVideo: 'https://cdn.hyperserve.io/6d57e440-219e-49d7-814b-9c7e0f149ec4/20a6c601-fdee-4e34-be80-2e119a51b766/preview.jpg',
    rating: 'CLÁSSICO',
    description: 'Em Paris, uma mulher recém-viúva descobre que o passado do marido esconde segredos e que várias pessoas estão atrás de uma fortuna desaparecida. Um elegante jogo de suspense, romance e intriga.'
  },
  {
    id: 'caligari',
    title: 'O Gabinete do Dr. Caligari',
    originalTitle: 'Das Cabinet des Dr. Caligari',
    year: 1920,
    duration: '1h 17min',
    genres: ['Terror', 'Cinema mudo'],
    labels: ['Terror psicológico', 'Expressionismo'],
    language: 'Filme mudo · ative as legendas disponíveis',
    poster: 'img/caligari.jpg',
    source: 'https://cdn.hyperserve.io/6d57e440-219e-49d7-814b-9c7e0f149ec4/6dceb3fe-acf5-44f3-8b44-a96f39f41812/720p.mp4',
    posterVideo: 'https://cdn.hyperserve.io/6d57e440-219e-49d7-814b-9c7e0f149ec4/6dceb3fe-acf5-44f3-8b44-a96f39f41812/preview.jpg',
    rating: 'PIONEIRO',
    description: 'Um misterioso hipnotizador chega a uma feira acompanhado de Cesare, um sonâmbulo capaz de prever acontecimentos terríveis. A obra de Robert Wiene é um marco do expressionismo alemão e do horror psicológico.'
  },
  {
    id: 'fantasma-opera',
    title: 'O Fantasma da Ópera',
    originalTitle: 'The Phantom of the Opera',
    year: 1925,
    duration: 'Versão de longa-metragem',
    genres: ['Terror', 'Cinema mudo'],
    labels: ['Terror gótico', 'Cinema mudo'],
    language: 'Dublado em português',
    poster: 'img/fantasma-opera.jpg',
    source: 'https://cdn.hyperserve.io/6d57e440-219e-49d7-814b-9c7e0f149ec4/c8c726f1-5bca-4f0e-aeca-4e5fe5596676/720p.mp4',
    posterVideo: 'https://cdn.hyperserve.io/6d57e440-219e-49d7-814b-9c7e0f149ec4/c8c726f1-5bca-4f0e-aeca-4e5fe5596676/preview.jpg',
    rating: 'TERROR GÓTICO',
    description: 'Nas profundezas da Ópera de Paris, uma presença misteriosa observa a jovem cantora Christine e transforma o teatro em palco de obsessão, medo e segredos.'
  },
  {
    id: 'mundo-perdido',
    title: 'O Mundo Perdido',
    originalTitle: 'The Lost World',
    year: 1925,
    duration: 'Aprox. 65min',
    genres: ['Aventura', 'Cinema mudo'],
    labels: ['Aventura', 'Dinossauros'],
    language: 'Filme mudo · trilha sonora',
    poster: 'img/mundo-perdido.jpg',
    source: 'https://cdn.hyperserve.io/6d57e440-219e-49d7-814b-9c7e0f149ec4/2f038d89-9d17-4677-9ab1-05ac87958116/360p.mp4',
    posterVideo: 'https://cdn.hyperserve.io/6d57e440-219e-49d7-814b-9c7e0f149ec4/2f038d89-9d17-4677-9ab1-05ac87958116/preview.jpg',
    rating: 'AVENTURA',
    description: 'Uma expedição parte para um planalto isolado em busca de provas de que criaturas pré-históricas ainda existem. Uma aventura pioneira, lembrada pelos efeitos de animação em stop-motion.'
  },
  {
    id: 'viagem-lua',
    title: 'Viagem à Lua',
    originalTitle: 'Le Voyage dans la Lune',
    year: 1902,
    duration: '14min',
    genres: ['Ficção científica', 'Cinema mudo'],
    labels: ['Ficção científica', 'Pioneiro'],
    language: 'Filme mudo · versão restaurada',
    poster: 'https://cdn.hyperserve.io/6d57e440-219e-49d7-814b-9c7e0f149ec4/620931b5-05bc-47cd-8dd8-ddfdd959f6c6/preview.jpg',
    source: 'https://cdn.hyperserve.io/6d57e440-219e-49d7-814b-9c7e0f149ec4/620931b5-05bc-47cd-8dd8-ddfdd959f6c6/1080p.mp4',
    posterVideo: 'https://cdn.hyperserve.io/6d57e440-219e-49d7-814b-9c7e0f149ec4/620931b5-05bc-47cd-8dd8-ddfdd959f6c6/preview.jpg',
    rating: '1902 · RESTAURADO',
    description: 'Georges Méliès leva um grupo de astrônomos em uma expedição fantástica até a Lua. Com imagens inventivas e cenários artesanais, o curta se tornou uma das obras mais influentes dos primórdios do cinema.'
  },
  {
    id: 'potemkin',
    title: 'O Encouraçado Potemkin',
    originalTitle: 'Bronenosets Potyomkin',
    year: 1925,
    duration: 'Vídeo ainda não conectado',
    genres: ['Drama histórico', 'Cinema mudo'],
    labels: ['Drama histórico', 'Cinema mudo'],
    language: 'Link do vídeo não fornecido',
    poster: 'img/potemkin.jpg',
    source: '',
    posterVideo: '',
    rating: 'EM BREVE',
    description: 'O clássico de Sergei Eisenstein dramatiza uma revolta de marinheiros em 1905 e ficou conhecido por sua montagem inovadora. O pôster está no catálogo; o vídeo ainda precisa de um link estável.'
  }
];

const state = { filter: 'Todos', query: '', savedOnly: false, currentMovie: null };
const grid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');
const count = document.getElementById('catalogCount');
const status = document.getElementById('resultsStatus');
const emptyState = document.getElementById('emptyState');
const modal = document.getElementById('movieModal');
const player = document.getElementById('moviePlayer');
const fallback = document.getElementById('playerFallback');
const toast = document.getElementById('toast');
let toastTimeout;

function getSaved() {
  try { return JSON.parse(localStorage.getItem('sessaoVerdeSaved') || '[]'); }
  catch { return []; }
}
function setSaved(ids) {
  try { localStorage.setItem('sessaoVerdeSaved', JSON.stringify(ids)); }
  catch { /* The site still works when local storage is disabled. */ }
}
function isSaved(id) { return getSaved().includes(id); }
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function posterFallback(title) {
  const initial = escapeHtml(title.slice(0, 1).toUpperCase());
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 540"><rect width="360" height="540" fill="#14241c"/><circle cx="180" cy="200" r="90" fill="#20382a"/><text x="180" y="228" text-anchor="middle" font-size="100" fill="#c7e0a2" font-family="Georgia">${initial}</text><text x="180" y="430" text-anchor="middle" font-size="20" fill="#e8eee4" font-family="Arial">SESSÃO VERDE</text></svg>`)}`;
}
function movieCard(movie) {
  const saved = isSaved(movie.id);
  const available = Boolean(movie.source);
  const poster = movie.poster || posterFallback(movie.title);
  const categories = movie.labels.slice(0, 2).map(label => `<span>${escapeHtml(label)}</span>`).join('');
  return `<article class="movie-card ${available ? '' : 'coming-soon'}" data-id="${escapeHtml(movie.id)}" tabindex="0" role="button" aria-label="${available ? 'Assistir ' : 'Detalhes de '}${escapeHtml(movie.title)}">
    <div class="poster-wrap">
      <img loading="lazy" src="${escapeHtml(poster)}" alt="Pôster de ${escapeHtml(movie.title)}" onerror="this.onerror=null;this.src='${posterFallback(movie.title)}'">
      <div class="poster-topline"><span class="film-type">${available ? 'CLÁSSICO' : 'CATÁLOGO'}</span></div>
      <button type="button" class="save-card ${saved ? 'saved' : ''}" data-save="${escapeHtml(movie.id)}" aria-label="${saved ? 'Remover da' : 'Adicionar à'} minha lista" title="${saved ? 'Remover da minha lista' : 'Adicionar à minha lista'}"><svg viewBox="0 0 24 24"><path d="M6 3.5h12a1 1 0 0 1 1 1V21l-7-4-7 4V4.5a1 1 0 0 1 1-1Z" ${saved ? 'fill="currentColor"' : ''}></path></svg></button>
      <div class="poster-bottom"><span class="poster-rating">${escapeHtml(movie.rating)}</span><span class="play-circle">${available ? '<svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7Z"/></svg>' : '<span style="font-size:16px">·</span>'}</span></div>
      ${available ? '' : '<span class="coming-label">VÍDEO PENDENTE</span>'}
    </div>
    <div class="movie-info"><h3 class="movie-title">${escapeHtml(movie.title)}</h3><div class="movie-meta"><span>${movie.year}</span><span class="dot">•</span><span>${escapeHtml(movie.duration)}</span></div><div class="movie-tags">${categories}</div>${available ? '' : '<div class="card-state">Adicione um link para liberar a reprodução</div>'}</div>
  </article>`;
}
function filteredMovies() {
  const q = state.query.trim().toLocaleLowerCase('pt-BR');
  const saved = getSaved();
  return MOVIES.filter(movie => {
    const text = [movie.title, movie.originalTitle, movie.year, ...movie.genres, ...movie.labels].join(' ').toLocaleLowerCase('pt-BR');
    const matchesQuery = !q || text.includes(q);
    const matchesFilter = state.filter === 'Todos' || movie.genres.includes(state.filter) || movie.labels.includes(state.filter);
    const matchesSaved = !state.savedOnly || saved.includes(movie.id);
    return matchesQuery && matchesFilter && matchesSaved;
  });
}
function render() {
  const movies = filteredMovies();
  grid.innerHTML = movies.map(movieCard).join('');
  const allAvailable = MOVIES.filter(movie => movie.source).length;
  count.textContent = state.savedOnly ? `${movies.length} NA MINHA LISTA` : `${allAvailable} FILMES DISPONÍVEIS`;
  if (state.query || state.filter !== 'Todos' || state.savedOnly) {
    const pieces = [];
    if (state.query) pieces.push(`busca por “${state.query}”`);
    if (state.filter !== 'Todos') pieces.push(state.filter);
    if (state.savedOnly) pieces.push('minha lista');
    status.textContent = `${movies.length} resultado${movies.length === 1 ? '' : 's'} · ${pieces.join(' · ')}`;
  } else status.textContent = '';
  emptyState.hidden = movies.length > 0;
  grid.hidden = movies.length === 0;
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2300);
}
function toggleSaved(id) {
  const movie = MOVIES.find(item => item.id === id);
  if (!movie) return;
  const saved = getSaved();
  const exists = saved.includes(id);
  setSaved(exists ? saved.filter(savedId => savedId !== id) : [...saved, id]);
  render();
  if (state.currentMovie && state.currentMovie.id === id) updateModalSave();
  showToast(exists ? 'Removido da sua lista.' : 'Adicionado à sua lista.');
}
function updateModalSave() {
  if (!state.currentMovie) return;
  const button = document.getElementById('modalSave');
  const saved = isSaved(state.currentMovie.id);
  button.classList.toggle('saved', saved);
  button.innerHTML = `<span>${saved ? '✓' : '+'}</span> ${saved ? 'Na minha lista' : 'Minha lista'}`;
}
function openMovie(id) {
  const movie = MOVIES.find(item => item.id === id);
  if (!movie) return;
  if (!movie.source) {
    showToast('O link de vídeo deste clássico ainda não foi conectado.');
    return;
  }
  state.currentMovie = movie;
  document.getElementById('modalTitle').textContent = movie.title;
  document.getElementById('modalKicker').textContent = `${movie.originalTitle.toLocaleUpperCase('pt-BR')} · SESSÃO VERDE`;
  document.getElementById('modalMeta').innerHTML = `<span class="modal-year">${movie.year}</span><span>•</span><span>${escapeHtml(movie.duration)}</span><span>•</span><span>${escapeHtml(movie.language)}</span>`;
  document.getElementById('modalDescription').textContent = movie.description;
  player.poster = movie.posterVideo || movie.poster;
  player.src = movie.source;
  player.load();
  fallback.hidden = true;
  player.hidden = false;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  updateModalSave();
  // Playback is initiated by a user click, so browsers can allow it; controls remain available if autoplay is blocked.
  const attempt = player.play();
  if (attempt && typeof attempt.catch === 'function') attempt.catch(() => {});
  document.getElementById('closeModal').focus({preventScroll:true});
}
function closeMovie() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  player.pause();
  player.removeAttribute('src');
  player.load();
  fallback.hidden = true;
  player.hidden = false;
  state.currentMovie = null;
}

// Delegated events let cards be redrawn after search/filter changes.
grid.addEventListener('click', event => {
  const saveButton = event.target.closest('[data-save]');
  if (saveButton) { event.stopPropagation(); toggleSaved(saveButton.dataset.save); return; }
  const card = event.target.closest('.movie-card');
  if (card) openMovie(card.dataset.id);
});
grid.addEventListener('keydown', event => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('movie-card')) {
    event.preventDefault(); openMovie(event.target.dataset.id);
  }
});
searchInput.addEventListener('input', () => { state.query = searchInput.value; state.savedOnly = false; document.getElementById('showSaved').classList.remove('active'); render(); });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  state.filter = button.dataset.filter;
  state.savedOnly = false;
  document.getElementById('showSaved').classList.remove('active');
  document.querySelectorAll('[data-filter]').forEach(chip => chip.classList.toggle('selected', chip === button));
  render();
}));
document.getElementById('showSaved').addEventListener('click', () => {
  state.savedOnly = !state.savedOnly;
  state.query = '';
  searchInput.value = '';
  state.filter = 'Todos';
  document.querySelectorAll('[data-filter]').forEach(chip => chip.classList.toggle('selected', chip.dataset.filter === 'Todos'));
  document.getElementById('showSaved').classList.toggle('active', state.savedOnly);
  render();
  document.getElementById('catalogo').scrollIntoView({behavior:'smooth'});
});
document.getElementById('heroPlay').addEventListener('click', () => openMovie('charada'));
document.getElementById('scrollCatalog').addEventListener('click', () => document.getElementById('catalogo').scrollIntoView({behavior:'smooth'}));
document.getElementById('closeModal').addEventListener('click', closeMovie);
modal.querySelectorAll('[data-close-modal]').forEach(element => element.addEventListener('click', closeMovie));
document.getElementById('modalSave').addEventListener('click', () => { if (state.currentMovie) toggleSaved(state.currentMovie.id); });
document.getElementById('clearSearch').addEventListener('click', () => {
  state.query = ''; state.filter = 'Todos'; state.savedOnly = false; searchInput.value = '';
  document.getElementById('showSaved').classList.remove('active');
  document.querySelectorAll('[data-filter]').forEach(chip => chip.classList.toggle('selected', chip.dataset.filter === 'Todos'));
  render();
});
document.getElementById('retryVideo').addEventListener('click', () => {
  if (!state.currentMovie) return;
  fallback.hidden = true; player.hidden = false;
  player.src = state.currentMovie.source; player.load();
  const attempt = player.play(); if (attempt && typeof attempt.catch === 'function') attempt.catch(() => {});
});
player.addEventListener('error', () => {
  if (state.currentMovie && modal.classList.contains('open')) { fallback.hidden = false; player.hidden = true; }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeMovie();
  if (event.key === '/' && !modal.classList.contains('open') && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault(); searchInput.focus();
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
render();
