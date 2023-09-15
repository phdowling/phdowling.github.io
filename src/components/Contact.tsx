import ReactMarkdown from "react-markdown";
import { useMediaQuery } from "react-responsive";
import {ContentPage} from "./ContentPage";

const content = `
Please use the form below to get in touch with me.
`;

function Contact(){
    return (
        <ContentPage>
          <ReactMarkdown>{content}</ReactMarkdown>
            <iframe 
              title="airtable-contact-form"
              className="airtable-embed" 
              src="https://airtable.com/embed/shrLBfPGailzVgiWV?backgroundColor=purple" 
              width="85%"
              height="700px"
              style={{background: "transparent", border: "1px solid #ccc", display: "block"}}>
            </iframe>
        </ContentPage>
    )
}

export default Contact;