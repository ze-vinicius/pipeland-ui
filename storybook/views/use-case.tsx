import React from 'react';
import { View, Text, TextStyle, ViewStyle } from 'react-native';

const WRAPPER: ViewStyle = {
  backgroundColor: '#fff',
  borderRadius: 4,
  marginBottom: 8,
};

const TITLE_WRAPPER: ViewStyle = {
  borderBottomColor: '#c7c7c7',
  padding: 16,
  paddingBottom: 8,
  marginBottom: 8,
  borderBottomWidth: 1,
  borderStyle: 'solid',
};

const TITLE: TextStyle = {
  fontSize: 16,
  fontWeight: 'bold',
};

const DESCRIPTION: TextStyle = {};

const CONTENT: ViewStyle = {
  padding: 16,
};

interface UseCaseProps {
  title?: string;
  description?: string;
}

const UseCase: React.FC<UseCaseProps> = ({ children, title, description }) => (
  <View style={WRAPPER}>
    <View style={TITLE_WRAPPER}>
      <Text style={TITLE}>{title}</Text>
      <Text style={DESCRIPTION}>{description}</Text>
    </View>
    <View style={CONTENT}>{children}</View>
  </View>
);

UseCase.defaultProps = {
  title: undefined,
  description: undefined,
};

export { UseCase };
