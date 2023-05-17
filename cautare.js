const indexes = [
  "pediatrie generala test rapid virus gripal test glicemie vaccin injectie subcutanată injectie intramusculară consultatie la cabinet consultatie la domiciliu test alergie",
  "cardiologie ecografgie de cord monitorizare holter ekg monitorizare holter tensiune",
  "consultatie de alaptare si diversificare consultatie de alaptare consultatie privind diversificarea",
  "servicii orl consultatie aspiratie otica extracție dop cerumen - unilaterala frenotomie linguala",
  "chirurgie consultatie la cabinet",
  "ecografii ecografie de parti moi ecografie de sold ecografie abdominala consultatie pediatrie + ecografie toracica",
  "gastroenterologie consultatie la cabinet",
  "ortopedie consultatie la cabinet",
  "dermatologie consultatie la cabinet dermatoscopie moluscum",
];

const searchInput = document.getElementById("search"),
  searchButton = document.getElementById("search-button");

const search = () => {
  const urlParams = new URLSearchParams(location.search),
    query = urlParams.get("q");

  if (!query || query.trim() === "") return;

  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i];

    if (index.search(query) > 0) return displayResults(i);
  }
};

const displayResults = (position) => {
  const card = [...document.getElementById("accordion").children][position];

  card.querySelector("a").click();
};

document.addEventListener("DOMContentLoaded", () => {
  search();
});

const searchWithInput = () => {
  const query = searchInput.value.toLowerCase();

  open(`${location.origin}/servicii.html?q=${query}`, "_self");
};

searchInput.addEventListener("change", searchWithInput);
searchButton.addEventListener("click", searchWithInput);