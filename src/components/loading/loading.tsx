import { Component } from 'solid-js';
import { CircularProgress, Box } from '@suid/material';
import styles from './loading.module.scss';

const Loading: Component = () => {
  return (
    <div class={styles.container}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%'
        }}
      >
        <CircularProgress size={60} />
      </Box>
    </div>
  );
}

export default Loading;