import Head from 'next/head'
import Header from './components/Header'
import { sanityClient, urlfor } from '../sanity'
import { Post } from '../typing'
import Link from 'next/link'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium Blog Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

    {/* Hero Item */}
      <div className="flex  items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-0">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{' '}
            is a place to Write, Read and Connect
          </h1>
          <h2 className="text-sm">
            It's easy and free to post thinking on any topic and connect with
            millions of readers.
          </h2>
        </div>
        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt=""
        />
      </div>

      {/* Posts */}
      <div className="grid grid-cols-1 p-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:p-6">
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden rounded-lg border ">
              <img
                className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={urlfor(post.mainImage).url()!}
                alt=""
              />
              <div className="flex justify-between bg-white p-5">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.description} by 📧{post.author.name}
                  </p>
                </div>
                <img
                  className="h-16 w-16 rounded-full"
                  src={urlfor(post.author.image).url()!}
                  alt=""
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const querry = `*[_type == "post"]{
    _id,
    title,
    author ->{
      name,
      image
    },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(querry)

  return {
    props: {
      posts,
    },
  }
}
