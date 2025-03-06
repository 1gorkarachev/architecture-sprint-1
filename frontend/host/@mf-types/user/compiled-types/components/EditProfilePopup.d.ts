import '../styles/popup/popup.css';
declare function EditProfilePopup({ isOpen, onUpdateUser, onClose }: {
    isOpen: boolean;
    onUpdateUser: (data: {
        name: string;
        about: string;
    }) => void;
    onClose: () => void;
}): import("react/jsx-runtime").JSX.Element;
export default EditProfilePopup;
