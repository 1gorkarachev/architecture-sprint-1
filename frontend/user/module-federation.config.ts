export const mfConfig = {
  name: "user",
  filename: "remoteEntry.js",
  exposes: {
    "./Profile": "./src/components/Profile.tsx",
    "./EditProfilePopup": "./src/components/EditProfilePopup.tsx",
    "./EditAvatarPopup": "./src/components/EditAvatarPopup.tsx",
  },
  shared: ["react", "react-dom", "react-router-dom"],
};
