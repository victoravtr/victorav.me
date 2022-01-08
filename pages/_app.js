import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import SEO from '../next-seo.config';
import { GlobalStyles } from '../styles/global-styles';
import 'highlight.js/styles/github.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <DefaultSeo {...SEO} />
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}
