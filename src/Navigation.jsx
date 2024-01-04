import { Link } from "react-router-dom";
function Navigation(){

    return(
        <div className="navleiste">
            <ul>
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/pizza">Pizza</Link></li>
                <li><Link className='link' to="/">Öffnungszeiten</Link></li>
                <li><Link className='link' to="/">Navi</Link></li>
                <li><Link className='link' to="/">Impressum</Link></li>
            </ul>
        </div>
    )
}

export default Navigation;