import styled from 'styled-components';
import {FlatList} from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

export const Container = styled.View`
  background-color: ${colors.primary};
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`;

export const PageTitle = styled.Text`
  font-size: 40px;
  font-family: 'MavenPro-Black';
  padding-bottom: 2px;
`;

export const PostsList = styled(FlatList)`
  flex: 1;
  padding-top: 10px;
`;
