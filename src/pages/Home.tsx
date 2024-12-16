import React from 'react';
import NothingPost from '../components/nothingPost';
import ButtonShare from '../components/buttonShare';
import TagList from '../components/tagList';
import Sidebar from '../components/sidebar';

function Home() {
  return (
    <div className='bg-Background/Middle relative min-h-screen flex flex-col'>
      <ButtonShare />
      <NothingPost />
      <NothingPost /> {/*delete this after testing,*/}
      <TagList />
      <Sidebar />
    </div>
  );
}

export default Home;

