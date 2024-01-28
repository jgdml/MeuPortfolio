export default class Content {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }

  static cardContents = [
    "cards/sobre.html",
    "cards/proj.html",
    "cards/exp.html",
    "cards/cont.html",
    "cards/tech.html",
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
  ];
}
