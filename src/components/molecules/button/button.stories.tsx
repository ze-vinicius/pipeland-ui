import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Story, StoryScreen, UseCase } from '../../../../storybook/views';
import { Button } from './button';

storiesOf('Molecules / Button', module)
  .addDecorator((getStory) => <StoryScreen>{getStory()}</StoryScreen>)
  .add('Color Variants', () => (
    <Story>
      <UseCase title="Primary">
        <Button>Press me</Button>
      </UseCase>
      <UseCase title="Outline">
        <Button variant="outline">Press me</Button>
      </UseCase>
      <UseCase title="Ghost">
        <Button variant="ghost">Press me</Button>
      </UseCase>
    </Story>
  ))
  .add('Size Variants', () => (
    <Story>
      <UseCase title="Small Primary">
        <Button size="small">Press me</Button>
      </UseCase>
      <UseCase title="Medium Primary">
        <Button size="medium">Press me</Button>
      </UseCase>
      <UseCase title="Large Primary">
        <Button size="large">Press me</Button>
      </UseCase>
      <UseCase title="Small Outline">
        <Button variant="outline" size="small">
          Press me
        </Button>
      </UseCase>
      <UseCase title="Medium Outline">
        <Button variant="outline" size="medium">
          Press me
        </Button>
      </UseCase>
      <UseCase title="Large Outline">
        <Button variant="outline" size="large">
          Press me
        </Button>
      </UseCase>
      <UseCase title="Small Ghost">
        <Button variant="ghost" size="small">
          Press me
        </Button>
      </UseCase>
      <UseCase title="Medium Ghost">
        <Button variant="ghost" size="medium">
          Press me
        </Button>
      </UseCase>
      <UseCase title="Large Ghost">
        <Button variant="ghost" size="large">
          Press me
        </Button>
      </UseCase>
    </Story>
  ));
