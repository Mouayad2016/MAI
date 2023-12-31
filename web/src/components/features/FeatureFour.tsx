import React from 'react';
import SectionTitle from '../section/SectionTitle';

const FeatureFour = () => {
  return (
    <>
      <section className="feature-section ptb-120" id="services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <SectionTitle
                subtitle="Utvecklat via Enormt"
                title="MouayadAI erbjuder följande "
                description="Vårt juridiktjänst för närvarande är i sin
                testfasen. Versionen som finns på Google Play är bara en försmak 
                av hela tjänsten. Den fullständiga versionen kommer att ge bättre svar, 
                vara mer optimerad, och inkludera fler juridiska kategorier och tjänster. 
                Rgistrera dig för vår whitelist redan idag och få chansen att vara bland de första som får använda Sveriges mest avancerade AI-verktyg inom Juridik."
                centerAlign={true}
              />
            </div>
          </div>
          <div
            className="row row-home-main align-items-center justify-content-center;
"
          >
            <div className="col-lg-8 col-md-6">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0 z-2">
                  <div className="feature-icon d-inline-block bg-primary-soft rounded-circle mb-32">
                    <i className="fad fa-shield-alt text-primary fa-2x"></i>
                  </div>
                  <h3 className="h5">Juridisk Rådgivning</h3>
                  <p className="mb-0">
                    Vår avancerade AI är tränad med omfattande data från
                    juridiska databaser och kan erbjuda skräddarsydd rådgivning
                    för dina specifika ärenden. Oavsett rättsområde är tekniken
                    utrustad att navigera komplex juridik och ge klara,
                    begripliga svar. Med denna intelligenta rådgivning kan du
                    effektivt förstå dina rättigheter och få vägledning som är
                    anpassad för att just du ska nå bästa möjliga utfall.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0">
                  <div className="feature-icon d-inline-block bg-danger-soft rounded-circle mb-32">
                    <i className="fad fa-comment-alt-smile text-danger fa-2x"></i>
                  </div>
                  <h3 className="h5">Rättsliga frågor</h3>
                  <p className="mb-0">
                    Revolutionerande sök motor som är designad för att hantera
                    och förenkla komplexa rättsliga frågor. Vårt system erbjuder
                    snabba och exakta svar, optimerade för både privatpersoner
                    och företag.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-6">
              <div
                className="position-relative"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="cta-card rounded-custom text-center custom-shadow p-5 bg-white mt-4 mt-lg-0 mt-md-0">
                  <div className="feature-icon d-inline-block bg-dark-soft rounded-circle mb-32">
                    <i className="fad fa-file-check text-success fa-2x"></i>{' '}
                  </div>
                  <h3 className="h5">Juridisk Dokumenthantering</h3>
                  <p className="mb-0">
                    Avancerad teknologi för dokumenthantering där du kan skapa
                    och analysera juridiska dokument. Du får också ett verktyg
                    som är specialanpassat för juridikens unika krav. Vi siktar
                    på att du ska känna dig helt trygg med den noggranna
                    sammanfattningen du får, och vi strävar efter att ge dig
                    full insyn i hur processen fungerar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureFour;
