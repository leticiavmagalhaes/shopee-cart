// CASOS DE USO DOS ITEMS

// -> criar  item com subtotal certo
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    //função para calcular o subtotal do item
    subtotal: () => price * quantity,
  };
}

export default createItem