import React from 'react';
import { Outlet } from 'react-router-dom';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import './admin.css'

const AdminRoot = () => {
  return (
    <Theme accentColor='orange'>
      <Outlet />
    </Theme>
  )
}

export default AdminRoot;