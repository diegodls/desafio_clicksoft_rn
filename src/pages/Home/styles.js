import styled from 'styled-components';
import {FlatList} from 'react-native';

import colors from '../../styles/colors';
import sizes from '../../styles/sizes';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  padding-left: ${sizes.paddingSmall}px;
  padding-right: ${sizes.paddingSmall}px;
`;

export const TWF = styled.TouchableWithoutFeedback``;

export const TopContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${sizes.fontLarge}px;
  font-family: 'MavenPro-Black';
  padding-bottom: ${sizes.paddingVerySmall}px;
`;

export const PostsList = styled(FlatList)`
  flex: 1;
  padding-top: ${sizes.paddingSmall}px;
`;
