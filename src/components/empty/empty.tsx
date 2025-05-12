import { Component } from 'solid-js';
import { Box, Typography } from '@suid/material';
import styles from './empty.module.scss';

const Empty: Component = () => {
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
                <Typography variant='h1' color='text.secondary'>
                    Simple Dictionary
                </Typography>
            </Box>
        </div>
    );
}

export default Empty;