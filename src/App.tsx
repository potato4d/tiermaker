import React from 'react';
import TierList from './components/TierList';

const App: React.FC = () => {
  return (
    <div className="container w-full max-w-[880px] mx-auto">
      <h1 className="text-4xl font-bold pt-4 md:pt-8 export-md:pt-8 mb-8 text-center flex items-center justify-center" style={{
        fontFamily: 'Digital Numbers'
      }}><img src="/static/logo.png" alt="Tier Maker" width="225" height="35.5" /></h1>
      <TierList />

      <div className='flex items-center justify-center'>
        &copy; 2024 <a href="https://x.com/potato4d">@potato4d</a>
      </div>

      <footer className='flex px-4 justify-between items-center py-4 opacity-0' style={{
        width: '816px',
        maxWidth: '100%'
      }}>
        <div className='w-20 h-1'></div>
        <div className='text-sm flex-1 text-center'>Generated by <a href="https://tier.ygotools.com" target='_blank' className='underline'>https://tier.ygotools.com</a> created by @potato4d</div>
        <img src="/static/EXW.png" width="80" alt="teamEXTRAWIN" />
      </footer>
    </div>
  );
};

export default App;
