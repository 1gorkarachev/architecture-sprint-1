import React from 'react';
import '../styles/popup/popup.css';
import '../styles/popup/_is-opened/popup_is-opened.css';
declare function PopupWithForm({ title, name, isOpen, buttonText, onSubmit, onClose, children, }: {
    title: string;
    name: string;
    isOpen: boolean;
    buttonText?: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onClose: () => void;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export default PopupWithForm;
