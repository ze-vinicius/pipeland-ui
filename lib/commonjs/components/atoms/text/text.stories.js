"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("@storybook/react-native");

var _views = require("../../../../storybook/views");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactNative.storiesOf)('Atoms / Text', module).addDecorator(getStory => /*#__PURE__*/_react.default.createElement(_views.StoryScreen, null, getStory())).add('Header', () => /*#__PURE__*/_react.default.createElement(_views.Story, null, /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "header"
}, /*#__PURE__*/_react.default.createElement(_.Text, {
  variant: "header"
}, "A Header Text")))).add('Title', () => /*#__PURE__*/_react.default.createElement(_views.Story, null, /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "title"
}, /*#__PURE__*/_react.default.createElement(_.Text, {
  variant: "title"
}, "A Title Text")))).add('Subtitle', () => /*#__PURE__*/_react.default.createElement(_views.Story, null, /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "subtitle"
}, /*#__PURE__*/_react.default.createElement(_.Text, {
  variant: "subtitle"
}, "A Subtitle Text")))).add('Body 1', () => /*#__PURE__*/_react.default.createElement(_views.Story, null, /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "body 1"
}, /*#__PURE__*/_react.default.createElement(_.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec purus pulvinar metus imperdiet dictum in sit amet massa. Ut efficitur mattis mi. Etiam turpis libero, dapibus at bibendum eget, dapibus quis odio.")))).add('Body 2', () => /*#__PURE__*/_react.default.createElement(_views.Story, null, /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "body 2"
}, /*#__PURE__*/_react.default.createElement(_.Text, {
  variant: "body2"
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec purus pulvinar metus imperdiet dictum in sit amet massa. Ut efficitur mattis mi. Etiam turpis libero, dapibus at bibendum eget, dapibus quis odio.")))).add('Caption', () => /*#__PURE__*/_react.default.createElement(_views.Story, null, /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "caption"
}, /*#__PURE__*/_react.default.createElement(_.Text, {
  variant: "caption"
}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec purus pulvinar metus imperdiet dictum in sit amet massa. Ut efficitur mattis mi."))));
//# sourceMappingURL=text.stories.js.map