import { useEffect, useState } from 'react';
import moment from 'moment';
import io from 'socket.io-client';
import Organization from '../components/Organization';

const socket = io();

const Home = () => {
  const [tree, setTree] = useState({
    total_tree: 0,
    updated_at: null,
  });

  useEffect(() => {
    socket.on('tree', (data) => {
      setTree(data);
    });
  }, []);

  return (
    <main className="container my-3">
      <h1 className="text-center">WorldTrees</h1>
      <div className="d-flex justify-content-center mt-3">
        <img src="/worldtree.svg" />
      </div>
      <header className="card my-3 text-center shadow-lg">
        <div className="card-body">
          {
            !tree.updated_at ? <img src="/loading.svg" /> : (
              <>
                <h3 className="card-text">
                  There are estimated <br />
                  <u>{Number(tree.total_tree).toLocaleString('id')}</u> <br />
                  <span>Trees in the World</span>
                </h3>
                <small className="card-text text-muted" title="DD/MM/YYYY">
                  Last update: {moment(tree.updated_at).format('DD/MM/YYYY, HH:mm:ss')}
                </small>
              </>
            )
          }
        </div>
      </header>

      <section className="card-columns">
        <article className="card text-center">
          <div className="card-body pb-0">
            <h5 className="card-title m-0">
              Global Forest Cover
            </h5>
          </div>
          <a
            href="https://eoimages.gsfc.nasa.gov/images/imagerecords/86000/86986/globaltreecover10pct_etm_2000_2009_front.jpg"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="card-img"
              src="https://eoimages.gsfc.nasa.gov/images/imagerecords/86000/86986/globaltreecover10pct_etm_2000_2009_front.jpg"
            />
          </a>
        </article>

        <article className="card text-center">
          <blockquote className="blockquote mb-0 card-body">
            <p>The Planet Has 3 Trillion Trees, but They Could Be Gone in 300 Years</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite>
                  <a
                    href="http://www.takepart.com/article/2015/09/03/more-trees-3-trillion-humans-cut-down-half"
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark"
                  >
                    takepart
                  </a>
                </cite>
              </small>
            </footer>
          </blockquote>
        </article>

        <article className="card text-center bg-danger text-white">
          <div className="card-body">
            <h2 className="card-title">EVERY SECOND</h2>
            <p className="card-text">Man Cut Down 317 Trees</p>
          </div>
        </article>

        <article className="card text-center">
          <blockquote className="blockquote mb-0 card-body">
            <p>Deforestation is the second-leading cause of climate change after burning fossil fuel
              and accounts for nearly 20 percent of all greenhouse gas emissions</p>
            <footer className="blockquote-footer">
              <small>
                <cite>
                  <a
                    href="https://blogs.worldbank.org/climatechange/save-forests-think-beyond-trees"
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark"
                  >
                    worldbank
                  </a>
                </cite>
              </small>
            </footer>
          </blockquote>
        </article>

        <article className="card text-center bg-warning">
          <blockquote className="blockquote mb-0 card-body">
            <p>Humans cut down approximately 15 billion trees a year and re-plant about 5 billion</p>
            <footer className="blockquote-footer">
              <small>
                <cite>
                  <a
                    href="https://blog.tentree.com/fact-check-are-there-really-more-trees-today-than-100-years-ago"
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark"
                  >
                    tentree
                  </a>
                </cite>
              </small>
            </footer>
          </blockquote>
        </article>

        <article className="card text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>The natural environment sustains the life of all beings universally</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite>Dalai Lama</cite>
              </small>
            </footer>
          </blockquote>
        </article>

        <article className="card text-center bg-success text-white">
          <div className="card-body">
            <p className="card-text">
              <a
                href="https://teamtrees.org/"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                #teamtrees
              </a>,
              a collaborative fundraiser movement, has successfully planted <br />
              <span className="h2 font-weight-bold">22.687.196</span> <br />
              trees worldwide in 2020
            </p>
          </div>
        </article>

        <article className="card text-center">
          <blockquote className="blockquote mb-0 card-body">
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
                    rel="noreferrer"
                    className="text-dark"
                  >
                    WWF
                  </a>
                </cite>
              </small>
            </footer>
          </blockquote>
        </article>

        <article className="card text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>The Earth is what we all have in common</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                <cite>Wendell Berry</cite>
              </small>
            </footer>
          </blockquote>
        </article>
      </section>

      <footer className="card my-3 text-center shadow-lg">
        <div className="card-body">
          <h3 className="card-text">
            You Can Save the World
          </h3>
          <h4 className="card-text">
            Start Plant the Tree
          </h4>
          <hr />
          <div className="d-flex flex-md-row flex-column justify-content-around align-items-center">
            <Organization
              link="https://trees4trees.org"
              image="https://trees4trees.org/wp-content/uploads/2020/07/logo-t4t-optimized.png"
            />
            <Organization
              link="https://teamtrees.org"
              image="https://teamtrees.org/img/logo.png"
            />
            <Organization
              link="https://onetreeplanted.org"
              image="https://media.pagefly.io/file/get/otp-logo-long-greenpng-1519919839601.png"
            />
            <Organization
              link="https://friendsoftrees.org"
              image="https://e5p3y2s2.stackpathcdn.com/wp-content/uploads/2017/07/Friends-Of-Trees-Logo.png"
            />
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
