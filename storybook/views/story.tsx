import * as React from 'react';
import { ScrollView, View, ViewStyle } from 'react-native';

const ROOT: ViewStyle = { flex: 1 };

export const Story: React.FC = ({ children }) => {
  return (
    <View style={ROOT}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          padding: 16,
        }}
      >
        {children}
      </ScrollView>
    </View>
  );
};
