import { Component } from 'solid-js';
import { Card, CardContent, Typography, List, ListItem } from '@suid/material';
import { meanings } from '../../types/entry';
import styles from './meaning.module.scss';

interface MeaningProps {
  meaning: meanings;
}

const Meaning: Component<MeaningProps> = (props) => {
  return (
    <Card class={styles.meaningCard}>
      <CardContent>
        <Typography variant='body1' sx={{ fontStyle: 'italic', mb: 1 }}>
          {props.meaning.partOfSpeech}
        </Typography>
        
        <List>
          {props.meaning.definitions.map((def, index) => (
            <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant='body1'>
                {index + 1}. {def.definition}
              </Typography>
              
              {def.example && (
                <Typography variant='body2' color='text.secondary' sx={{ pl: 2 }}>
                  "{def.example}"
                </Typography>
              )}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Meaning;