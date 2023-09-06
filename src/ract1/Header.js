import "./Header.css";

function Header(props){


return <div>
    <header>
        <a href={props.href} target={props.target}>
        {props.name}
        </a>
     
    </header>
    </div>

}
export default Header;