// HapticTab.js
import * as Haptics from "expo-haptics";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function Tabs({ children, onPress, accessibilityState }: any) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.92);
    Haptics.selectionAsync();
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
    onPress?.();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={{
        borderColor: "#2f2f2f",
      }}
      accessibilityState={accessibilityState}
    >
      <Animated.View
        style={[
          animatedStyle,
          { flex: 1, alignItems: "center", justifyContent: "center" },
        ]}
      >
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
