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

    return (
        <div style={{width: isPortrait? "90%": "80%", margin: "auto"}}>
          <h1 onClick={handleClick}>Philipp Dowling</h1>
          <hr/>
          <div>
              {Object.entries(props.links).map(([href, text], i) => (
                <Link to={href} id={href + i}>
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
    