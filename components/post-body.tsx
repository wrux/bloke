import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
// import { Text, Image } from './blocks';

type Props = {
  content: any[];
};

// const serializers = {
//   types: {
//     block: (props) => Text(props),
//     image: (props) => Image(props),
//   },
// };

const PostBody: React.FC<Props> = ({ content }) => (
  <div className="max-w-2xl mx-auto prose lg:prose-xl">
    <BlockContent
      blocks={content}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
    />
  </div>
);

export default PostBody;
