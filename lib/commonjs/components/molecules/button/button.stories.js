"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("@storybook/react-native");

var _views = require("../../../../storybook/views");

var _button = require("./button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactNative.storiesOf)('Molecules / Button', module).addDecorator(getStory => /*#__PURE__*/_react.default.createElement(_views.StoryScreen, null, getStory())).add('Color Variants', () => /*#__PURE__*/_react.default.createElement(_views.Story, null, /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "Primary"
}, /*#__PURE__*/_react.default.createElement(_button.Button, null, "Press me")), /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "Outline"
}, /*#__PURE__*/_react.default.createElement(_button.Button, {
  variant: "outline"
}, "Press me")), /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "Ghost"
}, /*#__PURE__*/_react.default.createElement(_button.Button, {
  variant: "ghost"
}, "Press me")))).add('Size Variants', () => /*#__PURE__*/_react.default.createElement(_views.Story, null, /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "Small Primary"
}, /*#__PURE__*/_react.default.createElement(_button.Button, {
  size: "small"
}, "Press me")), /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "Medium Primary"
}, /*#__PURE__*/_react.default.createElement(_button.Button, {
  size: "medium"
}, "Press me")), /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "Large Primary"
}, /*#__PURE__*/_react.default.createElement(_button.Button, {
  size: "large"
}, "Press me")), /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "Small Outline"
}, /*#__PURE__*/_react.default.createElement(_button.Button, {
  variant: "outline",
  size: "small"
}, "Press me")), /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "Medium Outline"
}, /*#__PURE__*/_react.default.createElement(_button.Button, {
  variant: "outline",
  size: "medium"
}, "Press me")), /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "Large Outline"
}, /*#__PURE__*/_react.default.createElement(_button.Button, {
  variant: "outline",
  size: "large"
}, "Press me")), /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "Small Ghost"
}, /*#__PURE__*/_react.default.createElement(_button.Button, {
  variant: "ghost",
  size: "small"
}, "Press me")), /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "Medium Ghost"
}, /*#__PURE__*/_react.default.createElement(_button.Button, {
  variant: "ghost",
  size: "medium"
}, "Press me")), /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "Large Ghost"
}, /*#__PURE__*/_react.default.createElement(_button.Button, {
  variant: "ghost",
  size: "large"
}, "Press me"))));
//# sourceMappingURL=button.stories.js.map