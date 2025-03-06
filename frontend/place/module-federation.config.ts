export const mfConfig = {
  name: "place",
  filename: "remoteEntry.js",
  exposes: {
    "./Places": "./src/components/Places.tsx",
    "./AddPlace": "./src/components/AddPlace.tsx",
    "./AddPlacePopup": "./src/components/AddPlacePopup.tsx",
  },
  shared: ["react", "react-dom", "react-router-dom"],
};
