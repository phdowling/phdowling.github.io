import ReactMarkdown from "react-markdown";
import { useMediaQuery } from "react-responsive";
import {ContentPage} from "./ContentPage";

const content = `
If you'd like to get in touch with me, simply fill out the form below.
`;

function Contact(){
    return (
        <ContentPage>
          <ReactMarkdown>{content}</ReactMarkdown>
            <iframe 
              title="airtable-contact-form"
              className="airtable-embed" 
              src="https://airtable.com/embed/shrLBfPGailzVgiWV?backgroundColor=purple" 
              width="100%"
              height="790px"
              style={{background: "transparent", border: "1px solid #ccc", display: "block"}}>
            </iframe>
        </ContentPage>
    )
}

export default Contact;