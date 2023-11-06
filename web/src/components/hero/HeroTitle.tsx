import React from 'react';

type Props = {
  subtitle: string;
  title: string;
  desc: string;
};

const HeroTitle = ({ subtitle, title, desc }: Props) => {
  return (
    <>
      {subtitle ? <h5 className="text-warning">{subtitle}</h5> : ''}
      <h1 className="fw-bold display-5 text-dark">{title}</h1>
      <p className="lead text-dark">{desc}</p>
    </>
  );
};

export default HeroTitle;
