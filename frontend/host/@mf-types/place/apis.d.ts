
    export type RemoteKeys = 'place/Places' | 'place/AddPlace' | 'place/AddPlacePopup';
    type PackageType<T> = T extends 'place/AddPlacePopup' ? typeof import('place/AddPlacePopup') :T extends 'place/AddPlace' ? typeof import('place/AddPlace') :T extends 'place/Places' ? typeof import('place/Places') :any;