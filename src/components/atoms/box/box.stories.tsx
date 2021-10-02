import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { Box } from '.';
import { Story, StoryScreen, UseCase } from '../../../../storybook/views';

storiesOf('Atoms / Box', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('Default', () => (
    <Story>
      <UseCase title="A box with height=40px width=40px and backgroundColor=blue">
        <Box width="40px" height="40px" backgroundColor="blue" />
      </UseCase>
    </Story>
  ));
