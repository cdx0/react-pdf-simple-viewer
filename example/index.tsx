import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Document, Page } from '../dist/index';
import { useState } from 'react';

const App = () => {
  const [pages, setPages] = useState<number[]>([]);
  return (
    <div>
      <Document
        URL="http://localhost:1234/123.pdf"
        onSuccess={async PDF => {
          const { numPages } = PDF;
          setPages(
            Array.from({ length: numPages })
              .fill(0)
              .map((val, index) => index + 1)
          );
        }}
      >
        {pages.map(value => {
          return (
            <Page
              hideTextLayer={true}
              index={value}
              key={value}
              width={857}
              scale={1}
            ></Page>
          );
        })}
      </Document>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
