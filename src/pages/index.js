import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

import Introduce from '../components/Introduce';
import Experience from '../components/Experience';
import Project from '../components/Project';

export default function Home() {
  return (
    <div className="flex flex-col dark:bg-gray-900">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <div className="flex flex-col dark:bg-gray-900">
        <Nav />
        <Introduce />
        <Experience />
        <Project />
        <Footer />
      </div>
    </div>
  );
}
