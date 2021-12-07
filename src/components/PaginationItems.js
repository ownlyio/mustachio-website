import cx from 'classnames'

function PaginationItems({value, func, active}) {
    return (
        <li className={cx("page-item", "assets-page-item", "text-lg", "font-andes", {
            active: active == value
        })}>
            <a className="page-link assets-page-link" onClick={() => func(value)}>{value}</a>
        </li>
    )
}

export default PaginationItems