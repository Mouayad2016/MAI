import React, { useEffect, useState } from 'react';
import OffCanvasMenu from './OffCanvasMenu';
import Link from 'next/link';
import { useRouter } from 'next/router';

import NavBarButton from '../button/navBarButton';

type MyProps = {
  navDark: boolean;
};

const Navbar = ({ navDark }: MyProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const router = useRouter();

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
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
    } else {
      // Navigate to the homepage and then to the section
      router.push('/').then(() => {
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
          });
        }
      });
    }
  }

  return (
    <>
      <header
        className={`main-header ${
          navDark ? 'position-absolute ' : ''
        } w-100 position-absolute `}
      >
        <nav
          className={`navbar navbar-expand-xl z-10 ${
            navDark ? 'navbar-dark' : 'navbar-light'
          } sticky-header ${scroll > headerTop ? 'affix' : ''}`}
        >
          <div className="container d-flex align-items-center justify-content-lg-between position-relative">
            <div className="logo">
              <Link
                href="/"
                className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
              >
                <img
                  src={`assets/img/logo.png`}
                  alt="logo"
                  height={60}
                  // width={200}
                  className="logo-color logo"
                />
              </Link>
            </div>
            <button
              className="navbar-toggler position-absolute right-0 border-0"
              type="button"
              aria-label="Toggle navigation"
              style={{ cursor: 'pointer' }}
              onClick={toggleOffCanvas}
            >
              <span className="navbar-toggler-icon" style={{ color: '#fff' }} />
            </button>
            <div className="collapse navbar-collapse justify-content-center">
              <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                <li>
                  <Link href="/" className="nav-link">
                    Mouayad AI
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
                <li></li>
              </ul>
            </div>
            <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
              <Link
                href="#reg"
                onClick={(e) => scrollToSection(e, 'reg')}
                className="display-none-max-with-1200"
              >
                <NavBarButton></NavBarButton>
              </Link>
            </div>
            <OffCanvasMenu isOpen={isOpen} toggleOffCanvas={toggleOffCanvas} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
