// CarrelagePro - Specialized Tiling Artisan Web Application Logic

const tileCatalog = [
  // 1. SOLS INTÉRIEURS
  {
    id: 'c1',
    sub: 'sol',
    title: 'Pose carrelage grès cérame 60x60 cm au sol',
    desc: 'Pose droite au mortier-colle C2S1 haute adhérence, croisillons autonivelants & joints flex 2mm.',
    price: 48.00,
    unit: 'm²',
    tva: 10
  },
  {
    id: 'c2',
    sub: 'sol',
    title: 'Pose carrelage XXL grand format (80x80 / 120x120 cm)',
    desc: 'Double encollage mortier-colle C2S1, nivellement au système à cales & joints fins rasants.',
    price: 65.00,
    unit: 'm²',
    tva: 10
  },
  {
    id: 'c3',
    sub: 'sol',
    title: 'Pose carrelage imitation parquet (20x120 cm)',
    desc: 'Pose décalée au tiers au mortier-colle flex avec joints fins 2mm assortis ton bois.',
    price: 55.00,
    unit: 'm²',
    tva: 10
  },
  {
    id: 'c4',
    sub: 'sol',
    title: 'Pose carrelage en chevron / bâton rompu',
    desc: 'Pose technique en chevron au mortier-colle haute adhérence avec tracés de précision.',
    price: 62.00,
    unit: 'm²',
    tva: 10
  },
  {
    id: 'c5',
    sub: 'sol',
    title: 'Pose de dalles travertin pierre naturelle (Opus 4 formats)',
    desc: 'Pose travertin Opus 4 formats au mortier-colle blanc C2TE & imperméabilisant hydrofuge.',
    price: 58.00,
    unit: 'm²',
    tva: 10
  },
  {
    id: 'c6',
    sub: 'sol',
    title: 'Pose carreaux de ciment traditionnels décoratifs',
    desc: 'Pose délicate au mortier-colle blanc sans battage + traitement bouche-pore hydrofuge.',
    price: 78.00,
    unit: 'm²',
    tva: 10
  },
  {
    id: 'c7',
    sub: 'sol',
    title: 'Pose de plinthes en carrelage assorties',
    desc: 'Collage au mortier-colle, alignement des joints sol & joint d\'étanchéité silicone périphérique.',
    price: 14.50,
    unit: 'mètre',
    tva: 10
  },

  // 2. FAÏENCE MURALE & SDB
  {
    id: 'c8',
    sub: 'mur',
    title: 'Pose de faïence murale grand format en salle de bain',
    desc: 'Encollage mural au mortier-colle pâte D2, découpes sorties d\'eau & joints hydrofuges anti-moisissures.',
    price: 58.00,
    unit: 'm²',
    tva: 10
  },
  {
    id: 'c9',
    sub: 'mur',
    title: 'Pose de carreaux métro biseautés (10x20 cm)',
    desc: 'Pose droite ou décalée au mortier-colle blanc avec alignement rigoureux des alignements.',
    price: 62.00,
    unit: 'm²',
    tva: 10
  },
  {
    id: 'c10',
    sub: 'mur',
    title: 'Pose de mosaïque & pâte de verre (Douche italienne / Hammam)',
    desc: 'Encollage sur trame au mortier-colle blanc spécial & jointoiement époxy étanche bi-composant.',
    price: 85.00,
    unit: 'm²',
    tva: 10
  },
  {
    id: 'c11',
    sub: 'mur',
    title: 'Habillage de bâti-support WC suspendu en faïence',
    desc: 'Découpes sur mesure des trappes de visite & plaque de commande, profilés d\'angles alu chromé.',
    price: 180.00,
    unit: 'forfait',
    tva: 10
  },
  {
    id: 'c12',
    sub: 'mur',
    title: 'Pose de profilés / baguettes d\'angles métalliques (Alu/Inox)',
    desc: 'Profilés de finition d\'angles sortants alu brossé ou inox brillant scellés sous le carrelage.',
    price: 12.00,
    unit: 'mètre',
    tva: 10
  },

  // 3. EXTÉRIEUR & TERRASSES
  {
    id: 'c13',
    sub: 'ext',
    title: 'Pose de dalles carrelage extérieur sur plots réglables (20 mm)',
    desc: 'Pose à sec de dalles grès cérame épaisseur 20mm sur plots polypropylène autonivelants réglables.',
    price: 45.00,
    unit: 'm²',
    tva: 10
  },
  {
    id: 'c14',
    sub: 'ext',
    title: 'Pose de carrelage terrasse extérieure coller sur dalle',
    desc: 'Double enclollage mortier-colle C2S1 extérieur résistant au gel & joints souples d\'extension.',
    price: 52.00,
    unit: 'm²',
    tva: 10
  },
  {
    id: 'c15',
    sub: 'ext',
    title: 'Pose de margelles de piscine antidérapantes',
    desc: 'Pose au mortier-colle flex résistant au chlore/sel & joints d\'étanchéité souple polyurethane.',
    price: 38.00,
    unit: 'mètre',
    tva: 10
  },

  // 4. CHAPE, RAGRÉAGE & SPEC
  {
    id: 'c16',
    sub: 'prepa',
    title: 'Ragréage autonivelant fibré haute résistance (5 à 20 mm)',
    desc: 'Application d\'un primaire d\'accrochage + coulage d\'un enduit autolissant fibré rattrapage de niveau.',
    price: 22.00,
    unit: 'm²',
    tva: 10
  },
  {
    id: 'c17',
    sub: 'prepa',
    title: 'Système de Protection à l\'Eau sous Carrelage (SPEC)',
    desc: 'Application de 2 passes de résine d\'étanchéité avec bandes d\'armature élastomère d\'angles.',
    price: 19.50,
    unit: 'm²',
    tva: 10
  },
  {
    id: 'c18',
    sub: 'prepa',
    title: 'Coulage de chape traditionnelle ciment tirée à la règle (5 cm)',
    desc: 'Chape de mortier ciment pour mise à niveau des sols avant pose de carrelage avec treillis de structure.',
    price: 35.00,
    unit: 'm²',
    tva: 10
  },
  {
    id: 'c19',
    sub: 'prepa',
    title: 'Dépose de carrelage existant & évacuation en déchetterie',
    desc: 'Burinage manuel ou mécanique du carrelage existant, grattage colle & mise en déchetterie.',
    price: 25.00,
    unit: 'm²',
    tva: 10
  }
];

let activeItems = [
  {
    desc: 'Pose carrelage grès cérame 60x60 cm au sol - Séjour / Cuisine (Mortier-colle C2S1 & joints flex 2mm)',
    qty: 35.00,
    price: 48.00,
    tva: 10
  },
  {
    desc: 'Pose de plinthes en carrelage assorties au sol',
    qty: 24.00,
    price: 14.50,
    tva: 10
  },
  {
    desc: 'Ragréage autonivelant fibré haute résistance (Rattrapage de niveau 10mm)',
    qty: 35.00,
    price: 22.00,
    tva: 10
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Set default dates
  const today = new Date().toISOString().split('T')[0];
  const dueDate = new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0];
  document.getElementById('doc-date').value = today;
  document.getElementById('doc-due').value = dueDate;

  // Render initial items table & preview
  renderItemsTable();
  updatePaperPreview();

  // Calculator inputs event listener
  ['calc-length', 'calc-width', 'calc-pose-type'].forEach(id => {
    document.getElementById(id).addEventListener('input', calculateSurfaceAndGlue);
  });

  document.getElementById('inject-calc-to-devis').addEventListener('click', injectCalculatorToDevis);

  // Form inputs binding to live preview
  const inputsToBind = [
    'doc-number', 'doc-date', 'doc-due', 'sender-name', 'sender-siret',
    'sender-address', 'client-name', 'client-address', 'acompte-select', 'legal-notes'
  ];

  inputsToBind.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updatePaperPreview);
  });

  // Modal triggers
  const modal = document.getElementById('tile-cat-modal');
  const openBtn = document.getElementById('open-tile-cat-btn');
  const openDirectBtn = document.getElementById('open-cat-direct-btn');
  const closeBtn = document.getElementById('close-tile-cat-modal');

  if (openBtn) openBtn.addEventListener('click', () => { renderTileCatalogGrid('all'); modal.style.display = 'flex'; });
  if (openDirectBtn) openDirectBtn.addEventListener('click', () => { renderTileCatalogGrid('all'); modal.style.display = 'flex'; });
  if (closeBtn) closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });

  // Filter pills
  document.querySelectorAll('.tile-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tile-filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const sub = e.target.getAttribute('data-sub');
      renderTileCatalogGrid(sub);
    });
  });

  // Search filter inside modal
  const searchInput = document.getElementById('tile-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      renderTileCatalogGrid('all', q);
    });
  }

  // Add line button
  document.getElementById('add-tile-line-btn').addEventListener('click', () => {
    activeItems.push({
      desc: 'Nouvelle prestation carrelage sur mesure',
      qty: 1,
      price: 45.00,
      tva: 10
    });
    renderItemsTable();
    updatePaperPreview();
  });

  // PDF Export
  document.getElementById('download-pdf-btn').addEventListener('click', () => {
    const paper = document.getElementById('invoice-paper');
    const docNum = document.getElementById('doc-number').value || 'Devis-Carrelage';
    
    const opt = {
      margin: [10, 10, 10, 10],
      filename: `${docNum}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(paper).save();
  });

  // Print button
  document.getElementById('print-btn').addEventListener('click', () => window.print());
});

// Calculator Math Function
function calculateSurfaceAndGlue() {
  const l = parseFloat(document.getElementById('calc-length').value) || 0;
  const w = parseFloat(document.getElementById('calc-width').value) || 0;
  const wastePercent = parseFloat(document.getElementById('calc-pose-type').value) || 5;

  const netArea = l * w;
  const grossArea = netArea * (1 + wastePercent / 100);
  const glueBags = Math.ceil((grossArea * 5) / 25); // 5kg/m², 25kg bag

  document.getElementById('res-net-area').innerText = `${netArea.toFixed(2)} m²`;
  document.getElementById('res-gross-area').innerText = `${grossArea.toFixed(2)} m²`;
  document.getElementById('res-glue-bags').innerText = `${glueBags} sacs (25kg)`;

  return { netArea, grossArea, glueBags };
}

// Inject Calculator Result to Table
function injectCalculatorToDevis() {
  const calc = calculateSurfaceAndGlue();
  if (calc.grossArea <= 0) {
    alert('Veuillez d\'abord saisir la longueur et la largeur de la pièce.');
    return;
  }

  activeItems.push({
    desc: `Pose de carrelage au sol (${calc.netArea.toFixed(2)}m² net + ${calc.grossArea.toFixed(2)}m² commandé avec chutes)`,
    qty: parseFloat(calc.grossArea.toFixed(2)),
    price: 52.00,
    tva: 10
  });

  renderItemsTable();
  updatePaperPreview();
}

// Render Form Table
function renderItemsTable() {
  const tbody = document.getElementById('items-body');
  tbody.innerHTML = '';

  activeItems.forEach((item, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="text" value="${item.desc}" onchange="updateItemField(${index}, 'desc', this.value)"></td>
      <td><input type="number" value="${item.qty}" step="0.1" min="0" onchange="updateItemField(${index}, 'qty', this.value)"></td>
      <td><input type="number" value="${item.price}" step="0.5" min="0" onchange="updateItemField(${index}, 'price', this.value)"></td>
      <td>
        <select onchange="updateItemField(${index}, 'tva', this.value)">
          <option value="10" ${item.tva == 10 ? 'selected' : ''}>10%</option>
          <option value="20" ${item.tva == 20 ? 'selected' : ''}>20%</option>
          <option value="5.5" ${item.tva == 5.5 ? 'selected' : ''}>5.5%</option>
        </select>
      </td>
      <td class="text-center">
        <button type="button" class="btn btn-sm btn-outline text-amber" onclick="deleteItemLine(${index})">&times;</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function updateItemField(index, field, val) {
  if (field === 'qty' || field === 'price' || field === 'tva') {
    activeItems[index][field] = parseFloat(val) || 0;
  } else {
    activeItems[index][field] = val;
  }
  updatePaperPreview();
}

function deleteItemLine(index) {
  activeItems.splice(index, 1);
  renderItemsTable();
  updatePaperPreview();
}

// Update Live Preview Paper
function updatePaperPreview() {
  document.getElementById('prev-sender-siret').innerText = document.getElementById('sender-siret').value;
  document.getElementById('prev-sender-address').innerText = document.getElementById('sender-address').value;
  document.getElementById('prev-doc-number').innerText = 'N° ' + document.getElementById('doc-number').value;
  document.getElementById('prev-doc-date').innerText = document.getElementById('doc-date').value;
  document.getElementById('prev-doc-due').innerText = document.getElementById('doc-due').value;
  document.getElementById('prev-client-name').innerText = document.getElementById('client-name').value || 'Client Chantier';
  document.getElementById('prev-client-address').innerText = document.getElementById('client-address').value || 'Adresse du chantier';
  document.getElementById('prev-legal-notes').innerText = document.getElementById('legal-notes').value;

  const tbody = document.getElementById('prev-items-body');
  tbody.innerHTML = '';

  let subtotal = 0;
  let totalTva = 0;

  activeItems.forEach(item => {
    const lineTotal = item.qty * item.price;
    const lineTva = lineTotal * (item.tva / 100);
    subtotal += lineTotal;
    totalTva += lineTva;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="text-left">${item.desc}</td>
      <td class="text-center">${item.qty}</td>
      <td class="text-right">${item.price.toFixed(2)} €</td>
      <td class="text-center">${item.tva}%</td>
      <td class="text-right">${lineTotal.toFixed(2)} €</td>
    `;
    tbody.appendChild(tr);
  });

  const totalTtc = subtotal + totalTva;
  const acomptePct = parseFloat(document.getElementById('acompte-select').value) || 30;
  const deposit = totalTtc * (acomptePct / 100);
  const netPayable = totalTtc - deposit;

  document.getElementById('prev-subtotal').innerText = `${subtotal.toFixed(2)} €`;
  document.getElementById('prev-tva').innerText = `${totalTva.toFixed(2)} €`;
  document.getElementById('prev-total-ttc').innerText = `${totalTtc.toFixed(2)} €`;
  document.getElementById('prev-deposit').innerText = `${deposit.toFixed(2)} € (${acomptePct}%)`;
  document.getElementById('prev-net-payable').innerText = `${netPayable.toFixed(2)} €`;
}

// Render Tile Catalog Modal Grid
function renderTileCatalogGrid(subFilter = 'all', searchQuery = '') {
  const container = document.getElementById('tile-grid-container');
  container.innerHTML = '';

  const filtered = tileCatalog.filter(item => {
    const matchesSub = (subFilter === 'all' || item.sub === subFilter);
    const matchesQuery = !searchQuery || item.title.toLowerCase().includes(searchQuery) || item.desc.toLowerCase().includes(searchQuery);
    return matchesSub && matchesQuery;
  });

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'tile-cat-card';
    card.innerHTML = `
      <div class="tile-card-header">
        <span class="tile-card-title">${item.title}</span>
        <span class="tile-price-tag">${item.price.toFixed(2)} € / ${item.unit}</span>
      </div>
      <p class="tile-card-desc">${item.desc}</p>
      <button class="btn btn-sm btn-primary style="width: 100%;" onclick="addCatalogItemToDevis('${item.id}')">
        <i class="fa-solid fa-plus"></i> Ajouter au Devis
      </button>
    `;
    container.appendChild(card);
  });
}

function addCatalogItemToDevis(itemId) {
  const found = tileCatalog.find(i => i.id === itemId);
  if (found) {
    activeItems.push({
      desc: `${found.title} - (${found.desc})`,
      qty: 1,
      price: found.price,
      tva: found.tva
    });
    renderItemsTable();
    updatePaperPreview();
    document.getElementById('tile-cat-modal').style.display = 'none';
  }
}



// ==========================================================================
// BTP QUOTE AUDIT & COMPARATOR LOGIC ENGINE
// ==========================================================================

function switchAuditTab(tabName) {
  const bAudit = document.getElementById('tab-btn-audit');
  const bComp = document.getElementById('tab-btn-compare');
  const cAudit = document.getElementById('tab-content-audit');
  const cComp = document.getElementById('tab-content-compare');

  if (bAudit) bAudit.classList.remove('active');
  if (bComp) bComp.classList.remove('active');

  if (tabName === 'audit') {
    if (bAudit) bAudit.classList.add('active');
    if (cAudit) cAudit.style.display = 'block';
    if (cComp) cComp.style.display = 'none';
  } else {
    if (bComp) bComp.classList.add('active');
    if (cAudit) cAudit.style.display = 'none';
    if (cComp) cComp.style.display = 'block';
  }
}

function runQuoteAudit() {
  const container = document.getElementById('audit-results-container');
  if (!container) return;

  let score = 100;
  const issues = [];
  const passes = [];
  const omissions = [];

  let subtotal = 0;
  const items = window.activeItems || [];
  
  items.forEach(item => {
    subtotal += (item.qty * item.price);
  });

  if (items.length === 0) {
    container.innerHTML = `
      <div class="p-3 rounded card-bg-subtle text-amber text-center">
        <i class="fa-solid fa-triangle-exclamation"></i> Votre devis ne contient aucune ligne de prestation. Ajoutez des éléments pour lancer l'analyse.
      </div>`;
    return;
  }

  // Check Unit Prices
  items.forEach((item) => {
    const desc = (item.desc || '').toLowerCase();
    
    if (item.price < 15 && item.unit !== 'mètre') {
      score -= 10;
      issues.push({
        type: 'danger',
        title: `Sous-chiffrage potentiel : "${item.desc}" (${item.price}€)`,
        detail: `Le tarif unitaire de ${item.price}€ est bas. Risque de perte de marge sur la main-d'œuvre.`
      });
    }
    
    if (item.price > 130 && !desc.includes('forfait') && !desc.includes('bâti') && !desc.includes('meuble')) {
      issues.push({
        type: 'warning',
        title: `Tarif haut de gamme : "${item.desc}" (${item.price}€)`,
        detail: `Tarif supérieur à la moyenne. Précisez la marque et la haute qualité au client.`
      });
    }
  });

  // Check Technical Omissions
  const fullText = items.map(i => (i.desc || '').toLowerCase()).join(' ');
  
  if (!fullText.includes('ragréage') && !fullText.includes('chape') && !fullText.includes('support') && !fullText.includes('enduit')) {
    score -= 15;
    omissions.push('Préparation des supports (Ragréage autolissant / Chape / Primaires) non mentionnée.');
  }

  if (fullText.includes('douche') || fullText.includes('bain') || fullText.includes('eau') || fullText.includes('sdb')) {
    if (!fullText.includes('spec') && !fullText.includes('étanchéité')) {
      score -= 15;
      omissions.push('Système d'étanchéité SPEC (Obligatoire DTU en pièces humides) non mentionné !');
    }
  }

  if (!fullText.includes('joint')) {
    score -= 10;
    omissions.push('Mortier de jointoiement ou joints souples d'étanchéité non précisés.');
  }

  // Check Legal Compliance
  const siretEl = document.getElementById('sender-siret');
  const clientEl = document.getElementById('client-name');
  const siret = siretEl ? siretEl.value : '';
  const clientName = clientEl ? clientEl.value : '';

  if (siret && (siret.includes('SIRET') || siret.includes('Décennale'))) {
    passes.push('Mentions légales SIRET & Assurance Décennale renseignées.');
  } else {
    score -= 10;
    issues.push({
      type: 'warning',
      title: 'Mention d'Assurance Décennale recommandée',
      detail: 'Indiquez le nom et le numéro de votre police d'assurance Décennale.'
    });
  }

  if (clientName && clientName.trim().length > 2) {
    passes.push('Client & Adresse du chantier bien identifiés.');
  } else {
    score -= 5;
    issues.push({
      type: 'warning',
      title: 'Nom du client à renseigner',
      detail: 'Saisissez le nom et l'adresse du destinataire pour valider la conformité juridique.'
    });
  }

  score = Math.max(20, Math.min(100, score));

  let scoreColor = '#10b981';
  let scoreText = 'Excellent Devis Conforme & Rentable (Normes BTP Validées)';
  if (score < 85) { scoreColor = '#f59e0b'; scoreText = 'Devis Bon - Quelques optimisations recommandées'; }
  if (score < 65) { scoreColor = '#ef4444'; scoreText = 'Devis à réviser - Risques d'omission & de marge'; }

  let html = `
    <div class="p-3 rounded text-center card-bg-subtle mb-3" style="border: 1px solid ${scoreColor};">
      <span class="audit-score-badge" style="color: ${scoreColor}; font-size: 24px; font-weight: 800;">
        <i class="fa-solid fa-chart-line"></i> Score d'Audit BTP : ${score} / 100
      </span>
      <p class="mt-1" style="color: ${scoreColor}; font-weight: 600;">${scoreText}</p>
    </div>
  `;

  if (omissions.length > 0) {
    html += `
      <div class="audit-card-item danger">
        <strong style="color: #f59e0b;"><i class="fa-solid fa-triangle-exclamation"></i> Détection d'Omissions Prestations (Normes BTP & DTU) :</strong>
        <ul class="mt-1 pl-3 small text-muted">
          ${omissions.map(o => `<li>${o}</li>`).join('')}
        </ul>
      </div>`;
  }

  if (issues.length > 0) {
    html += issues.map(iss => `
      <div class="audit-card-item ${iss.type}">
        <strong>${iss.title}</strong>
        <p class="small text-muted mt-1">${iss.detail}</p>
      </div>
    `).join('');
  }

  if (passes.length > 0) {
    html += `
      <div class="audit-card-item success">
        <strong style="color: #10b981;"><i class="fa-solid fa-circle-check"></i> Points Forts & Conformités Validées :</strong>
        <ul class="mt-1 pl-3 small text-muted">
          ${passes.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>`;
  }

  container.innerHTML = html;
}

function compareQuotes() {
  const container = document.getElementById('compare-results-container');
  if (!container) return;

  const priceA = parseFloat(document.getElementById('comp-a-price').value) || 0;
  const priceB = parseFloat(document.getElementById('comp-b-price').value) || 0;
  const detailsA = document.getElementById('comp-a-details').value || '';
  const detailsB = document.getElementById('comp-b-details').value || '';

  if (priceA <= 0 || priceB <= 0) {
    container.innerHTML = `
      <div class="p-3 rounded card-bg-subtle text-amber text-center">
        Veuillez saisir le montant HT des 2 devis pour générer l'analyse comparative.
      </div>`;
    return;
  }

  const diff = priceA - priceB;
  const diffPct = ((diff / priceB) * 100).toFixed(1);

  let statusBadge = '';
  let adviceText = '';

  if (diff > 0) {
    statusBadge = `<span class="diff-badge higher" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b; padding: 6px 12px; border-radius: 20px; font-weight: 700;">+${diff.toFixed(2)} € (+${diffPct}%) par rapport au concurrent</span>`;
    adviceText = `
      <h5 class="text-amber mt-2"><i class="fa-solid fa-lightbulb"></i> Argumentaire Commercial & Explication de l'Écart (+${diff.toFixed(2)}€) :</h5>
      <div class="card-bg-subtle p-3 rounded mt-2 border">
        <p class="small text-muted">
          Votre devis est supérieur de <strong>${diff.toFixed(2)} €</strong> (+${diffPct}%).<br><br>
          <strong>Argumentaire pour convaincre le client :</strong><br>
          • Exposez clairement votre garantie décennale et la qualité des mortiers-colles / finitions.<br>
          • Montrez au client que le devis concurrent omet souvent des étapes cruciales (ragréage, étanchéité SPEC, nettoyage chantier).<br>
          • Valorisez vos détails techniques : <em>${detailsA || 'Matériaux certifiés NF & finitions haut de gamme'}</em>.
        </p>
      </div>`;
  } else if (diff < 0) {
    const absDiff = Math.abs(diff);
    const absPct = Math.abs(diffPct);
    statusBadge = `<span class="diff-badge lower" style="background: rgba(16, 185, 129, 0.2); color: #10b981; padding: 6px 12px; border-radius: 20px; font-weight: 700;">-${absDiff.toFixed(2)} € (-${absPct}%) plus compétitif</span>`;
    adviceText = `
      <h5 class="text-emerald mt-2"><i class="fa-solid fa-circle-check"></i> Avantage Tarifaire Compétitif (-${absDiff.toFixed(2)}€) :</h5>
      <div class="card-bg-subtle p-3 rounded mt-2 border">
        <p class="small text-muted">
          Votre offre est <strong>${absDiff.toFixed(2)} €</strong> plus avantageuse que celle du concurrent.<br><br>
          <strong>Conseil :</strong> Vous disposez d'un excellent positionnement prix. Rasurez le client sur le fait que vos tarifs attractifs n'altèrent en rien la qualité professionnelle des finitions et des garanties BTP.
        </p>
      </div>`;
  } else {
    statusBadge = `<span class="diff-badge" style="background: rgba(99, 102, 241, 0.2); color: #6366f1; padding: 6px 12px; border-radius: 20px; font-weight: 700;">Prix Identiques (Écart 0.00 €)</span>`;
    adviceText = `<p class="small text-muted mt-2">Les 2 devis affichent un tarif strictement identique. La différence se fera sur la rapidité d'exécution et les garanties d'assurance.</p>`;
  }

  container.innerHTML = `
    <div class="p-3 rounded card-bg text-center border mt-2">
      <div class="mb-2">${statusBadge}</div>
      ${adviceText}
    </div>
  `;
}

