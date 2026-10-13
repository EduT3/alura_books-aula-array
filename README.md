# alura_books-aula-array

aula sobre métodos array usando o alura books

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Métodos Array**
| :label: Tecnologias | HTML, CSS, JavaScript (tecnologias utilizadas)
| :rocket: URL         | https://alura-books-aula-array.vercel.app

## Executar

Sirva esta pasta com `python -m http.server 8000` e abra `http://localhost:8000`. Não há build ou dependências npm. O catálogo precisa de internet e vem de `https://guilhermeonrails.github.io/casadocodigo/livros.json`.

## Métodos estudados

- `map`: desconto de 30%, arredondado em centavos, usado de forma consistente em todos os filtros.
- `forEach`: montagem dos cards com DOM e texto seguro.
- `filter`: categorias e livros disponíveis.
- `sort`: cópia ordenada por preço sem mudar a lista de origem.
- `reduce`: soma dos preços dos títulos disponíveis, não o valor de todas as unidades em estoque.

## Verificar

Compare os preços antes/depois de filtrar e ordenar; teste categoria vazia, indisponibilidade de rede e largura de 320px. O carregamento desabilita os botões até receber um catálogo válido e exibe erro quando a API falha. A disponibilidade da API externa não é garantida por este projeto.
