import React from 'react';

const ImageBlock: React.FC = (props) => (
  <div className="my-5">
    <h1>IMAGE</h1>
    <code>{JSON.stringify(props)}</code>
  </div>
);

export default ImageBlock;
