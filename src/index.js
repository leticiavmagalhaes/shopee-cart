import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("\nWelcome to your Shopee Cart!\n");

//criação dos itens, com a passagem de parâmetros.
const item1 = await createItem("Shirt", 27.99, 1);
const item2 = await createItem("Pants", 49.99, 3);

//chamada das funções para adição de itens.
await cartService.addItemToCart(myCart, item1);
await cartService.addItemToCart(myCart, item2);

//remover uma unidade do item 2.
await cartService.removeItemQuantity(myCart, item2);
await cartService.removeItemQuantity(myCart, item2);

//passando inddex 1 para remover o item 2, pois o index começa do zero.
//await cartService.removeItemFromCart(myCart, 1);

//exibição.
await cartService.displayCart(myCart);
console.log("\nShopee cart total is: ");
await cartService.calculateTotal(myCart);

//deletar do carrinho.
//await cartService.deleteItemFromCart(myCart, item2.name);
