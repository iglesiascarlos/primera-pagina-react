import '../css/Footer.css'

export default function Footer (props) {
    const menus = props.menu;

    return (
        <div className="menu">
            <nav className="footer">
                {menus.map((menu) => <a href='#'>{menu}</a>)}
            </nav>
        </div>
    )
}