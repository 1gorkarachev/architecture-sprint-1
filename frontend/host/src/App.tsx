import React, { lazy , Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

const Login = lazy(() => import('auth/Login'));
const Register = lazy(() => import('auth/Register'));
const Profile = lazy(() => import('user/Profile'));
const EditProfilePopup = lazy(() => import('user/EditProfilePopup'));
const EditAvatarPopup = lazy(() => import('user/EditAvatarPopup'));
const Places = lazy(() => import('place/Places'));
const AddPlace = lazy(() => import('place/AddPlace'));
const AddPlacePopup = lazy(() => import('place/AddPlacePopup'));

import "./index.css";

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);


  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <BrowserRouter>
      <div className="page__content">
        <Header onSignOut={() => console.log('logoul')} email="test" />
        <Routes>
          <Route path="/" element={
            <main className="content">
              <section className="profile page__section">
                <Suspense fallback={<div>Загрузка...</div>}>
                  <Profile
                    onEditProfile={() => setIsEditProfilePopupOpen(true)}
                    onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
                  />
                </Suspense>
                <Suspense>
                  <AddPlace onAddPlace={() => setIsAddPlacePopupOpen(true)} />
                </Suspense>
              </section>
              <section className="places page__section">
                <Suspense fallback={<div>Загрузка...</div>}>
                  <Places />
                </Suspense>
              </section>
            </main>
          } />
          <Route path="/signup" element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <Register onRegister={() => console.log('register')} />
            </Suspense>
          } />
          <Route path="/signin" element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <Login onLogin={() => console.log('login')} />
            </Suspense>
          } />
        </Routes>
        <Footer />
        <Suspense fallback={<div>Загрузка...</div>}>
          <EditProfilePopup
            isOpen={isEditAvatarPopupOpen}
            onUpdateUser={closeAllPopups}
            onClose={closeAllPopups}
          />
        </Suspense>
        <Suspense fallback={<div>Загрузка...</div>}>
          <EditAvatarPopup
            isOpen={isEditProfilePopupOpen}
            onUpdateAvatar={closeAllPopups}
            onClose={closeAllPopups}
          />
        </Suspense>
        <Suspense fallback={<div>Загрузка...</div>}>
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onAddPlace={closeAllPopups}
            onClose={closeAllPopups}
          />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
