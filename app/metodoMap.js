function aplicarDesconto(livros) {
  const desconto = 0.3;
  return livros.map(livro => ({ ...livro, preco: Number((livro.preco * (1 - desconto)).toFixed(2)) }));
}
