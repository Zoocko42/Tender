import React from 'react';

export default function Nav() {

    return (
        <nav className='main-header-menu'>
            <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div>
          <a href="#">Home</a>
        </div>
        <div>
          <a href="#">Login</a>
        </div>
        <div>
          <a href="#">Signup</a>
        </div>
        <div>
          <a href="#">About</a>
        </div>
        <div>
          <a href="#">Help</a>
        </div>
        </section>
        </nav>
    )
}