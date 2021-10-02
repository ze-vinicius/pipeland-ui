import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";

import { Box } from "./";

storiesOf("Box", module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add("with text", () => (
    <Box width="40px" height="40px" backgroundColor="blue" />
  ));
