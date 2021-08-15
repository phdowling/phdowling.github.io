import React from "react";
import { useMediaQuery } from 'react-responsive'

function ContentPage(props: {children: React.ReactNode}) {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    return (
        <div className="ContentPage" >
            <div style={{width: isPortrait? "90%": "70%", margin: "auto"}}>
                {props.children}
                <div style={{height: "30px"}}/>
            </div>
        </div>
    );
}

function NoRefLink(props: any) {
    return (
        <a 
          href={props.href} 
          rel="noreferrer" 
          style={{color: "black", textDecoration: "none"}}>
            {props.children}
        </a>);
};

export {ContentPage, NoRefLink};