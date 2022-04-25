/* eslint-disable max-len */

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, 
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado; 
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. 
  Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E NÃO PELO PASSO 1 DESTE ARQUIVO!
*/

// PASSO 1: Crie uma função `createMenu()` que, dado um objeto passado por parâmetro, retorna um objeto com o seguinte formato: { fetchMenu: () => objetoPassadoPorParametro }.
//
// Agora faça o TESTE 4 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 2: Adicione ao objeto retornado por `createMenu` uma chave `consumption` que, como valor inicial, tem um array vazio.
//
// Agora faça o TESTE 5 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 3: Crie uma função, separada da função `createMenu()`, que, dada uma string recebida por parâmetro,
// adiciona essa string ao array de `objetoRetornado.consumption`. Adicione essa função à chave `order`.
// DICA: para criar isso, você pode:
// - Definir a função `createMenu()`
// - Definir o objeto que a `createMenu()` retorna, mas separadamente
// - E, depois, definir a função que será atribuída a `order`.
// ```
// const restaurant = {}
//
// const createMenu = (myMenu) => // Lógica que edita o objeto `restaurant`
//
// const orderFromMenu = (request) => // Lógica que adiciona à chave `consumption` de `restaurant` a string recebida no parâmetro `request`.
// // Essa função deve ser associada à chave `order` de `restaurant`
// ```
// Agora faça o TESTE 6 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 4: adicione ao objeto retornado por `createMenu()` uma chave `pay` com uma função
// que percorre por todos os itens de `objetoRetornado.consumption`, soma o preço deles e retorna o valor somado acrescido de 10%.
// DICA: para isso, você precisará percorrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

//orderFromMenu('coxinha');

const arrayVazio = [];
const createMenu = (objeto) => {
  const objetoMenu = {
    fetchMenu: () => objeto,
    consumption: arrayVazio,
    order: (request) => orderFromMenu(request),
    pay: () => {
      const arrayconsumption = objetoMenu.consumption;
      const consumptionFood = Object.keys(objetoMenu.fetchMenu().food);
      const consumptionDrink = Object.keys(objetoMenu.fetchMenu().drink);
      countability(arrayconsumption, consumptionFood, consumptionDrink);
    },
  };
  return objetoMenu;
};

const orderFromMenu = (request) => {
  const funcMenu = createMenu().consumption;
  funcMenu.push(request);
  return funcMenu;
};

function countability(arrayconsumption, consumptionFood, consumptionDrink) {
  console.log(consumptionFood);
  console.log(consumptionDrink);
  let priceFood = 0;
  let priceDrink = 0;
  for (let i = 0; i <= arrayconsumption.length; i += 1) {
    if (consumptionFood.includes(arrayconsumption[i])) {
      let pedidoF = cardapio.food;
      priceFood = priceFood + pedidoF[arrayconsumption[i]];
    }
  }
  for (let i = 0; i <= arrayconsumption.length; i += 1) {
    if (consumptionDrink.includes(arrayconsumption[i])) {
      let pedidoD = cardapio.drink;
      priceDrink = priceDrink + pedidoD[arrayconsumption[i]];
    }
  }
  console.log(priceFood);
  console.log(priceDrink);
  const newBill = priceDrink + priceFood + (priceDrink + priceFood) * 0.1;
  console.log(newBill);
}

const cardapio = { food: {'coxinha': 6, 'sopa': 9.9}, drink: {'agua': 4, 'cerveja': 6.90} };
createMenu().order("coxinha");
createMenu().order("agua");
createMenu(cardapio).pay();
console.log(objetoMenu);

//const consumo = objetoMenu.consumption;
//const consumptionFood = Object.keys(objetoMenu.fetchMenu().food);
//const consumptionDrink = Object.keys(consumo.drink);

// console.log(priceFood);
// console.log(priceDrink);
// console.log(createMenu(cardapio).fetchMenu());
// console.log(objetoMenu.fetchMenu());
// console.log(objetoMenu.order('coxinha'));
// console.log(objetoMenu.consumption);
// console.log(objetoMenu.pay());
// createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': .69} });

module.exports = createMenu;

/* const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

meuRestaurante.order('coxinha') // Retorno: undefined

meuRestaurante.consumption // Retorno: ['coxinha']

meuRestaurante.pay() // Retorno: 3.9 */

/* console.log(Object.keys(objetoMenu));
console.log(objetoMenu);
console.log(createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).fetchMenu());
objetoRetornado = (createMenu(objetoPassado).fetchMenu());
console.log(objetoRetornado);
console.log(Object.keys(objetoRetornado)); */

/*    const objetoRetornado = {
      food: 'burguer',
      drink: 'agua',
    };
    console.log(Object.keys(objetoRetornado)); */
// objetoRetornado.fetchMenu() // Retorno: { food: {}, drink: {}}
//expect(objetoRetornado.fetchMenu()).keys.toBe
