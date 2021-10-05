"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("@storybook/react-native");

var _ = require(".");

var _views = require("../../../../storybook/views");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactNative.storiesOf)('Atoms / Box', module).addDecorator(getStory => /*#__PURE__*/_react.default.createElement(_views.StoryScreen, null, getStory())).add('Default', () => /*#__PURE__*/_react.default.createElement(_views.Story, null, /*#__PURE__*/_react.default.createElement(_views.UseCase, {
  title: "A box with height=40px width=40px and backgroundColor=blue"
}, /*#__PURE__*/_react.default.createElement(_.Box, {
  width: "40px",
  height: "40px",
  backgroundColor: "blue"
}))));
//# sourceMappingURL=box.stories.js.map