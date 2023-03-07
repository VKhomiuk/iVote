import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet, Text,
  View,
} from "react-native";

function App() {

  return (
    <View style={[styles.background, { paddingTop: StatusBar.currentHeight }]}>
      <StatusBar
        barStyle="light-content"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic">
        <View style={{ marginHorizontal: 16 }}>
          <Text>
            fsnujd
          </Text>
        </View>
      </ScrollView
      >
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#404040",
  },
});

export default App;
