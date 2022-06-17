import Head from 'next/head'
import ReactPlayer from 'react-player'

const Home = () => {
  const data = {
    url: 'https://www.youtube.com/watch?v=tLAZvESoVgI',
    short_title: 'TAOISM | The Art of Not Trying',
    title: 'This video is about not trying to change the world, to gain the world.',
    description: `The Taoists observed that humans tend to act in ways that are counterproductive. And in their attempts to alter the natural way, they only make things worse. All these strivings, rules, ethics, values, surely are invented to benefit humanity. But according to the ancient Taoist sages, we should get rid of them all. Why? Because all these manmade ideas only remove us further from the natural flow of life. Trying to alter what nature has intended, is like swimming against the stream: it’s exhausting and gets us nowhere.`,
  }

  return (
    <>
      <Head>
        <title>TAOISM | The Art of Not Trying</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4 py-2">
        <main className="bg flex w-full flex-col gap-5 rounded-xl bg-white p-5 shadow-xl xl:flex-row">
          <div className="w-full xl:w-1/2">
            <div className="aspect-video w-full">
              <ReactPlayer width="100%" height="100%" url={data.url} controls={false} />
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 xl:w-1/2">
            <h1 className="text-2xl font-bold">{data.short_title}</h1>
            <h2 className="text-lg italic">{data.title}</h2>
            <p>{data.description}</p>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
