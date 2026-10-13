const elementoParaInserirLivros = document.getElementById("livros");
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById("valor_total_livros_disponiveis");

function exibirOsLivrosNaTela(listaDeLivros) {
  elementoComValorTotalDeLivrosDisponiveis.textContent = "";
  elementoParaInserirLivros.replaceChildren();
  if (!listaDeLivros.length) {
    elementoParaInserirLivros.textContent = "Nenhum livro encontrado para este filtro.";
    return;
  }
  listaDeLivros.forEach(livro => {
    const card = document.createElement("article");
    card.className = "livro";
    const imagem = document.createElement("img");
    imagem.className = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
    // Restrict remote image URLs without interpolating API content into HTML.
    try {
      const url = new URL(livro.imagem, document.baseURI);
      if (["https:", "http:"].includes(url.protocol)) imagem.src = url.href;
    } catch { /* A missing cover must not prevent displaying the book. */ }
    imagem.alt = livro.alt || `Capa de ${livro.titulo}`;
    imagem.loading = "lazy";
    card.appendChild(imagem);
    [["h2", "livro__titulo", livro.titulo], ["p", "livro__descricao", livro.autor],
      ["p", "livro__preco", livro.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })],
      ["span", "tag", livro.categoria]].forEach(([tag, classe, texto]) => {
      const elemento = document.createElement(tag);
      elemento.className = classe;
      elemento.textContent = texto;
      card.appendChild(elemento);
    });
    elementoParaInserirLivros.appendChild(card);
  });
}
