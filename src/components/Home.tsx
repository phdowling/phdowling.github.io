import React from "react";
import ReactMarkdown from "react-markdown";
import {ContentPage, NoRefLink} from "./ContentPage";

const content = `## About me
In my current role as Head of Intelligence Technology at **[Maltego](https://maltego.com)** I work on bringing generative AI to cyber and criminal investigations and to the world of OSINT in general.

Some topics I've worked on or have an active interest in:
- AI, natural language processing, machine learning, knowledge graphs
- OSINT, cybersecurity operations, anti-fraud, financial crime (AML, KYC, CTF, ...) and related topics
- data engineering, analytics, integration and DataOps

I'm especially interested in the intersection of these areas and how these technology can be leveraged to help us to both better understand the world, as well as to map that understanding.

Previously, I led the product team at **[Y42](https://y42.com)**, was a product manager for integrations and the data marketplace at [Maltego](https://maltego.com), and co-founded **[metris.io](https://metris.io/)**, an NLP startup.
At university I worked on NLP and ML research around distributional semantic representation of text.
`;

function Home() {
    return (
      <ContentPage>
          <ReactMarkdown components={{a: NoRefLink}}>{content}</ReactMarkdown>
      </ContentPage>
    );
}

export default Home;
