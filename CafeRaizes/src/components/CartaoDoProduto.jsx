function CartaoDoProduto({nome, descricao, preco}) {
    return ( 

        <div className="bg-white rounded-lg shadow-md p-4 m-4 w-64">
            <h3 className="text-lg font-bold text-stone-900">{nome}</h3>
            <p className="text-stone-600 text-sm mt-2">{descricao}</p>
            <p className="text-2xl font-bold text-amber-500 mt-4">R$ {preco.toFixed(2)}</p>
        </div>
     );
}

export default CartaoDoProduto;