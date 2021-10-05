import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Story, StoryScreen, UseCase } from '../../../../storybook/views';
import { Button } from './button';
storiesOf('Molecules / Button', module).addDecorator(getStory => /*#__PURE__*/React.createElement(StoryScreen, null, getStory())).add('Color Variants', () => /*#__PURE__*/React.createElement(Story, null, /*#__PURE__*/React.createElement(UseCase, {
  title: "Primary"
}, /*#__PURE__*/React.createElement(Button, null, "Press me")), /*#__PURE__*/React.createElement(UseCase, {
  title: "Outline"
}, /*#__PURE__*/React.createElement(Button, {
  variant: "outline"
}, "Press me")), /*#__PURE__*/React.createElement(UseCase, {
  title: "Ghost"
}, /*#__PURE__*/React.createElement(Button, {
  variant: "ghost"
}, "Press me")))).add('Size Variants', () => /*#__PURE__*/React.createElement(Story, null, /*#__PURE__*/React.createElement(UseCase, {
  title: "Small Primary"
}, /*#__PURE__*/React.createElement(Button, {
  size: "small"
}, "Press me")), /*#__PURE__*/React.createElement(UseCase, {
  title: "Medium Primary"
}, /*#__PURE__*/React.createElement(Button, {
  size: "medium"
}, "Press me")), /*#__PURE__*/React.createElement(UseCase, {
  title: "Large Primary"
}, /*#__PURE__*/React.createElement(Button, {
  size: "large"
}, "Press me")), /*#__PURE__*/React.createElement(UseCase, {
  title: "Small Outline"
}, /*#__PURE__*/React.createElement(Button, {
  variant: "outline",
  size: "small"
}, "Press me")), /*#__PURE__*/React.createElement(UseCase, {
  title: "Medium Outline"
}, /*#__PURE__*/React.createElement(Button, {
  variant: "outline",
  size: "medium"
}, "Press me")), /*#__PURE__*/React.createElement(UseCase, {
  title: "Large Outline"
}, /*#__PURE__*/React.createElement(Button, {
  variant: "outline",
  size: "large"
}, "Press me")), /*#__PURE__*/React.createElement(UseCase, {
  title: "Small Ghost"
}, /*#__PURE__*/React.createElement(Button, {
  variant: "ghost",
  size: "small"
}, "Press me")), /*#__PURE__*/React.createElement(UseCase, {
  title: "Medium Ghost"
}, /*#__PURE__*/React.createElement(Button, {
  variant: "ghost",
  size: "medium"
}, "Press me")), /*#__PURE__*/React.createElement(UseCase, {
  title: "Large Ghost"
}, /*#__PURE__*/React.createElement(Button, {
  variant: "ghost",
  size: "large"
}, "Press me"))));
//# sourceMappingURL=button.stories.js.map