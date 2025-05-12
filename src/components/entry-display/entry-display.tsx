import { Component, For, Show } from 'solid-js';
import { Box, Typography, Divider } from '@suid/material';
import styles from './entry-display.module.scss';
import { currentEntry } from '../../state/dictionary-state';
import Meaning from '../meaning/meaning';

const EntryDisplay: Component = () => {
  return (
    <div class={styles.container}>
      <Show when={currentEntry()} fallback={
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
          <Typography variant='body1'>No word selected</Typography>
        </Box>
      }>
        <For each={currentEntry()}>
          {(wordItem) => (
            <Box class={styles.wordContainer}>
              <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
                <Typography variant='h4' sx={{ mr: 2 }}>{wordItem.word}</Typography>
                <Typography variant='body1' color='text.secondary'>{wordItem.phonetic}</Typography>
              </Box>
              
              <Box class={styles.meaningsContainer}>
                <For each={wordItem.meanings}>
                  {(meaning, index) => (
                    <>
                      <Meaning meaning={meaning} />
                      <Show when={index() < wordItem.meanings.length - 1}>
                        <Divider sx={{ my: 2 }} />
                      </Show>
                    </>
                  )}
                </For>
              </Box>
            </Box>
          )}
        </For>
      </Show>
    </div>
  );
};

export default EntryDisplay;