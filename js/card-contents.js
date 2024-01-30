export default class Content {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }

  static cardContents = [
    "cards/sobre.html",
    "cards/repos.html",
    "cards/exp.html",
    "cards/contato.html",
    "cards/tecnologias.html",
  ];

  static repos = [
    new Content(
      "Pops App",
      "https://raw.githubusercontent.com/jgdml/PopsApp/main/README.md"
    ),
    new Content(
      "PewPew",
      "https://raw.githubusercontent.com/kairo741/pew-pew/main/README.md"
    ),
    new Content(
      "ImoVendas",
      "https://raw.githubusercontent.com/jgdml/ImoVendas/main/README.md"
    ),
    new Content(
      "Portfolio",
      "https://raw.githubusercontent.com/jgdml/MeuPortfolio/v2/README.md"
    ),
    new Content(
      "Swiper",
      "https://raw.githubusercontent.com/jgdml/Swiper/main/README.md"
    ),
    new Content(
      "Lists",
      "https://raw.githubusercontent.com/jgdml/Lists/main/README.md"
    ),
  ];
}
