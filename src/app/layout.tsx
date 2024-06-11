import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { RootLayoutProps } from '@/app/interfaces/globalInterfaces';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from '@/app/context/ThemeContext'

const inter = Inter({ subsets: ['latin'] });

interface Metadata {
    title: string;
    description: string;
}

const metadata: Metadata = {
    title: 'myflix',
    description: 'Your ultimate movie collection app.',
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider>
            <Navbar />
            <div style={{ flex: 1 }}>
                {children}
            </div>
            <Footer className="stickyFooter" />
        </ThemeProvider>
        </body>
        </html>
    );
};

export default RootLayout;
export { metadata };
