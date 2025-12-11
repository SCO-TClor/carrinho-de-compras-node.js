import * as cartService from "./services/cart.js";
import * as itens from "./services/item.js";

const cart = []

console.log('hello shopee');

const item1 = await itens.default.createItem('hotwheels ferrari', 20.99, 1);
const item2 = await itens.default.createItem('hotwheels lamborguini', 39.99, 3);

await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

await cartService.removeFullItem(cart, item2);
await cartService.removeFullItem(cart, item2);

// await cartService.removeItem(cart, 2);

// await cartService.deleteItem(cart, item2.name)
// await cartService.deleteItem(cart, item1.name)

await itens.default.reloadItem(cart);

await cartService.displayCart(cart);

await cartService.calcTotal(cart);
