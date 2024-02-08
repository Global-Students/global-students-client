import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/SideBar';

export default function AdminPage() {
  return (
    <section className='flex justify-between mt-[69px]'>
      <div>
        <SideBar />
      </div>
      <div className='flex-1'>
        <Outlet />
      </div>
    </section>
  );
}
