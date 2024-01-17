import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(prop) => prop.theme.mainBgColor};
`;

const Title = styled.Text`
  color: red;
`;

const Movie = ({ navigation: { navigate } }) => (
  <Button onPress={() => navigate("Stack", { screen: "Three" })}>
    <Title>Movie</Title>
  </Button>
);

export default Movie;
