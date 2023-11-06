import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  desc: string;
  blogtags: boolean;
};

const PageHeader = ({ title, desc, blogtags }: Props) => {
  return (
    <>
      (
      <section className="gradient-backgroud position-relative overflow-hidden ptb-60">
        <div className="container pt-5">
          <div
            className={`row ${
              blogtags ? 'justify-content-center text-center' : ''
            }`}
          >
            <div className="col-lg-8 col-md-12">
              <h1 className="display-5 fw-bold text-dark pt-50 text-center-mobile">
                {title}
              </h1>
              <p className="text-dark res-fs-5 text-center-mobile pt-20 ">
                {desc}
              </p>
            </div>
          </div>
          {blogtags ? (
            <div className="row justify-content-center text-center">
              <div className="col-xl-8">
                <Link
                  href="#"
                  className="btn btn-soft-primary btn-pill btn-sm m-2"
                >
                  Marketing
                </Link>
                <Link
                  href="#"
                  className="btn btn-soft-primary btn-pill btn-sm m-2"
                >
                  Sales
                </Link>
                <Link
                  href="#"
                  className="btn btn-soft-primary btn-pill btn-sm m-2"
                >
                  Design
                </Link>
                <Link
                  href="#"
                  className="btn btn-soft-primary btn-pill btn-sm m-2"
                >
                  Development
                </Link>
                <Link
                  href="#"
                  className="btn btn-soft-primary btn-pill btn-sm m-2"
                >
                  Product Design
                </Link>
                <Link
                  href="#"
                  className="btn btn-soft-primary btn-pill btn-sm m-2"
                >
                  Cushrefmers
                </Link>
                <Link
                  href="#"
                  className="btn btn-soft-primary btn-pill btn-sm m-2"
                >
                  Agency
                </Link>
                <Link
                  href="#"
                  className="btn btn-soft-primary btn-pill btn-sm m-2"
                >
                  Inveshrefrs
                </Link>
                <Link
                  href="#"
                  className="btn btn-soft-primary btn-pill btn-sm m-2"
                >
                  Research
                </Link>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </section>
    </>
  );
};

export default PageHeader;
