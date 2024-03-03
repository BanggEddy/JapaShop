import React from "react";

const Presentationpage = () => {
  return (
    <div>
      <div className="saut"></div>
      <div className="container">
        <div class="moi">
          <o>Welcome to</o>
          <br></br>
          <b>
            <span id="typewriter"> JapaShop</span>
            <span id="cursor">|</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </b>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="cestmoipres">
          Être passionné par la culture Otaku anime / manga japonaise est
          souvent compliquée de se procurer les dernières nouveautés de
          figurines, peluches, goodies d’anime sans se ruiner en convention. En
          choisissant d’utiliser JapaShop, vous achetez directement auprès des
          boutiques japonaises.
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div class="cestmoipres">
          Pour tous les fans de japanimation, de cosplay ou de jeux vidéo
          japonais, le japon est une source insatiable de nouveautés. Chaque
          saison offre son lot de nouvelles séries et de goodies d’animé dédiés.
          Vous pouvez également remplir le formulaire de demande d’achat sur les
          boutiques animé en ligne de produits d'anime/manga japonaises .
        </div>
        <br></br> <br></br>
        <br></br>
        <br></br>
        <div class="cestmoipres" style={{ borderSpacing: "5px" }}>
          <a href="/register" style={{ textDecoration: "none", color: "#000" }}>
            <button style={{ width: "auto", fontSize: "12px" }}>
              S'inscrire
            </button>
          </a>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
          <br></br> <br></br>
        </div>
      </div>
    </div>
  );
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["JapaShop"];
const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();
export default Presentationpage;
