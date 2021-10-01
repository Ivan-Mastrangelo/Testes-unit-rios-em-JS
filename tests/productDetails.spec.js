const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(typeof productDetails('livro', 'caderno')).toBe('object');
    // Teste se o array retornado pela função contém dois itens dentro.
    const arrayReturn = productDetails('livro', 'caderno');
    expect(arrayReturn.length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof arrayReturn[0] && typeof arrayReturn[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(arrayReturn[0]).not.toBe(arrayReturn[1]);
    // Teste se os dois productIds terminam com 123.
    const productOne = arrayReturn[0].details.productId.slice(-3);
    const productTwo = arrayReturn[1].details.productId.slice(-3);
    expect(productOne && productTwo).toBe('123');
  });
});

