import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Story, StoryScreen, UseCase } from '../../../../storybook/views';
import { Text } from '.';
storiesOf('Atoms / Text', module).addDecorator(getStory => /*#__PURE__*/React.createElement(StoryScreen, null, getStory())).add('Header', () => /*#__PURE__*/React.createElement(Story, null, /*#__PURE__*/React.createElement(UseCase, {
  title: "header"
}, /*#__PURE__*/React.createElement(Text, {
  variant: "header"
}, "A Header Text")))).add('Title', () => /*#__PURE__*/React.createElement(Story, null, /*#__PURE__*/React.createElement(UseCase, {
  title: "title"
}, /*#__PURE__*/React.createElement(Text, {
  variant: "title"
}, "A Title Text")))).add('Subtitle', () => /*#__PURE__*/React.createElement(Story, null, /*#__PURE__*/React.createElement(UseCase, {
  title: "subtitle"
}, /*#__PURE__*/React.createElement(Text, {
  variant: "subtitle"
}, "A Subtitle Text")))).add('Body 1', () => /*#__PURE__*/React.createElement(Story, null, /*#__PURE__*/React.createElement(UseCase, {
  title: "body 1"
}, /*#__PURE__*/React.createElement(Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec purus pulvinar metus imperdiet dictum in sit amet massa. Ut efficitur mattis mi. Etiam turpis libero, dapibus at bibendum eget, dapibus quis odio.")))).add('Body 2', () => /*#__PURE__*/React.createElement(Story, null, /*#__PURE__*/React.createElement(UseCase, {
  title: "body 2"
}, /*#__PURE__*/React.createElement(Text, {
  variant: "body2"
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec purus pulvinar metus imperdiet dictum in sit amet massa. Ut efficitur mattis mi. Etiam turpis libero, dapibus at bibendum eget, dapibus quis odio.")))).add('Caption', () => /*#__PURE__*/React.createElement(Story, null, /*#__PURE__*/React.createElement(UseCase, {
  title: "caption"
}, /*#__PURE__*/React.createElement(Text, {
  variant: "caption"
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec purus pulvinar metus imperdiet dictum in sit amet massa. Ut efficitur mattis mi."))));
//# sourceMappingURL=text.stories.js.map