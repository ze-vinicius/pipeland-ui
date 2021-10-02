import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { CenterView } from '../../../../storybook/stories/CenterView';

import { Text } from '.';
import { Box } from '../box';

storiesOf('Atoms / Text', module)
  .addDecorator((getStory) => (
    <CenterView>
      <Box p={4}>{getStory()}</Box>
    </CenterView>
  ))
  .add('Header', () => <Text variant="header">A Header Text</Text>)
  .add('Title', () => <Text variant="title">A Title Text</Text>)
  .add('Subtitle', () => <Text variant="subtitle">A Subtitle Text</Text>)
  .add('Body 1', () => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec purus
      pulvinar metus imperdiet dictum in sit amet massa. Ut efficitur mattis mi.
      Etiam turpis libero, dapibus at bibendum eget, dapibus quis odio.
    </Text>
  ))
  .add('Body 2', () => (
    <Text variant="body2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec purus
      pulvinar metus imperdiet dictum in sit amet massa. Ut efficitur mattis mi.
      Etiam turpis libero, dapibus at bibendum eget, dapibus quis odio.
    </Text>
  ))
  .add('Caption', () => (
    <Text variant="caption">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec purus
      pulvinar metus imperdiet dictum in sit amet massa. Ut efficitur mattis mi.
    </Text>
  ));
