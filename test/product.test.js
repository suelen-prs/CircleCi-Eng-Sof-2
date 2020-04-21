// A quantidade vendida pode ser de 1 ou mais unidades

import Product from '../src/model/product'
import sell from '../src/service/sellProduct'

test('deve validar baixa de estoque da venda de uma unidade', () => {
    let produto = new Product('Celular', 500.00, 900.00, 10)
    sell(produto, 1)
    expect(produto.stock).toBe(9)
})

test('deve aceitar a venda de mais unidades', () => {
    let produto = new Product('Celular', 500.00, 900.00, 10)
    sell(produto, 3)
    expect(produto.stock).toBe(7)
})

test('Quando uma venda não houver estoque suficiente, a transação deverá ser cancelada e o estoque não deverá ser alterado.', () =>{
    let produto = new Product('Celular', 500.00, 900.00, 0)
    sell(produto, 6)
    expect(produto.stock).toBe(0)
})