import ReactMarkdown from "react-markdown";
import ContentPage from "./ContentPage";

const content = `Nothing yet`;

function Links() {
    return (
      <ContentPage>
        <ReactMarkdown>{content}</ReactMarkdown>
      </ContentPage>
    );
}

export default Links;