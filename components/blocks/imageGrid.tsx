import React from 'react';

const Image: React.FC = ({ asset }) => {
  console.log('Image asset', asset);
  return <h1>image</h1>;
};

const ImageGridBlock: React.FC = ({ node }) => {
  const { images } = node;
  // console.log('Image grid', images);
  // <code>{JSON.stringify(node)}</code>
  return (
    <div className="image-grid">{images.map((image) => Image(image))}</div>
  );
};

export default ImageGridBlock;
