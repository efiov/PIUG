document.addEventListener("DOMContentLoaded", () => {
  // implmentare buton top
  /* cand se da scroll pe pagina se apeleaza functia care 
  afiseaza sau ascunde butonul care derueaza la inceputul paginii*/
  window.onscroll = function () {
    scroll();
  };
  /* se identica butonul in html */
  const topBtn = document.querySelector("#top-btn");
  /* definirea functie care este apeleaza cand este dat scroll pe pagina */
  const scroll = () => {
    /* scroll peste 50px se afiseaza butonul  */
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      /* se afiseaza butonul */
      topBtn.style.display = "block";
    } else {
      /* daca pagina este la inceput , butonul este ascuns */
      topBtn.style.display = "none";
    } //else
  }; //scrollFunction
  /* este apasat butonul care deruleaza pagina la inceput */
  topBtn.addEventListener("click", () => {
    /* 0px de marginea de sus */
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }); //topBtn.addEventListener
}); //document
