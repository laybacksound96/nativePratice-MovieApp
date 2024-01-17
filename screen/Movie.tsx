import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Movie = ({ navigation: { navigate } }) => (
  <Button onPress={() => navigate("Stack", { screen: "Three" })}>
    <Text>Movie</Text>
  </Button>
);

export default Movie;
