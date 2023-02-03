import { type AppType } from "next/app";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import { api } from "../utils/api";
import "../styles/globals.css";
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';

import { Layout } from '../components/index';;


const MyApp = ({ Component, pageProps, }: AppProps<{ session: Session; }>) => {

// const MyApp: AppType = ({ Component, pageProps: { session, ...pageProps }, }) => {
  // const pca = new PublicClientApplication({
  //   auth: {
  //     clientId: 'daccbcbd-9465-4cbd-a810-439451287747',
  //     authority: 'https://login.microsoftonline.com/997bb24e-f4ba-452f-8f21-13714e0a657b',
  //     redirectUri: '/',
  //   }
  // })

  // pca.addEventCallback((event: any) => {
  //   if (event.eventType === EventType.LOGIN_SUCCESS) {
  //     console.log(event);
  //     pca.setActiveAccount(event.payload.account)
  //   }
  // })

  return (

    // <MsalProvider instance={pca}>
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </ Layout>
    </SessionProvider>
    // </MsalProvider>
  );
};


export default api.withTRPC(MyApp);
