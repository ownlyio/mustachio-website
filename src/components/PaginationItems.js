function PaginationItems({value, func}) {
    return (
        <li className="page-item assets-page-item" style={{"cursor": "pointer"}}>
            <a className="page-link" onClick={() => func(value)}>{value}</a>
        </li>
    )
}

export default PaginationItems