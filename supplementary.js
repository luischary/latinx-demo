// --- DADOS PARA OS RESUMOS ---
const DEMOG_DATA = [
  ['English', 102, 110, 0, 212],
  ['French', 1, 2, 0, 3],
  ['Italian', 2, 2, 0, 4],
  ['Portuguese', 15, 19, 33, 67],
  ['Spanish', 2, 11, 0, 13],
  ['Other', 0, 0, 7, 7],
  ['Total', 122, 144, 40, 306]
]
const WER_SUMMARY = [
  ['en', 12.31, 10.93, 14.1, 8.3],
  ['es', null, 7.86, 14.87, 8.23],
  ['fr', 17.65, 11.14, 17.88, 13.02],
  ['it', null, 12.38, 14.94, 8.81],
  ['pt', 14.83, 10.95, 11.13, 6.37],
  ['ro', null, null, 28.85, 14.68]
]
const SMOS_MOS_SUMMARY = [
  ['SMOS', 4.07, 3.24, 3.63, 3.54],
  ['MOS', 3.78, 3.45, 3.41, 3.35]
]

// --- DADOS DETALHADOS ---
const LANG_NAMES = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  it: 'Italian',
  pt: 'Portuguese',
  ro: 'Romanian'
}
const WER_DETAIL = [
  ['en', 'en', 11.24, 11.6, 14.72, 8.52],
  ['en', 'es', null, 6.26, 11.07, 6.08],
  ['en', 'fr', 18.16, 12.14, 18.34, 10.77],
  ['en', 'it', null, 13.68, 14.22, 9.67],
  ['en', 'pt', 12.83, 9.28, 10.87, 7],
  ['en', 'ro', null, null, 33.29, 16.26],
  ['es', 'en', 11.09, 8.69, 13.33, 7.34],
  ['es', 'es', null, 3.13, 8.19, 3.57],
  ['es', 'fr', 16.79, 11.92, 17.66, 13.98],
  ['es', 'it', null, 10.15, 14.44, 7.16],
  ['es', 'pt', 13.42, 10.03, 8.98, 5.66],
  ['es', 'ro', null, null, 28.43, 14.36],
  ['fr', 'en', 14.2, 15.79, 13.84, 9.78],
  ['fr', 'es', null, 10.23, 11.96, 7.58],
  ['fr', 'fr', 17.6, 12.56, 17.96, 12.93],
  ['fr', 'it', null, 11.92, 12.86, 8.56],
  ['fr', 'pt', 16.21, 13.98, 13.01, 7.98],
  ['fr', 'ro', null, null, 21.74, 11.3],
  ['it', 'en', 19.57, 13.58, 16.62, 10.71],
  ['it', 'es', null, 17.19, 36.68, 18.63],
  ['it', 'fr', 24.57, 10.4, 19.73, 17.67],
  ['it', 'it', null, 12.35, 17.81, 11.9],
  ['it', 'pt', 22.76, 14.07, 18.62, 9.67],
  ['it', 'ro', null, null, 38.03, 22.53],
  ['pt', 'en', 14.34, 9.61, 18.51, 10.68],
  ['pt', 'es', null, 9.15, 17.14, 12.91],
  ['pt', 'fr', 23.17, 14.53, 25.85, 17.69],
  ['pt', 'it', null, 14.97, 20.78, 12.92],
  ['pt', 'pt', 17.79, 11.34, 13.08, 6.04],
  ['pt', 'ro', null, null, 29.15, 16.38],
  ['ro', 'en', 3.21, 6.3, 7.29, 2.59],
  ['ro', 'es', null, 1.15, 4.09, 0.45],
  ['ro', 'fr', 5.16, 4.96, 7.28, 4.78],
  ['ro', 'it', null, 11.1, 9.25, 2.43],
  ['ro', 'pt', 5.75, 6.93, 2, 1.74],
  ['ro', 'ro', null, null, 22.17, 7]
]
const SMOS_DETAIL = [
  ['en', 'en', 4.12, 0.2, 3.46, 0.48, 3.53, 0.52, 3.9, 0.37],
  ['en', 'es', null, null, 2.74, 0.6, 3.47, 0.47, 3.84, 0.38],
  ['en', 'fr', null, null, 3.36, 0.41, 3.52, 0.5, 3.24, 0.48],
  ['en', 'it', null, null, 3.3, 0.6, 3.46, 0.44, 3.09, 0.44],
  ['en', 'pt', null, null, 3.54, 0.61, 3.46, 0.48, 3.21, 0.46],
  ['en', 'ro', null, null, null, null, 3.06, 0.44, 3.26, 0.47],
  ['es', 'en', null, null, 3.18, 0.52, 3.68, 0.5, 3.42, 0.45],
  ['es', 'es', 4.09, 0.17, 3.15, 0.56, 4.14, 0.39, 4.23, 0.39],
  ['es', 'fr', null, null, 3.58, 0.44, 3.98, 0.29, 3.59, 0.49],
  ['es', 'it', null, null, 2.88, 0.56, 3.74, 0.38, 3.16, 0.51],
  ['es', 'pt', null, null, 3.32, 0.48, 3.35, 0.49, 3.29, 0.5],
  ['es', 'ro', null, null, null, null, 3.73, 0.4, 3.72, 0.38],
  ['fr', 'en', null, null, 3.04, 0.64, 3.58, 0.39, 2.92, 0.43],
  ['fr', 'es', null, null, 3.24, 0.49, 3.7, 0.41, 3.49, 0.43],
  ['fr', 'fr', 4.05, 0.19, 3.69, 0.51, 4.05, 0.4, 3.97, 0.47],
  ['fr', 'it', null, null, 3.23, 0.45, 3.73, 0.48, 3.78, 0.41],
  ['fr', 'pt', null, null, 3.11, 0.49, 3.92, 0.33, 3.67, 0.46],
  ['fr', 'ro', null, null, null, null, 3.73, 0.46, 3.95, 0.37],
  ['it', 'en', null, null, 3.12, 0.53, 3.74, 0.38, 3.45, 0.4],
  ['it', 'es', null, null, 3.36, 0.6, 3.89, 0.43, 3.79, 0.43],
  ['it', 'fr', null, null, 3.04, 0.53, 2.94, 0.54, 3.37, 0.49],
  ['it', 'it', 4.11, 0.19, 3.63, 0.49, 3.67, 0.5, 3.58, 0.46],
  ['it', 'pt', null, null, 3.03, 0.46, 3.24, 0.44, 3.48, 0.35],
  ['it', 'ro', null, null, null, null, 3.74, 0.4, 4.03, 0.34],
  ['pt', 'en', null, null, 2.66, 0.57, 3.64, 0.47, 3.46, 0.45],
  ['pt', 'es', null, null, 3.59, 0.5, 3.5, 0.42, 3.18, 0.43],
  ['pt', 'fr', null, null, 2.59, 0.53, 3.03, 0.5, 3.31, 0.47],
  ['pt', 'it', null, null, 2.61, 0.59, 3.62, 0.41, 3.31, 0.44],
  ['pt', 'pt', 4.05, 0.19, 3.3, 0.6, 3.82, 0.42, 3.91, 0.41],
  ['pt', 'ro', null, null, null, null, 3.19, 0.57, 3.84, 0.38],
  ['ro', 'en', null, null, 3.59, 0.55, 3.18, 0.49, 3.71, 0.45],
  ['ro', 'es', null, null, 3.48, 0.53, 3.83, 0.44, 4.24, 0.37],
  ['ro', 'fr', null, null, 3.21, 0.62, 3.81, 0.36, 3.37, 0.46],
  ['ro', 'it', null, null, 3.89, 0.38, 4.03, 0.35, 3.69, 0.41],
  ['ro', 'pt', null, null, 3.41, 0.53, 3.43, 0.41, 3.56, 0.52],
  ['ro', 'ro', 3.98, 0.2, null, null, 3.98, 0.34, 4.47, 0.29]
]
const SIMILARITY_DETAIL = [
  ['en', 'en', 0.41, 0.54, [0.47, 0.57], [0.5, 0.59]],
  ['en', 'es', null, 0.48, [0.36, 0.44], [0.4, 0.47]],
  ['en', 'fr', 0.34, 0.45, [0.34, 0.43], [0.37, 0.44]],
  ['en', 'it', null, 0.46, [0.34, 0.44], [0.37, 0.46]],
  ['en', 'pt', 0.32, 0.49, [0.39, 0.47], [0.41, 0.49]],
  ['en', 'ro', null, null, [0.37, 0.46], [0.39, 0.48]],
  ['es', 'en', 0.34, 0.44, [0.36, 0.42], [0.41, 0.47]],
  ['es', 'es', null, 0.64, [0.55, 0.65], [0.59, 0.68]],
  ['es', 'fr', 0.42, 0.51, [0.4, 0.49], [0.43, 0.52]],
  ['es', 'it', null, 0.59, [0.47, 0.58], [0.51, 0.61]],
  ['es', 'pt', 0.4, 0.56, [0.46, 0.55], [0.49, 0.58]],
  ['es', 'ro', null, null, [0.45, 0.57], [0.5, 0.59]],
  ['fr', 'en', 0.35, 0.51, [0.36, 0.45], [0.39, 0.47]],
  ['fr', 'es', null, 0.6, [0.42, 0.52], [0.46, 0.55]],
  ['fr', 'fr', 0.55, 0.7, [0.55, 0.67], [0.59, 0.69]],
  ['fr', 'it', null, 0.62, [0.42, 0.54], [0.45, 0.56]],
  ['fr', 'pt', 0.38, 0.59, [0.4, 0.51], [0.45, 0.56]],
  ['fr', 'ro', null, null, [0.4, 0.52], [0.45, 0.55]],
  ['it', 'en', 0.31, 0.45, [0.35, 0.42], [0.39, 0.43]],
  ['it', 'es', null, 0.57, [0.45, 0.56], [0.5, 0.59]],
  ['it', 'fr', 0.37, 0.51, [0.37, 0.47], [0.41, 0.5]],
  ['it', 'it', null, 0.61, [0.48, 0.62], [0.52, 0.64]],
  ['it', 'pt', 0.36, 0.56, [0.43, 0.55], [0.49, 0.57]],
  ['it', 'ro', null, null, [0.45, 0.56], [0.5, 0.58]],
  ['pt', 'en', 0.33, 0.46, [0.38, 0.44], [0.41, 0.46]],
  ['pt', 'es', null, 0.54, [0.42, 0.51], [0.45, 0.53]],
  ['pt', 'fr', 0.36, 0.51, [0.38, 0.47], [0.42, 0.49]],
  ['pt', 'it', null, 0.56, [0.43, 0.52], [0.45, 0.55]],
  ['pt', 'pt', 0.38, 0.6, [0.49, 0.58], [0.53, 0.62]],
  ['pt', 'ro', null, null, [0.43, 0.51], [0.47, 0.54]],
  ['ro', 'en', 0.37, 0.52, [0.41, 0.5], [0.43, 0.52]],
  ['ro', 'es', null, 0.63, [0.5, 0.6], [0.53, 0.63]],
  ['ro', 'fr', 0.45, 0.58, [0.43, 0.55], [0.46, 0.56]],
  ['ro', 'it', null, 0.66, [0.5, 0.61], [0.53, 0.64]],
  ['ro', 'pt', 0.44, 0.66, [0.5, 0.61], [0.54, 0.64]],
  ['ro', 'ro', null, null, [0.53, 0.67], [0.57, 0.69]]
]
const MOS_DETAIL = [
  ['en', 'en', [3.61, 0.24], [3.2, 0.65], [2.83, 0.45], [3.12, 0.55]],
  ['en', 'es', null, [3.86, 0.46], [3.11, 0.42], [3.55, 0.44]],
  ['en', 'fr', null, [3.65, 0.4], [3.53, 0.45], [3.28, 0.39]],
  ['en', 'it', null, [3.21, 0.55], [3.27, 0.5], [3.37, 0.44]],
  ['en', 'pt', null, [3.55, 0.45], [3.22, 0.4], [3, 0.44]],
  ['en', 'ro', null, null, [4.12, 0.42], [3.47, 0.47]],
  ['es', 'en', null, [2.86, 0.53], [3.33, 0.51], [3.06, 0.51]],
  ['es', 'es', [3.77, 0.2], [3.55, 0.43], [4, 0.37], [3.27, 0.44]],
  ['es', 'fr', null, [3.46, 0.54], [3.36, 0.36], [3.42, 0.39]],
  ['es', 'it', null, [3.43, 0.52], [3.41, 0.51], [3.5, 0.48]],
  ['es', 'pt', null, [3.5, 0.45], [4, 0.32], [3.29, 0.52]],
  ['es', 'ro', null, null, [3.29, 0.38], [3.78, 0.33]],
  ['fr', 'en', null, [3.22, 0.61], [3.46, 0.45], [3.13, 0.45]],
  ['fr', 'es', null, [3.46, 0.61], [3.78, 0.47], [3.58, 0.45]],
  ['fr', 'fr', [3.8, 0.22], [3.5, 0.42], [3.56, 0.4], [3.11, 0.43]],
  ['fr', 'it', null, [3.47, 0.54], [3.36, 0.48], [3.55, 0.43]],
  ['fr', 'pt', null, [3.54, 0.53], [3.81, 0.39], [3.33, 0.49]],
  ['fr', 'ro', null, null, [3.22, 0.46], [3.14, 0.33]],
  ['it', 'en', null, [3.32, 0.52], [2.84, 0.44], [3.03, 0.5]],
  ['it', 'es', null, [3.97, 0.47], [3.7, 0.4], [3.39, 0.46]],
  ['it', 'fr', null, [3.61, 0.39], [2.94, 0.45], [3.33, 0.47]],
  ['it', 'it', [3.82, 0.21], [3.4, 0.46], [3.09, 0.46], [3.75, 0.47]],
  ['it', 'pt', null, [2.78, 0.64], [3.03, 0.46], [3.13, 0.45]],
  ['it', 'ro', null, null, [3.76, 0.33], [3.23, 0.49]],
  ['pt', 'en', null, [3.3, 0.52], [3.34, 0.52], [3.25, 0.5]],
  ['pt', 'es', null, [3.68, 0.5], [3.79, 0.4], [3.11, 0.42]],
  ['pt', 'fr', null, [3.12, 0.49], [3.75, 0.42], [3.31, 0.44]],
  ['pt', 'it', null, [3.84, 0.45], [3.37, 0.4], [3.38, 0.44]],
  ['pt', 'pt', [3.88, 0.17], [3.38, 0.45], [3.31, 0.43], [3.41, 0.49]],
  ['pt', 'ro', null, null, [3.62, 0.41], [3.39, 0.47]],
  ['ro', 'en', null, [3.17, 0.47], [3.17, 0.52], [3.42, 0.45]],
  ['ro', 'es', null, [3.82, 0.49], [3.89, 0.4], [3.88, 0.38]],
  ['ro', 'fr', null, [3.59, 0.43], [3.79, 0.35], [3.15, 0.37]],
  ['ro', 'it', null, [3.7, 0.44], [3.44, 0.5], [3.55, 0.3]],
  ['ro', 'pt', null, [3.32, 0.53], [2.88, 0.44], [3.68, 0.41]],
  ['ro', 'ro', [3.46, 0.24], null, [3.74, 0.36], [2.91, 0.49]]
]

// --- FUNÇÕES DE RENDERIZAÇÃO ---

function formatCell (value, digits = 2) {
  return value == null || value === undefined
    ? '<span class="muted">—</span>'
    : parseFloat(value).toFixed(digits)
}

// Função para preencher tabelas simples (resumos)
function fillSimpleTable (tableId, data, hasHeader = false) {
  const tb = document.querySelector(`#${tableId} tbody`)
  if (!tb) return
  tb.innerHTML = data
    .map(row => {
      const cells = row
        .map((cell, i) => {
          const content =
            cell === null || cell === undefined
              ? '<span class="muted">—</span>'
              : typeof cell === 'number'
              ? cell.toFixed(2)
              : cell
          return `<td>${content}</td>`
        })
        .join('')
      return `<tr>${cells}</tr>`
    })
    .join('')
}

function renderSummaryTables () {
  fillSimpleTable('tbl-demog', DEMOG_DATA)
  fillSimpleTable('tbl-wer-summary', WER_SUMMARY)
  fillSimpleTable('tbl-smos-mos-summary', SMOS_MOS_SUMMARY)
}

function renderGroupedWerTable () {
  const tb = document.querySelector('#tbl-wer-detail tbody')
  if (!tb) return
  let currentGroup = '',
    html = ''
  WER_DETAIL.forEach(row => {
    const [src, tgt, ...scores] = row
    // if (src !== currentGroup) {
    //   currentGroup = src
    //   const langName = LANG_NAMES[src] || src.toUpperCase()
    //   html += `<tr class="group-header"><th colspan="6" scope="colgroup">Source: ${langName} (${src.toUpperCase()})</th></tr>`
    // }
    html += `<tr><td>${src.toUpperCase()}</td><td>${tgt.toUpperCase()}</td><td>${formatCell(
      scores[0]
    )}</td><td>${formatCell(scores[1])}</td><td>${formatCell(
      scores[2]
    )}</td><td>${formatCell(scores[3])}</td></tr>`
  })
  tb.innerHTML = html
}
function renderGroupedSmosTable () {
  const tb = document.querySelector('#tbl-smos-detail tbody')
  if (!tb) return
  function formatSmosCell (mean, ci) {
    return mean == null || mean === undefined
      ? '<span class="muted">—</span>'
      : `${mean.toFixed(2)}<span class="ci">&plusmn; ${ci.toFixed(2)}</span>`
  }
  let currentGroup = '',
    html = ''
  SMOS_DETAIL.forEach(row => {
    const [src, tgt, realM, realCI, xttsM, xttsCI, ftM, ftCI, dpoM, dpoCI] = row
    // if (src !== currentGroup) {
    //   currentGroup = src
    //   const langName = LANG_NAMES[src] || src.toUpperCase()
    //   html += `<tr class="group-header"><th colspan="6" scope="colgroup">Source: ${langName} (${src.toUpperCase()})</th></tr>`
    // }
    html += `<tr><td>${src.toUpperCase()}</td><td>${tgt.toUpperCase()}</td><td>${formatSmosCell(
      realM,
      realCI
    )}</td><td>${formatSmosCell(xttsM, xttsCI)}</td><td>${formatSmosCell(
      ftM,
      ftCI
    )}</td><td>${formatSmosCell(dpoM, dpoCI)}</td></tr>`
  })
  tb.innerHTML = html
}
function renderSimilarityTable () {
  const tb = document.querySelector('#tbl-similarity-detail tbody')
  if (!tb) return
  let currentGroup = '',
    html = ''
  SIMILARITY_DETAIL.forEach(row => {
    const [src, tgt, yourTTS, xtts, fineTuned, dpo] = row
    // if (src !== currentGroup) {
    //   currentGroup = src
    //   const langName = LANG_NAMES[src] || src.toUpperCase()
    //   html += `<tr class="group-header"><th colspan="6" scope="colgroup">Source: ${langName} (${src.toUpperCase()})</th></tr>`
    // }
    const simO_values = [yourTTS, xtts, fineTuned?.[0], dpo?.[0]].filter(
      v => v !== null
    )
    const bestSimO = simO_values.length > 0 ? Math.max(...simO_values) : -1
    const cellYourTTS =
      yourTTS !== null
        ? yourTTS === bestSimO
          ? `<b>${formatCell(yourTTS)}</b>`
          : formatCell(yourTTS)
        : formatCell(null)
    const cellXTTS =
      xtts !== null
        ? xtts === bestSimO
          ? `<b>${formatCell(xtts)}</b>`
          : formatCell(xtts)
        : formatCell(null)
    function formatOurModelCell (data) {
      if (data === null) return formatCell(null)
      const [simO, simE] = data
      const formattedSimO =
        simO === bestSimO ? `<b>${formatCell(simO)}</b>` : formatCell(simO)
      const formattedSimE =
        simE > bestSimO ? `<u>${formatCell(simE)}</u>` : formatCell(simE)
      return `${formattedSimO} / ${formattedSimE}`
    }
    html += `<tr><td>${src.toUpperCase()}</td><td>${tgt.toUpperCase()}</td><td>${cellYourTTS}</td><td>${cellXTTS}</td><td>${formatOurModelCell(
      fineTuned
    )}</td><td>${formatOurModelCell(dpo)}</td></tr>`
  })
  tb.innerHTML = html
}
function renderMosTable () {
  const tb = document.querySelector('#tbl-mos-detail tbody')
  if (!tb) return
  function formatMosCell (data) {
    if (data === null) return formatCell(null)
    return `${formatCell(data[0])}<span class="ci">&plusmn; ${formatCell(
      data[1]
    )}</span>`
  }
  let currentGroup = '',
    html = ''
  MOS_DETAIL.forEach(row => {
    const [src, tgt, baseline, xtts, fineTuned, dpo] = row
    // if (src !== currentGroup) {
    //   currentGroup = src
    //   const langName = LANG_NAMES[src] || src.toUpperCase()
    //   html += `<tr class="group-header"><th colspan="6" scope="colgroup">Source: ${langName} (${src.toUpperCase()})</th></tr>`
    // }
    const generated_means = [xtts?.[0], fineTuned?.[0], dpo?.[0]].filter(
      v => v !== null && v !== undefined
    )
    const bestMean =
      generated_means.length > 0 ? Math.max(...generated_means) : -1
    const cellBaseline = baseline
      ? `<b>${formatMosCell(baseline)}</b>`
      : formatCell(null)
    let cellXtts = formatMosCell(xtts)
    let cellFineTuned = formatMosCell(fineTuned)
    let cellDpo = formatMosCell(dpo)
    if (xtts && xtts[0] === bestMean) cellXtts = `<u>${cellXtts}</u>`
    if (fineTuned && fineTuned[0] === bestMean)
      cellFineTuned = `<u>${cellFineTuned}</u>`
    if (dpo && dpo[0] === bestMean) cellDpo = `<u>${cellDpo}</u>`
    html += `<tr><td>${src.toUpperCase()}</td><td>${tgt.toUpperCase()}</td><td>${cellBaseline}</td><td>${cellXtts}</td><td>${cellFineTuned}</td><td>${cellDpo}</td></tr>`
  })
  tb.innerHTML = html
}

// --- CHAMADA PRINCIPAL ---
;(function renderAllTables () {
  renderSummaryTables()
  renderGroupedWerTable()
  renderGroupedSmosTable()
  renderSimilarityTable()
  renderMosTable()
})()
