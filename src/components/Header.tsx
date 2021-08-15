import { useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useHistory } from "react-router-dom";

interface HeaderProps {
    links: {[href: string]: string};
}
function Header(props: HeaderProps) {    
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const history = useHistory();
    const handleClick = useCallback(
        () => {
            history.push("/");
        },
        [history],
    );
        // <div style={{width: isPortrait? "90%": "70%", margin: "auto"}}>
    return (
        
        <div style={{width: isPortrait? "90%": "70%", margin: "auto"}}>
          <Link to="/" className="AppLink">
            <h1 >Philipp Dowling</h1>
          </Link>
          <hr/>
          <div>
              {Object.entries(props.links).map(([href, text], i) => (
                <Link className="AppLink" to={href} id={href + i}>
                    <div style={{margin: "10px", display: "inline-block"}}>
                        {text}
                    </div>
                </Link>
              ))}
          </div>
        </div>
    );
}

export default Header;
    