import React from "react";
import ReactMarkdown from "react-markdown";
import {ContentPage, NoRefLink} from "./ContentPage";

const content = `## About me
I'm currently a product manager at **[Maltego](https://maltego.com)**, 
where I'm working on solutions in and around:

- data integration
- investigative link analysis and automation
- data sources, data providers and open-source intelligence (OSINT)
- cybersecurity operations, fraud, AML, dark web and other areas

I'm also interested in natural language processing, machine learning and knowledge graphs, 
especially in how these can be leveraged to build tools that help us better understand the world, 
as well as to map that understanding.

In the past, I co-founded **[metris.io](https://metris.io/)** 
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