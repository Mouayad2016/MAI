import { Box, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import SectionTitle from '../section/SectionTitle';
import { database, ref, push, set } from '../../config.js'; // Adjust the import path to match your project structure
interface FormData {
  email: string;
  // Add other form fields here as needed
}
const RegisterForm = () => {
  const [submitStatus, setSubmitStatus] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({ email: '' });
  const [emailError, setEmailError] = useState('');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldValue = e.target.value;
    setFormData({ ...formData, email: fieldValue });
  };

  // Validates the form
  const validateForm = () => {
    let isValid = true;
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setEmailError('Vänligen ange ett korrekt mail.');
      isValid = false;
    } else {
      setEmailError('');
    }

    return isValid;
  };

  // Handles form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;
    const data = { email: formData.email };
    try {
      setLoading(true);

      const emailRef = ref(database, 'emailList');
      const newEmailRef = push(emailRef);
      await set(newEmailRef, data);
      setFormData({ email: '' });
      setLoading(false);
      setSubmitStatus(true);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSubmitStatus(false);
    }
  };

  // Renders the component
  return (
    <section className="feature-section ptb-60" id="reg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <SectionTitle
              // subtitle="Utvecklat via Enormt"
              title="Registrera dig i vår whitelist"
              description="Var en av de första som får tillgång till detta verktyg genom att registrera dig"
              centerAlign
            />

            <div className={`mt-sm-4 bg-light p-3 rounded-custom `}>
              <h5 className="text-body mb-sm-4 text-center">
                Här registrerar du dig för whitelist
              </h5>
              <form
                id="email-form2"
                name="email-form"
                className="subscribe-form"
                onSubmit={handleSubmit}
              >
                <div className="field-container">
                  <div className="smreg d-md-flex d-flex">
                    <input
                      type="email"
                      className="form-control me-2 mb-2"
                      id="email"
                      required
                      placeholder="E-post"
                      aria-label="Email"
                      value={formData.email}
                      onChange={handleFormChange}
                    />

                    {loading === true ? (
                      <Box sx={{ height: '50px' }}>
                        <CircularProgress
                          className="btn btn-omaina-color  mt-4"
                          size={15}
                        />
                      </Box>
                    ) : (
                      <Box sx={{ height: '50px' }}>
                        <button type="submit" className="btn btn-soft-primary">
                          Skicka
                        </button>
                      </Box>
                    )}
                  </div>
                  {emailError && <p className="error-message">{emailError}</p>}
                  {submitStatus === true ? (
                    <p className="success-message">
                      Registreringen lyckades! Du kommer att få ett mail med
                      detaljer om webinariet.{' '}
                      <strong>Det kan hamna i skräpposten</strong>, så se även
                      där. Får du ingen mail!, ring oss på{' '}
                      <a href="tel:+46733524957">0733524957</a>
                    </p>
                  ) : submitStatus === false ? (
                    <p className="error-message">
                      Oops! Fel inträffat! Lyckades du inte registrera dig? Ring
                      oss på <a href="tel:+46733524957">0733524957</a> så fixar
                      vi det.
                    </p>
                  ) : submitStatus === undefined ? (
                    <p className="mild-konflikt">
                      Din e-postadress är redan registrerad för denna
                      webinarium. Du kommer dock att få en bekräftelse via
                      e-post.
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
