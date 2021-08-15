import { useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useHistory } from "react-router-dom";

interface HeaderProps {
    links: {[href: string]: string};
}
function Header(props: HeaderProps) {    
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

    return (    
        <div style={{width: isPortrait? "85%": "50%", margin: "auto"}}>
          <Link to="/" className="AppLink">
            <h1 >Philipp Dowling</h1>
          </Link>
          <hr/>
          <div>
              {Object.entries(props.links).map(([href, text], i) => (
                <Link className="AppLink" to={href} key={href + i}>
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
    