import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { ImageGrid } from './blocks';

type Props = {
  content: any[];
};

const serializers = {
  types: {
    imageGrid: (props) => ImageGrid(props),
  },
};

const PostBody: React.FC<Props> = ({ content }) => (
  <div className="max-w-2xl mx-auto prose lg:prose-xl">
    <BlockContent
      blocks={content}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
      serializers={serializers}
    />
  </div>
);

export default PostBody;
