import React from "react";
import { useMediaQuery } from 'react-responsive'

function ContentPage(props: {children: React.ReactNode}) {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    return (
    <div className="ContentPage" >
      <div style={{width: isPortrait? "90%": "70%", margin: "auto"}}>
        {props.children}
      </div>
      </div>
    );
}

export default ContentPage;