/**
 * Script para a página principal (index.html)
 * Inclui: Troca de idioma, cópia de BibTeX e injeção de transcrições de áudio.
 */

// --- 1. LÓGICA PARA TROCA DE IDIOMA (i18n) ---
function setLang (lang) {
  const root = document.documentElement
  root.setAttribute('lang', lang)
  root.classList.toggle('lang-en', lang === 'en')
  root.classList.toggle('lang-pt', lang === 'pt')

  document
    .getElementById('btn-en')
    .setAttribute('aria-pressed', String(lang === 'en'))
  document
    .getElementById('btn-pt')
    .setAttribute('aria-pressed', String(lang === 'pt'))

  try {
    localStorage.setItem('latinx_demo_lang', lang)
  } catch (e) {
    console.warn('Could not save language preference.', e)
  }
}

function initLang () {
  // Prioridade: 1. Salvo no LocalStorage > 2. Idioma do navegador > 3. Inglês (padrão)
  let lang = 'en'
  try {
    const saved = localStorage.getItem('latinx_demo_lang')
    if (saved) {
      lang = saved
    } else if ((navigator.language || '').toLowerCase().startsWith('pt')) {
      lang = 'pt'
    }
  } catch (e) {
    console.warn('Could not retrieve language preference.', e)
  }
  setLang(lang)
}

// --- 2. LÓGICA PARA COPIAR CITAÇÃO BIBTEX ---
function copyBib () {
  const el = document.getElementById('bibtex')
  const txt = el.innerText.trim()
  navigator.clipboard.writeText(txt).then(() => {
    const btn = document.querySelector('#citation .copy-btn')
    const oldText = btn.textContent
    btn.textContent = 'Copied!'
    setTimeout(() => {
      btn.textContent = oldText
    }, 1500)
  })
}

// --- 3. LÓGICA PARA INJETAR TRANSCRIÇÕES DE ÁUDIO ---
const TRANSCRIPTS = {}

async function loadTranscripts () {
  // 1. Tenta carregar o arquivo JSON externo
  try {
    if (location.protocol === 'http:' || location.protocol === 'https:') {
      const res = await fetch('transcripts.json', { cache: 'no-store' })
      if (res.ok) {
        Object.assign(TRANSCRIPTS, await res.json())
        return
      }
    }
  } catch (e) {
    console.warn(
      'Could not fetch transcripts.json, falling back to inline script.',
      e
    )
  }

  // 2. Se falhar, usa o JSON embutido no HTML como fallback
  const inlineScript = document.getElementById('transcripts-json-inline')
  if (inlineScript && inlineScript.textContent) {
    try {
      Object.assign(TRANSCRIPTS, JSON.parse(inlineScript.textContent))
    } catch (e) {
      console.error('Failed to parse inline transcripts JSON.', e)
    }
  }
}

function getEntryForSrc (rawSrc) {
  const key = rawSrc.trim().replace(/^\.\//, '')
  return TRANSCRIPTS[key] || TRANSCRIPTS['./' + key]
}

function injectInlineTranscripts () {
  document.querySelectorAll('figure audio[src]').forEach(audio => {
    const entry = getEntryForSrc(audio.getAttribute('src'))
    if (!entry) return

    // Evita duplicar a transcrição se o script rodar mais de uma vez
    if (audio.previousElementSibling?.classList.contains('inline-tx')) return

    const [lang, text] = Array.isArray(entry) ? entry : ['', '']
    const p = document.createElement('p')
    p.className = 'inline-tx'
    p.innerHTML = `<span class="lang">${lang}:</span> <span class="tx">"${text}"</span>`
    audio.insertAdjacentElement('beforebegin', p)
  })
}

// --- INICIALIZAÇÃO DA PÁGINA ---
// Roda tudo quando o DOM estiver pronto.
document.addEventListener('DOMContentLoaded', async () => {
  initLang()
  await loadTranscripts()
  injectInlineTranscripts()
})
