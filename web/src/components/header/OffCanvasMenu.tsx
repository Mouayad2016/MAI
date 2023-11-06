import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type myProps = {
  isOpen: boolean;
  toggleOffCanvas: () => void;
};

const OffCanvasMenu = ({ isOpen, toggleOffCanvas }: myProps) => {
  const showClass = isOpen ? 'show' : '';

  const [, setScroll] = useState(0);
  const [, setHeaderTop] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const stickyheader = document.querySelector('.main-header') as HTMLElement;
    if (stickyheader) {
      setHeaderTop(stickyheader.offsetTop);
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToSection(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string,
  ) {
    event.preventDefault();

    const targetSection = document.getElementById(sectionId);

    if (router.pathname === '/') {
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
        });
      }
      toggleOffCanvas();
    } else {
      // Navigate to the homepage and then to the section
      router.push('/').then(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
          });
          toggleOffCanvas();
        }
      });
    }
  }

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <>
      <div className={`offcanvas offcanvas-end ${showClass}`} tabIndex={-1}>
        <div className="offcanvas-header d-flex align-items-center mt-4">
          <Link
            href="/"
            className={`d-flex align-items-center mb-md-0 text-decoration-none `}
          >
            <img
              src={`/assets/img/logo.png`}
              alt="logo"
              width={90}
              className="ps-2"
            />
          </Link>
          <button
            type="button"
            className="close-btn text-danger"
            onClick={toggleOffCanvas}
          >
            <i className="far fa-close"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav col-12 col-md-auto justify-content-center main-menu">
            <li></li>
            <li>
              <Link
                href="#reg"
                className="nav-link"
                onClick={(e) => scrollToSection(e, 'reg')}
              >
                Whitelist
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="nav-link"
                onClick={(e) => scrollToSection(e, 'services')}
              >
                Tjänster
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OffCanvasMenu;
