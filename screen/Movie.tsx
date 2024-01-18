import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import { Dimensions } from "react-native";
import { BlurView } from "expo-blur";
const ScrollView = styled.ScrollView`
  background-color: ${(props) => props.theme.mainBgColor};
`;
const Wrap = styled.View`
  flex: 1;
`;
const BgImg = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Movie = ({ navigation: { navigate } }) => (
  <ScrollView>
    <Swiper
      containerStyle={{ width: "100%", height: SCREEN_HEIGHT / 4 }}
      horizontal
      loop
      showsButtons={false}
      autoplay
      autoplayTimeout={3.5}
      showsPagination={false}
    >
      <Wrap style={{ backgroundColor: "red" }}></Wrap>
      <Wrap style={{ backgroundColor: "blue" }}></Wrap>
      <Wrap style={{ backgroundColor: "red" }}></Wrap>
      <Wrap style={{ backgroundColor: "blue" }}></Wrap>
    </Swiper>
  </ScrollView>
);

export default Movie;
