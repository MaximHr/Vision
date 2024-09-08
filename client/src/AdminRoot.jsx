import React from 'react';
import { Outlet } from 'react-router-dom';
import '@radix-ui/themes/styles.css';
import {Theme} from '@radix-ui/themes'
import './admin.css';
import { Helmet } from 'react-helmet';

const AdminRoot = () => {
  return (
    <Theme accentColor='orange'>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Outlet />
    </Theme>
  )
}

export default AdminRoot;