import React from 'react';

const FooterOne = () => {
  return (
    <footer className="footer-section">
      <div className="footer-backgroud ptb-120 text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
              <div className="footer-single-col">
                <div className="footer-single-col mb-4">
                  <img
                    src={`/assets/img/white_logo.png`}
                    alt="logo"
                    className="img-fluid logo-white"
                  />
                </div>
                <div className="center_text">
                  <div className="justify-content-center d-flex mb-4"></div>
                  <div className="footer-single-col">
                    <ul className="list-unstyled footer-nav-list mb-lg-0">
                      <li className="text-white fw-bold ">
                        Gustav III:s Boulevard 32-34, 4tr 169 73 Solna, Sweden{' '}
                      </li>
                      <li>
                        <a
                          href="mailto:info@omania.se"
                          className="text-decoration-none text-white fw-bold"
                        >
                          info@mouayadai.com
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-white fw-bold"
                          href="tel:+46733524957"
                        >
                          +467 335 249 57
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer2-backgroud text-white py-4">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-7 col-lg-7">
              <div className="copyright-text">
                <p className="mb-lg-0 mb-md-0 text-white text-center-mobile">
                  &copy; Enormt alla rättigheter förbehållna.
                </p>
              </div>
            </div>
            <div className="footer-row text-end">
              <div className="col-md-4 col-lg-4">
                <div className="footer-single-col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
