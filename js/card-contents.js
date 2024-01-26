export default class Content {
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }

  static cardContents = [
    new Content(
      "Sobre",
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. 

      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
      Aldus PageMaker including versions of Lorem Ipsum.`
    ),
    new Content(
      "Projetos",
      `Texto sobre 
      
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
      Aldus PageMaker including versions of Lorem Ipsum.`
    ),
    new Content(
      "Experiência",
      `Texto sobre
      
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
      Aldus PageMaker including versions of Lorem Ipsum.`
    ),
    new Content(
      "Contato",
      `Texto sobre
      
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
      Aldus PageMaker including versions of Lorem Ipsum.`
    ),
    new Content(
      "Tecnologias",
      `Texto sobre
      
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
      Aldus PageMaker including versions of Lorem Ipsum.`
    ),
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
