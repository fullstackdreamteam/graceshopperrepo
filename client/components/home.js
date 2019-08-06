import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="bg-header">
        <div className="right-cont">
          <div className="logo-header">
            <img src="https://i.ibb.co/xYYmg7f/Boats-RUs-Small-Stroke.png" />
          </div>
          <div className="right-box">
            <div>
              <h4>Boating Life</h4>
            </div>
            <div>
              <p>
                Do you enjoy life out in the open sea? Then you've come to the
                right place. Boats R Us is America's number one online boating
                seller. Browse are massive inventory of yachts, dingy's,
                speedboats, fishing boats, and more!
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
      <div style={{paddingTop: '15px', paddingBottom: '20px'}}>
        <div className="row">
          <div className="col">
            <div className="card" style={{width: '23.5rem'}}>
              <img
                src="https://media.tmgcreative.com/2019/MAKO_1912019/Offshore-Boats_1932019/334-CC-Family-Edition_4671/Product-Beauty_1326546/334-CC-Family-Edition_img182565_700.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  Fishing boats for the fishing enthusiast in you. Check out our
                  wide variety of models.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: '23.5rem'}}>
              <img
                src="https://larsonboats.blob.core.windows.net/media/1327/2016-larson-190-wb-running-heli-4868.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  Speed boats are one of the bets ways to enjoy the open sea. We
                  sell all the latest styles and models.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: '23.5rem'}}>
              <img
                src="https://www.ewboats.com/wp-content/uploads/Edgewater-230CX-Gallery-3.jpg"
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">
                  Looking for a joy ride on a lazy Sunday afternoon? We offer
                  large and small paty boats that are perfect for every
                  occasion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-box">
          <div>
            <center>
              <h4>East Coast Location:</h4>
              <p>517 Main st. South Atlanta, GA. 11978</p>
              <h4>West Coast Location:</h4>
              <p>1198 Pacific Drive wy. LA, CA. 97182</p>
            </center>
          </div>
        </div>

        <div className="footer-box">
          <div>
            <center>
              <h4>Hours of Operations:</h4>
              <p>Monday: 10:00 - 18:30</p>
              <p>Tuesday: 10:00 - 18:30</p>
              <p>Wednesday: 10:00 - 18:30</p>
              <p>Thursday: 10:00 - 18:30</p>
              <p>Friday: 10:00 - 18:30</p>
              <p>Saturday: 11:30 - 17:00</p>
              <p>Sunday: CLOSED</p>
            </center>
          </div>
        </div>

        <div className="footer-box">
          <div>
            <center>
              <h4>Contact Us:</h4>
              <p> email: hello@boatsRus.com</p>
              <p>customer service: (1)855-199-2395</p>
              <p>Please Follow us on Social Media and Send of Feedback!</p>
            </center>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
