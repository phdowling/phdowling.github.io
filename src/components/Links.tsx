import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import {ContentPage, NoRefLink} from "./ContentPage";

const content = `## Links
- [Github](https://github.com/phdowling)
- [LinkedIn](https://www.linkedin.com/in/philippdowling/)`;

const items = [{
    header: "Master's thesis",
    subheader: "Effective and Scalable Sentence Representation through Dynamic Grassmannian Ellipsoids",
    text: `My M.Sc. thesis at TUM, completed in part at Stanford University. I applied Grassmannian embeddings to semantic sentence representation and on methods to efficiently search over these representations.

I found that subspace bases computed over word vectors (from e.g. FastText or Word2Vec) are much more effective 
representations than weighted averages of such vectors, 
and that treating the subspace bases as ellipsoids works even better.
Since these ellipsoids are more complex and high-dimensional than the underlying word vectors, however, it also turns out that they are
much more expensive to perform search over at scale. My work also investigates some approaches for dealing with this.
    
Code for the model and experiments is available on **[github](https://github.com/phdowling/dynamic-grassmannian-ellipsoids)**.`,
    href: "/static/msc-thesis-final.pdf"
}];

function DownloadItem(props: {header: string, subheader: string, text: string, href: string}){
    const content = `### ${props.header}\n#### _${props.subheader}_\n${props.text}`;
    return (
        <div className="DownloadItem">
            <ReactMarkdown components={{a: NoRefLink}}>{content}</ReactMarkdown>
              <div className="DownloadButtonContainer"><a 
                className="DownloadButtonA"
                href={props.href} 
                target="_blank" 
                rel="noreferrer"
                style={{textDecoration: "none", color: "black"}}>
                    Download
              </a>
              </div>
        </div>
    )
}

function Links() {
    return (
      <ContentPage>
        <h2>Downloads</h2>
        {items.map((item, i) => <DownloadItem {...item} key={"downloaditem_" + i}/>)}
        <ReactMarkdown components={{a: NoRefLink}}>{content}</ReactMarkdown>
      </ContentPage>
    );
}

export default Links;