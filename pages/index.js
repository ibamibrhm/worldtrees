import { useEffect, useState } from 'react'
import moment from 'moment'
import io from 'socket.io-client'

const socket = io();

const Home = () => {
  const [tree, setTree] = useState({
    total_tree: 0,
    updated_at: null
  })

  useEffect(() => {
    socket.on('tree', (data) => {
      setTree(data)
    })
  }, [])

  if (!tree.updated_at) {
    return null
  }

  return (
    <div className="container my-3">
      <h1 className="text-center">WorldTrees</h1>
      <div className="tree-box d-flex justify-content-center mt-3">
        <img src="worldtree.svg" />
      </div>
      <div className="card my-3 text-center shadow-lg">
        <div className="card-body">
          <h3 className="card-text">
            There are estimated <br />
            <u>{Number(tree.total_tree).toLocaleString('id')}</u> <br />
            <span>Trees in the World</span>
          </h3>
          <small className="card-text text-muted" title="DD/MM/YYYY">
            Last update: {moment(new Date(tree.updated_at)).format('DD/MM/YYYY, HH:mm:ss')}
          </small>
        </div>
      </div>

      <div className="card-columns">
        <div className="card">
          <div className="card-body text-center pb-0">
            <h5 className="card-title m-0">
              Global Forest Cover
            </h5>
          </div>
          <a
            href="https://eoimages.gsfc.nasa.gov/images/imagerecords/86000/86986/globaltreecover10pct_etm_2000_2009_front.jpg"
            target="_blank"
          >
            <img
              className="card-img"
              src="https://eoimages.gsfc.nasa.gov/images/imagerecords/86000/86986/globaltreecover10pct_etm_2000_2009_front.jpg"
            />
          </a>
        </div>

        <div className="card text-center">
          <blockquote className="blockquote mb-0 card-body">
            <p>The Planet Has 3 Trillion Trees, but They Could Be Gone in 300 Years</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite>
                  <a
                    href="http://www.takepart.com/article/2015/09/03/more-trees-3-trillion-humans-cut-down-half"
                    target="_blank"
                    className="text-dark"
                  >
                    takepart
                  </a>
                </cite>
              </small>
            </footer>
          </blockquote>
        </div>

        <div className="card text-center bg-danger text-white">
          <div className="card-body">
            <h2 className="card-title">EVERY SECOND</h2>
            <p className="card-text">Man Cut Down 317 Trees</p>
          </div>
        </div>

        <div className="card text-center">
          <blockquote className="blockquote mb-0 card-body">
            <p>Deforestation is the second-leading cause of climate change after burning fossil fuels
              and accounts for nearly 20 percent of all greenhouse gas emissions</p>
            <footer className="blockquote-footer">
              <small>
                <cite>
                  <a
                    href="https://blogs.worldbank.org/climatechange/save-forests-think-beyond-trees"
                    target="_blank"
                    className="text-dark"
                  >
                    worldbank
                  </a>
                </cite>
              </small>
            </footer>
          </blockquote>
        </div>

        <div className="card text-center bg-warning">
          <blockquote className="blockquote mb-0 card-body">
            <p>Humans cut down approximately 15 billion trees a year and re-plant about 5 billion</p>
            <footer className="blockquote-footer">
              <small>
                <cite>
                  <a
                    href="https://blog.tentree.com/fact-check-are-there-really-more-trees-today-than-100-years-ago"
                    target="_blank"
                    className="text-dark"
                  >
                    tentree
                  </a>
                </cite>
              </small>
            </footer>
          </blockquote>
        </div>

        <div className="card text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>The natural environment sustains the life of all beings universally</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite>Dalai Lama</cite>
              </small>
            </footer>
          </blockquote>
        </div>

        <div className="card text-center bg-success text-white">
          <div className="card-body">
            <p className="card-text">
              <a
                href="https://teamtrees.org/"
                target="_blank"
                className="text-white"
              >
                #teamtrees
              </a>,
              a collaborative fundraiser movement, has successfully planted <br />
              <span className="h2 font-weight-bold">22.687.196</span> <br />
              trees worldwide in 2020
            </p>
          </div>
        </div>

        <div className="card">
          <blockquote className="blockquote mb-0 card-body text-center">
            <p>
              80% of the world’s known terrestrial plant and animal species can be found in forests.
              A square kilometer of forest may be home to more than 1.000 species
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite>
                  <a
                    href="https://www.worldwildlife.org/initiatives/forests"
                    target="_blank"
                    className="text-dark"
                  >
                    WWF
                    </a>
                </cite>
              </small>
            </footer>
          </blockquote>
        </div>

        <div className="card text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>The Earth is what we all have in common</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite>Wendell Berry</cite>
              </small>
            </footer>
          </blockquote>
        </div>
      </div>

      <div className="card my-3 text-center shadow-lg">
        <div className="card-body">
          <h3 className="card-text">
            You Can Save the World
          </h3>
          <h4 className="card-text">
            Start Plant the Tree
          </h4>
          <div className="d-flex flex-md-row flex-column justify-content-around align-items-center">
            <div className="org-wrapper">
              <a
                href="https://trees4trees.org/"
                target="_blank">
                <img src="https://trees4trees.org/wp-content/uploads/2020/07/logo-t4t-optimized.png" />
              </a>
            </div>
            <div className="org-wrapper">
              <a
                href="https://teamtrees.org/"
                target="_blank">
                <img src="https://teamtrees.org/img/logo.png" />
              </a>
            </div>
            <div className="org-wrapper">
              <a
                href="https://onetreeplanted.org/"
                target="_blank">
                <img src="https://cdn.shopify.com/s/files/1/0326/7189/files/OTP_H_BW_WHITE_RGB_06e3d9eb-937c-4c8c-889d-afdf495242db_410x.png" className="invert-color" />
              </a>
            </div>
            <div className="org-wrapper">
              <a
                href="https://friendsoftrees.org/"
                target="_blank">
                <img src="https://e5p3y2s2.stackpathcdn.com/wp-content/uploads/2017/07/Friends-Of-Trees-Logo.png" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
      .invert-color {
        filter: invert(100%);
      }
      .org-wrapper {
        width: 150px;
        height: 90px;
        display: flex;
        align-items: center;
      }
      .org-wrapper img {
        max-width: 100%;
        height: auto;
      }
      `}</style>
    </div>
  )
}

export default Home
