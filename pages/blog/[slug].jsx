import { useRouter } from "next/router"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"
import { ArticleSkeleton } from "../../components/Articles"
import {
  CodeBlock,
  CoverPic,
  DateAndTimeTaken,
  ImageComponent,
  SocialShareButtons
} from "../../components/Blog"
import client from "../../utils/client"

const BlogDetails = ({ post }) => {
  if (!post) return <ArticleSkeleton />
  const router = useRouter()

  const { title, excerpt, content, publishedAt, coverPic } = post.fields

  return (
    <article className="container flex flex-col max-w-5xl px-2 mx-auto mt-10 text-center">
      <div className="flex flex-col p-4">
        {/* Title */}
        <h1 className="md:text-7xl text-6xl font-bold capitalize">{title}</h1>

        {/* Excerpt */}
        <p className="text-tuna-300 md:text-xl my-4 text-lg font-semibold text-center">
          {excerpt}
        </p>

        {/* Flex under the Excerpt */}
        <div className="md:flex-row flex flex-col items-center justify-between mb-6 space-x-5">
          {/* Date & Time Taken */}
          <DateAndTimeTaken content={content} publishedAt={publishedAt} />
          {/* Share Buttons */}
          <SocialShareButtons
            title={`${title} by TSC`}
            hashtag="theskinnycoder"
            path={router.asPath}
          />
        </div>

        {/* Cover Pic */}
        <CoverPic fields={coverPic.fields} />

        {/* The Content */}
        <ReactMarkdown
          className="prose-tuna sm:prose lg:prose-lg xl:prose-xl mx-auto mt-8 prose-sm prose text-left"
          renderers={{
            code: CodeBlock,
            image: ImageComponent,
            paragraph: props => <div {...props} />
          }}
          plugins={[gfm]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  )
}

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: "article" })

  const paths = response.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "article",
    "fields.slug": params.slug
  })

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return {
    props: { post: items[0] },
    revalidate: 3600
  }
}

export default BlogDetails
