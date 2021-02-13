/* eslint-disable react/display-name */
import BlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Image, ImageGrid } from './blocks';

type Props = {
  content: BlockContent;
};

const serializers = {
  types: {
    image: (props) => {
      const { node } = props;
      if (!node.asset) {
        return null;
      }
      return (
        <div className="-mx-5 my-8 sm:-mx-12 md:-mx-16 md:my-10 lg:-mx-32 lg:my-16 xl:-mx-48">
          <Image {...props} />
        </div>
      );
    },
    imageGrid: (props) => (
      <div className="-mx-5 my-8 sm:-mx-12 md:-mx-16 md:my-10 lg:-mx-32 lg:my-16 xl:-mx-48">
        <ImageGrid {...props} />
      </div>
    ),
  },
};

const PostBody: React.FC<Props> = ({ content }) => (
  <div className="prose lg:prose-xl mx-auto max-w-2xl">
    <BlockContent
      blocks={content}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
      serializers={serializers}
    />
  </div>
);

export default PostBody;
