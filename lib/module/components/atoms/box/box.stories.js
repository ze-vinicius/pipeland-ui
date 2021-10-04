import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Box } from '.';
import { Story, StoryScreen, UseCase } from '../../../../storybook/views';
storiesOf('Atoms / Box', module).addDecorator(getStory => /*#__PURE__*/React.createElement(StoryScreen, null, getStory())).add('Default', () => /*#__PURE__*/React.createElement(Story, null, /*#__PURE__*/React.createElement(UseCase, {
  title: "A box with height=40px width=40px and backgroundColor=blue"
}, /*#__PURE__*/React.createElement(Box, {
  width: "40px",
  height: "40px",
  backgroundColor: "blue"
}))));
//# sourceMappingURL=box.stories.js.map