import React from 'react';
import PageMeta from '../components/meta/PageMeta';
// import ContactFormThree from '../components/contact/ContactsForm';
import FeatureFour from '../components/features/FeatureFour';
import HeroFour from '../components/hero/HeroFour';
import FooterOne from '../components/footer/FooterOne';
import Navbar from '../components/header/Navbar';
import Layout from '../components/layout/Layout';

import RegisterForm from '../components/forms/smallregForm';

const Home = () => {
  return (
    <Layout>
      <PageMeta
        title="AI juridik | MouayadAI"
        description={
          'Vi kombinerar svensk AI-teknologi med juridisk expertis för att ge detaljerad rådgivning och professionell dokumenthantering. Ställ juridiska frågor och få tillgång till avancerad rådgivning anpassad för både individer och företag.'
        }
        keywords={
          'AI juridisk assistent, svensk AI juridik, professionell dokumenthantering, juridiska databaser, AI för rättsfrågor, kostnadseffektiv juridisk rådgivning, AI-driven juridisk hjälp, rättighetsförståelse, automatiserad juridik'
        }
      />
      <Navbar navDark={false} />
      <HeroFour />
      <FeatureFour />
      <RegisterForm />

      <FooterOne />
    </Layout>
  );
};
export default Home;
