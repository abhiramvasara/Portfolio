import "./styles/Loading3D.css";

const Loading3D = () => {
  return (
    <div className="character-model character-loading-placeholder">
      <div className="glowing-spinner-orb"></div>
      <p className="loading-3d-text">Connecting to 3D Workspace...</p>
    </div>
  );
};

export default Loading3D;
