import React from 'react';
import PopupWithForm from './PopupWithForm';

import '../styles/popup/popup.css'

function EditAvatarPopup({ isOpen, onUpdateAvatar, onClose }: { isOpen: boolean; onUpdateAvatar: () => void; onClose: () => void}) {

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();

    onUpdateAvatar();
  }

  return (
    <PopupWithForm
      isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title="Обновить аватар" name="edit-avatar"
    >
      <label className="popup__label">
        <input type="url" name="avatar" id="owner-avatar"
               className="popup__input popup__input_type_description" placeholder="Ссылка на изображение"
               required />
        <span className="popup__error" id="owner-avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
