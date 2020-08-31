import React from 'react';
import Input from './Input';
import Button from './Button';

const Header = () => (
  <header className="header">
    <h1>Hi Syed</h1>
    <div className="header-bar__input">
      <Input placeholder="Search Reports" />
    </div>
    <section className="header-bar">
      <div className="notification-wrapper">
        <span class="dot" />
        <Button className="notification" />
      </div>
      <Button className="settings" icon="settings" />
      <img src="/profile.jfif" alt="profile" width="38" height="38" />
    </section>
  </header>
);
export default Header;
