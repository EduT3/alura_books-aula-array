let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

// Wait until every teaching script has declared its functions and DOM references.
document.addEventListener("DOMContentLoaded", getBuscarLivrosDaAPI);

async function getBuscarLivrosDaAPI() {
  const controles = document.querySelectorAll(".btn");
  controles.forEach(botao => { botao.disabled = true; });
  elementoParaInserirLivros.textContent = "Carregando livros...";
  elementoComValorTotalDeLivrosDisponiveis.textContent = "";
  try {
    const res = await fetch(endpointDaAPI);
    if (!res.ok) throw new Error("Falha ao carregar catálogo");
    const dados = await res.json();
    if (!Array.isArray(dados) || dados.some(livro => !livro || typeof livro.preco !== "number" || !Number.isFinite(livro.preco))) {
      throw new Error("Catálogo inválido");
    }
    // Keep the same discounted prices in filtering, sorting and totals.
    livros = aplicarDesconto(dados);
    exibirOsLivrosNaTela(livros);
    controles.forEach(botao => { botao.disabled = false; });
  } catch (erro) {
    elementoParaInserirLivros.textContent = "Não foi possível carregar os livros. Verifique sua conexão e recarregue a página.";
  }
}
