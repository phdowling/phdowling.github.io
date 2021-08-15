import ReactMarkdown from "react-markdown";
import ContentPage from "./ContentPage";

const content = `# About me
I'm a product manager currently working on solutions at the intersection of:

- data integration
- visual analysis
- investigations in cybersecurity, fraud, AML, dark web and related areas.

I'm also interested in natural language processing, machine learning, knowledge graphs and the 
different ways these can be leveraged to build tools that help us to better understand of the world, 
as well as to map that understanding.
`;

function Home() {
    return (
      <ContentPage>
          <ReactMarkdown>{content}</ReactMarkdown>
      </ContentPage>
    );
}

export default Home;