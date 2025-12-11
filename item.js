// Casos de usos dos itens

// -> Criar item com subtotal correto
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    };
};

async function reloadItem(cart) {
    cart.forEach((_el, idx) => {
        cart[idx].subtotal = () => cart[idx].price * cart[idx].quantity;
    });
};

export default {createItem, reloadItem};