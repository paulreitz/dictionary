import { Component } from 'solid-js';
import { Box, Typography } from '@suid/material';
import styles from './not-found.module.scss';

const NotFound: Component = () => {
    return (
        <div class={styles.container}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                    gap: '1rem'
                }}
            >
                <div class={styles.iconContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={styles.icon}>
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                </div>
                <Typography variant='h4' color='text.primary'>
                    Word Not Found
                </Typography>
                <Typography variant='body1' color='text.secondary' class={styles.message}>
                    Sorry, we couldn't find this word in our dictionary.
                </Typography>
                <Typography variant='body2' color='text.secondary' class={styles.suggestion}>
                    Try checking the spelling or searching for a different word.
                </Typography>
            </Box>
        </div>
    );
}

export default NotFound;