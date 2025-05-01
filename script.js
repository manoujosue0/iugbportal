document.getElementById("filterForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const type = document.getElementById("type").value;
  const location = document.getElementById("location").value.toLowerCase();
  const minPrice = parseInt(document.getElementById("min_price").value) || 0;
  const maxPrice = parseInt(document.getElementById("max_price").value) || Infinity;

  const formatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
    minimumFractionDigits: 0,
  });

  alert(`Recherche de biens ${type || "tous types"} à "${location}" de ${formatter.format(minPrice)} à ${formatter.format(maxPrice)}`);
});
