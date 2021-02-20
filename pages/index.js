import Head from 'next/head'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const Home = () => {
  const [tree, setTree] = useState(0)
  const socket = io();

  useEffect(() => {
    socket.on('tree', (data) => {
      setTree(data.total_tree)
    })
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Worldtrees</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Current World Tree: {tree}
        </h1>
      </main>
    </div>
  )
}

export default Home
