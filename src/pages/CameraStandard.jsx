import React from 'react';
import RoomDetail from '../components/RoomDetail';
import camera from '../data/cameraStandard.json';

const CameraStandard = () => {
  return (
    <RoomDetail
      camera={camera}
      assetFolder="cameraStandard"
      backPath="/camere"
    />
  );
};

export default CameraStandard;