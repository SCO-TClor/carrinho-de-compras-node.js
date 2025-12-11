// Quais ações meu carrinho poderia fazer?

// // Casos de uso
// ✅ Adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
};

// Deletar item no carrinho
async function deleteItem(userCart, itemName) {
    const index = userCart.findIndex((item) => item.name === itemName);

    if(index !== -1) {
        userCart.splice(index, 1);
    };
};

async function removeFullItem(userCart, idx) {
    // Encontrar o índice do item:
    const indexFound = userCart.findIndex((p) => p.name === idx.name);
    // Caso não encontre o item:
    if(indexFound == -1) {
        console.log('Item não encontrado!');
        return;
    } else {
        console.log(indexFound);
    };

    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    } else {
        userCart.splice(indexFound, 1);
        return;
    };
};

// Mostrar o carrinho:
async function displayCart(userCart) {
    console.log('\nShopee cart list:');
    userCart.forEach((item, idx) => {
        console.log(`${idx + 1}. ${item.name} - ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
    });
}

// Remover um item
async function removeItem(userCart, idx) {
    const deleteIdx = idx - 1;
    if(deleteIdx >= 0 && deleteIdx < userCart.length) {
        userCart.splice(deleteIdx, 1);
    };
};

// Calcular o total
async function calcTotal(userCart) {
    let cartTotal = 0;
    for (let i = 0; i < userCart.length; i++) {
        const item = userCart[i].subtotal();
        cartTotal += item;
    };
    console.log(`\n💵 Total: ${cartTotal}`);
}

export {
    addItem,
    deleteItem,
    displayCart,
    removeFullItem,
    removeItem,
    calcTotal,
};