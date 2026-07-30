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
