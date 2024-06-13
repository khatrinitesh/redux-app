"use client"
import Header from "@/components/Header";
import "./globals.css";
import { Provider } from "react-redux";
import store from './../redux/store';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header/>
          {children}
        </Provider>
        </body>
    </html>
  );
}
