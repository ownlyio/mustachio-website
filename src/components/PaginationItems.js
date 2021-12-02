function PaginationItems({value, func}) {
    return (
        <li className="page-item">
            <a className="page-link" onClick={() => func(value)}>{value}</a>
        </li>
    )
}

export default PaginationItems