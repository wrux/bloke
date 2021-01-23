import BlockContent from '@sanity/block-content-to-react'
import { Text, Image } from './blocks'

const serializers = {
  types: {
    block: props => Text(props),
    image: props => Image(props),
  },
  container: ({ children }) => (
    <div className="blocks">{children}</div>
  )
}

const PostBody = ({ content }) => (
  <div className="max-w-2xl mx-auto">
    <BlockContent
      blocks={content}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
      serializers={serializers}
    />
  </div>
)

export default PostBody
