// ===== NESTLY SEARCH & FILTER =====

const searchInput = document.getElementById('search-input');
const cityFilter = document.getElementById('city-filter');
const bedsFilter = document.getElementById('beds-filter');
const priceFilter = document.getElementById('price-filter');
const listingsGrid = document.getElementById('listings-grid');
const resultsCount = document.getElementById('results-count');

function filterListings() {
  if (!listingsGrid) return;

  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
  const selectedCity = cityFilter ? cityFilter.value.toLowerCase() : '';
  const selectedBeds = bedsFilter ? bedsFilter.value : '';
  const selectedPrice = priceFilter ? priceFilter.value : '';

  const cards = listingsGrid.querySelectorAll('.property-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const cardCity = card.getAttribute('data-city') || '';
    const cardBeds = card.getAttribute('data-beds') || '';
    const cardPrice = parseInt(card.getAttribute('data-price')) || 0;
    const cardText = card.innerText.toLowerCase();

    const matchesSearch = cardText.includes(searchTerm);
    const matchesCity = selectedCity === '' || cardCity.includes(selectedCity);
    const matchesBeds = selectedBeds === '' || cardBeds === selectedBeds;
    const matchesPrice = selectedPrice === '' || cardPrice <= parseInt(selectedPrice);

    if (matchesSearch && matchesCity && matchesBeds && matchesPrice) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (resultsCount) {
    resultsCount.textContent = `Showing ${visibleCount} propert${visibleCount === 1 ? 'y' : 'ies'}`;
  }

  const existing = listingsGrid.querySelector('.no-results');
  if (existing) existing.remove();

  if (visibleCount === 0) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = 'No properties found. Try adjusting your filters.';
    listingsGrid.appendChild(noResults);
  }
}

if (searchInput) searchInput.addEventListener('input', filterListings);
if (cityFilter) cityFilter.addEventListener('change', filterListings);
if (bedsFilter) bedsFilter.addEventListener('change', filterListings);
if (priceFilter) priceFilter.addEventListener('change', filterListings);


// ===== CONTACT FORM =====
function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill in your name, email and message!');
    return;
  }

  const successMsg = document.getElementById('form-success');
  successMsg.style.display = 'block';

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('message').value = '';
}