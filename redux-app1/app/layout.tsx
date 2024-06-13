"use client"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '../assets/style/globals.css';
import { rootReducer } from '@/reducers';

// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const store = createStore(rootReducer);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='flex flex-col h-full'>
      <Provider store={store}>
        <Header/>
        <div className='mainContent grow'>
          {children}
        </div>
        <Footer/>
      </Provider>
        </body>
    </html>
  );
}
