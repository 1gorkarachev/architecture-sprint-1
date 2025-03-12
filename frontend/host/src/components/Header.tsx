import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import LogoPath from '../assets/logo.svg'

const Header = ({ onSignOut, email }: { onSignOut: () => void, email: string }) => {
  function handleSignOut(){
    onSignOut();
  }
  return (
    <header className="header page__section">
      <LogoPath className="logo header__logo" />
      <Routes>
        <Route path="/" element={
          <div className="header__wrapper">
            <p className="header__user">{ email }</p>
            <button className="header__logout" onClick={handleSignOut}>Выйти</button>
          </div>
        }>
        </Route>
        <Route path="/signup" element={
          <Link className="header__auth-link" to="/signin">Войти</Link>
          } />
        <Route path="/signin" element={
          <Link className="header__auth-link" to="/signup">Регистрация</Link>
        } />
      </Routes>
    </header>
  )
}

export default Header;
