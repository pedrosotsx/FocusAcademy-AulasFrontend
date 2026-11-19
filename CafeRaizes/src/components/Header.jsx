function Header() {
    return (
        <header className="bg-stone-900 text-amber-50 px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-amber-400"> Cafe Raizes</h1>

            <nav className=" flex gap-4 text-sm">
                <a href="#" className="hover:text-amber-300">Cardapio</a>
                <a href="#" className="hover:text-amber-300">Contato</a>

            </nav>
        </header>
      );
}

export default Header;