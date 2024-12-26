import './globals.css';
import { Poppins } from 'next/font/google';
import Footer from './components/common/Footer';
import { Header } from './components/common/Header';

// Initialize the Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-poppins',
  display: 'swap', // Ensures quick swapping to Poppins once it's loaded
});


// Set metadata
export const metadata = {
  title: 'My Website Title',
  description: 'My Website Description',
};

// Root layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${poppins.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
