export const mfConfig = {
  name: "auth",
  filename: "remoteEntry.js",
  exposes: {
    "./Login": "./src/components/Login.tsx",
    "./Register": "./src/components/Register.tsx",
  },
  shared: ["react", "react-dom", "react-router-dom"],
};
