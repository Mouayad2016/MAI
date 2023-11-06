import React from 'react';

type ServiceProps = {
  subtitle?: string;
  dark?: string;
  title?: string;
  centerAlign?: boolean;
  description?: string;
};

const SectionTitle = ({
  subtitle,
  dark,
  title,
  centerAlign,
  description,
}: ServiceProps) => {
  return (
    <>
      {subtitle ? (
        <div
          className={`${
            centerAlign
              ? 'section-heading text-center'
              : 'section-heading text-center-mobile'
          }`}
          // data-aos='fade-up'
        >
          <h4 className={`h5 ${dark ? 'text-warning' : 'text-primary'}`}>
            {subtitle}
          </h4>
          <h2 className="text-dark pt-20 text-center-mobile">{title}</h2>
          <p className="text-dark pt-20 res-fs-5 text-center-mobile">
            {description}
          </p>
        </div>
      ) : (
        <div
          className={`${
            centerAlign ? 'section-heading text-center' : 'section-heading'
          }`}
        >
          <h2 className="text-center-mobile">{title}</h2>
          <p className="text-center-mobile">{description}</p>
        </div>
      )}
    </>
  );
};

export default SectionTitle;
