import React from "react";
import ReactMarkdown from "react-markdown";
import {ContentPage, NoRefLink} from "./ContentPage";

const content = `## About me
I currently manage the product team at **[Y42](https://y42.com)**, working on building a next-generation data platform that anyone can run.

Some topics I've worked on and/or have an interest in:
- data integration, pipelines, analytics, automation and operationalization
- natural language processing, machine learning and knowledge graphs
- OSINT, cybersecurity operations, fraud, AML, dark web and other investigative areas

I'm especially interested in the intersection of these areas and how these tools can be leveraged to build systems that help us to both better understand the world
as well as to map that understanding.

In the past, I worked on integrations and data product at [Maltego](maltego.com), co-founded **[metris.io](https://metris.io/)** 
and before that, I was working on NLP research around distributional semantic representation of text.
`;

function Home() {
    return (
      <ContentPage>
          <ReactMarkdown components={{a: NoRefLink}}>{content}</ReactMarkdown>
      </ContentPage>
    );
}

export default Home;
