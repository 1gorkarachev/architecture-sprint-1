
    export type RemoteKeys = 'places/Places';
    type PackageType<T> = T extends 'places/Places' ? typeof import('places/Places') :any;