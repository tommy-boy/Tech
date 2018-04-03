import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

const styles = {
  container: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transform: '-webkit-translate(-50%, -50%)',
    transform: '-moz-translate(-50%, -50%)',
    transform: '-ms-translate(-50%, -50%)',    
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const RefreshIndicatorLoading = () => (
  <div style={styles.container}>
    <CircularProgress
      color="secondary"
      variant="determinate"
      size={50}
      left={0}
      top={0}
      loadingColor="#FF9800"
      status="loading"
      style={styles.refresh}
    />
  </div>
);

export default RefreshIndicatorLoading;