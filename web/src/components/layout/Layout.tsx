import { ReactNode } from 'react';


type LayoutProps = {
  children: ReactNode;
  hasClass?: boolean;
  classOpt?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, hasClass, classOpt }) => {
  return (
    <div className={`main-wrapper ${classOpt || ''} ${hasClass ? "overflow-hidden" : ''}`}>
      {children}
    </div>
  );
};

export default Layout;
