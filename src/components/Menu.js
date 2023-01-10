import '../css/Menu.css'

export default function Menu (props) {
    const menus = props.menu;

    return (
        <div className="menu">
            <nav>
                {menus.map((menu) => <a href='#'>{menu}</a>)}
            </nav>
        </div>
    )
}