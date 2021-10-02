import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { Story, StoryScreen, UseCase } from '../../../../storybook/views';

import { Text } from '.';

storiesOf('Atoms / Text', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('Header', () => (
    <Story>
      <UseCase title="header">
        <Text variant="header">A Header Text</Text>
      </UseCase>
    </Story>
  ))
  .add('Title', () => (
    <Story>
      <UseCase title="title">
        <Text variant="title">A Title Text</Text>
      </UseCase>
    </Story>
  ))
  .add('Subtitle', () => (
    <Story>
      <UseCase title="subtitle">
        <Text variant="subtitle">A Subtitle Text</Text>
      </UseCase>
    </Story>
  ))
  .add('Body 1', () => (
    <Story>
      <UseCase title="body 1">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
          purus pulvinar metus imperdiet dictum in sit amet massa. Ut efficitur
          mattis mi. Etiam turpis libero, dapibus at bibendum eget, dapibus quis
          odio.
        </Text>
      </UseCase>
    </Story>
  ))
  .add('Body 2', () => (
    <Story>
      <UseCase title="body 2">
        <Text variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
          purus pulvinar metus imperdiet dictum in sit amet massa. Ut efficitur
          mattis mi. Etiam turpis libero, dapibus at bibendum eget, dapibus quis
          odio.
        </Text>
      </UseCase>
    </Story>
  ))
  .add('Caption', () => (
    <Story>
      <UseCase title="caption">
        <Text variant="caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
          purus pulvinar metus imperdiet dictum in sit amet massa. Ut efficitur
          mattis mi.
        </Text>
      </UseCase>
    </Story>
  ));
