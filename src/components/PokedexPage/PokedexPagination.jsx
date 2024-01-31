import './styles/pokedexPagination.css'
const PokedexPagination = ({ productsPerPage, currentPage, setCurrentPage, totalPokemons }) => {

    const pageNumbers = []
    // console.log(Math.ceil(totalPokemons / productsPerPage));
    for (let i = 1; i <= Math.ceil(totalPokemons / productsPerPage); i++) {
        pageNumbers.push(i);
        // console.log(pageNumbers); // 1,2,3,4
    }
    const maxVisibleButtons = '';
    const ellipsis = <span key="ellipsis" className="pagination-ellipsis">&hellip;</span>;

    const previousPage = () => {
        setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
    }

    const nextPage = () => {
        setCurrentPage(currentPage < pageNumbers[pageNumbers.length - 1] ? currentPage + 1 : pageNumbers[pageNumbers.length - 1])
    }

    const specificPage = (n) => {
        setCurrentPage(n)
    }

    return (
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <a className={`pagination-previous ss1 ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={previousPage}>Previous</a>
            <a className={`pagination-next ss1 ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`} onClick={nextPage}>Next page</a>
            <ul className="pagination-list">
                {[
                    currentPage > maxVisibleButtons && ellipsis,
                    ...pageNumbers.slice(Math.max(currentPage - 2, 1), Math.min(currentPage + 2, pageNumbers.length - 1)),
                    currentPage < pageNumbers.length - maxVisibleButtons && ellipsis
                ]
                    .map((noPage, index) => (
                        <li  key={index}>
                            {typeof noPage === 'number' ? (
                                <a className={`pagination-link ${noPage === currentPage ? 'is-current' : ''}`} onClick={() => specificPage(noPage)}>
                                    {noPage}
                                </a>
                            ) : noPage}
                        </li>
                    ))}
            </ul>
        </nav>
    )
}

export default PokedexPagination