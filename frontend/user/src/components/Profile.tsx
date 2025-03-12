const currentUser = {
  name: 'test',
  about: 'test',
  avatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
}

const Profile = ({ onEditProfile, onEditAvatar }: { onEditAvatar: () => void, onEditProfile: () => void }) => {
  const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };

  return (
    <>
      <div className="profile__image" onClick={onEditAvatar} style={imageStyle}></div>
      <div className="profile__info">
        <h1 className="profile__title">{currentUser.name}</h1>
        <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
        <p className="profile__description">{currentUser.about}</p>
      </div>
    </>
  )
}

export default Profile;
