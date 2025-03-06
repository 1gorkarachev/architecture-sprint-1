
    export type RemoteKeys = 'user/Profile' | 'user/EditProfilePopup' | 'user/EditAvatarPopup';
    type PackageType<T> = T extends 'user/EditAvatarPopup' ? typeof import('user/EditAvatarPopup') :T extends 'user/EditProfilePopup' ? typeof import('user/EditProfilePopup') :T extends 'user/Profile' ? typeof import('user/Profile') :any;