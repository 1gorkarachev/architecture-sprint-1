export const mfConfig = {
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    user: "user@http://localhost:3001/remoteEntry.js",
    auth: "auth@http://localhost:3002/remoteEntry.js",
    place: "place@http://localhost:3003/remoteEntry.js",
  },
  exposes: {},
  shared: ["react", "react-dom", "react-router-dom"],
};
