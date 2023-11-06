import Head from 'next/head';

interface PageMetaProps {
  title: string;
  description: string;
  keywords: string;
}

const PageMeta: React.FC<PageMetaProps> = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* Add more Open Graph (og) meta tags as needed */}
      <meta name="robots" content="index,follow" />
    </Head>
  );
};

export default PageMeta;
