// quais ações o carrinho pode fazer

//CASOS DE USO
// ✅ -> adicionar item ao carrinho
async function addItemToCart(userCart, item) {
  //push: método de array que adiciona um elemento ao final do array.
  userCart.push(item);
}

// ✅ -> calcular o total do carrinho
async function calculateTotal(userCart) {
  //reduce: Ele transforma um array em um único valor, no caso o total do carrinho, somando o subtotal de cada item.
  //total + item.subtotal(): novo total = total anterior + subtotal do item
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(result);
}

// ✅ -> deletar item do carrinho
async function deleteItemFromCart(userCart, name) {
  //findIndex: procura qual o index do vetor em que o item se encontra.
  const index = userCart.findIndex((item) => item.name === name);

  //splice: método de array que remove um elemento do array, a partir do index encontrado.
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// ✅ -> remover item do carrinho - remove o item completamente, independente da quantidade
async function removeItemFromCart(userCart, index) {
  const deleteIndex = index - 1; //ajustando o index para começar do zero

  //verifica se o index é maior que zero, e se é menor que o tamanho do carrinho.
  if (index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
  }
}

// ✅ -> remover um item do carrinho - diminui uma unidade
async function removeItemQuantity(userCart, item) {
  //findIndex: para descobrir o index do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);
  console.log(indexFound);

  //caso item não encontrado.
  if (indexFound == -1) {
    console.log("Item not found in cart.");
    return;
  }

  //item > 1 subtrai 1 item
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //item = 1 remove o item do carrinho
  if (userCart[indexFound].quantity === 1) {
    userCart.splice(indexFound, 1);
  }
}

// ✅ -> exibir itens do carrinho
async function displayCart(userCart) {
  console.log("Items in your Shopee cart:\n");
  //forEach: método de array que executa uma função para cada elemento do array, no caso para cada item do carrinho.
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`,
      //index +1 pois ele sempre começa do zero
    );
  });
}

export {
  addItemToCart,
  calculateTotal,
  deleteItemFromCart,
  removeItemFromCart,
  removeItemQuantity,
  displayCart,
};
