import React from "react";
import { useMediaQuery } from 'react-responsive'

function ContentPage(props: {children: React.ReactNode}) {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    return (
      <div style={{width: isPortrait? "90%": "70%", textAlign: "left", margin: "auto"}}>
        {props.children}
      </div>
    );
}

export default ContentPage;