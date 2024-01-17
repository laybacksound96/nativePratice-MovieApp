import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";

const StackNavigator = createNativeStackNavigator();

type RootStackParamList = {
  One: undefined;
  Two: undefined;
  Three: undefined;
};

const One = ({ navigation: { navigate } }: NativeStackScreenProps<RootStackParamList, "One">) => (
  <TouchableOpacity onPress={() => navigate("Two")}>
    <Text>one</Text>
  </TouchableOpacity>
);
const Two = () => (
  <View>
    <Text>Two</Text>
  </View>
);
const Three = () => (
  <View>
    <Text>Three</Text>
  </View>
);

const Stack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="One" component={One} />
      <StackNavigator.Screen name="Two" component={Two} />
      <StackNavigator.Screen name="Three" component={Three} />
    </StackNavigator.Navigator>
  );
};

export default Stack;
