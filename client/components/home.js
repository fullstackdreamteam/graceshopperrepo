import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="bg-header">
        <div className="right-cont">
          <div className="right-box">
            <div>
              <h4>Boating Life</h4>
            </div>
            <div>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable
              </p>
            </div>
            <div className="button-home">
              <a
                href="/products"
                className="btn btn-outline-light  btn-block"
                role="button"
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h3>hello</h3>
        </div>
        <div className="col">
          <h3>hello</h3>
        </div>
        <div className="col">
          <h3>hello</h3>
        </div>
      </div>
    </div>
  )
}

export default Home
