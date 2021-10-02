import React from "react";

import { storiesOf } from "@storybook/react-native";
import { CenterView } from "../../../../storybook/stories/CenterView";

import { Box } from "./";

storiesOf("Atoms / Box", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Blue box", () => (
    <Box width="40px" height="40px" backgroundColor="blue" />
  ));
