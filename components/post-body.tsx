/* eslint-disable react/display-name */
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { Image, ImageGrid } from './blocks';

type Props = {
  content: any[];
};

const serializers = {
  types: {
    image: (props) => {
      const { node } = props;
      if (!node.asset) {
        return null;
      }
      // console.log(props.node);
      return (
        <div className="my-8 -mx-5 sm:-mx-12 md:my-10 md:-mx-16 lg:my-16 lg:-mx-32 xl:-mx-48">
          <Image {...props} />
        </div>
      );

      // return (
      //   <div className="my-8 -mx-5 sm:-mx-12 md:my-10 md:-mx-16 lg:my-16 lg:-mx-32">
      //     {BlockContent.defaultSerializers.types.image(props)}
      //   </div>
      // );
    },
    imageGrid: (props) => (
      <div className="my-8 -mx-5 sm:-mx-12 md:my-10 md:-mx-16 lg:my-16 lg:-mx-32 xl:-mx-48">
        <ImageGrid {...props} />
      </div>
    ),
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
