import React from 'react';
import HeroTitle from './HeroTitle';
import DownloadButton from '../advo/components/downloadButton';
import Link from 'next/link';

const HeroFour = () => {
  return (
    <>
      <section className="hero-section ptb-120 text-dark gradient-backgroud">
        <div className="container">
          <div className="row justify-content-center text-center text-lg-start align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="hero-content-wrap mt-5 pt-5 mt-lg-0 mt-xl-0">
                <HeroTitle
                  title="MouayadAI din juridisk assistent"
                  desc="AI-drivet juridiskt verktyg som syftar till att revolutionera den juridiska branschen genom att automatisera en rad olika funktioner inom juridik med hjälp av avancerad AI (Artificiell intelligent)."
                  subtitle=""
                />

                <div
                  className="action-btns mt-5"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div className="btn me-3">
                    <DownloadButton platform="Android"></DownloadButton>
                  </div>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd5sYLvnl9gpTNulC1vrhSTgptJSusWxkhT6n1ckG0ZaXaIiQ/viewform"
                    className="btn btn-outline-light"
                  >
                    <img
                      src="assets\img\ios-apple.svg"
                      alt="awards"
                      width={30}
                      className="me-3"
                    />
                    Registerer dig för IOS
                  </Link>
                </div>
                <ul
                  className="nav subscribe-feature-list d-flex justify-content-center justify-content-lg-start w-100 mt-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <li className="nav-item">
                    <span className="ms-0">
                      <i className="far fa-check-circle text-primary me-2"></i>
                      Gratis för betatestare
                    </span>
                  </li>
                  <li className="nav-item">
                    <span>
                      <i className="far fa-check-circle text-primary me-2"></i>
                      Inga krav på dig
                    </span>
                  </li>
                </ul>

                <div
                  className="d-flex justify-content-center justify-content-lg-start mt-5"
                  data-aos="fade-right"
                  data-aos-delay="150"
                >
                  <img
                    src="assets\img\logo-text.png"
                    alt="awards"
                    width={180}
                    className="me-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8">
              <div
                className="hero-img-wrap position-relative app-screen-bg mt-5"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src="assets/img/advo-frames.png"
                  alt="hero"
                  className="img-fluid position-relative z-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroFour;
