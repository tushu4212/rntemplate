import React from 'react';

// Import all the icon libraries
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from '../../utils/theme';

// Define the available icon libraries as a union of the names
type IconLibraries =
  | 'MaterialCommunityIcons'
  | 'Entypo'
  | 'Feather'
  | 'MaterialIcons'
  | 'Fontisto'
  | 'Ionicons'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'FontAwesome6'
  | 'Octicons'
  | 'AntDesign'
  | 'SimpleLineIcons';

// Define props for the CustomIcon component
interface CustomIconProps {
  name: string;
  as: IconLibraries;
  size?: number;
  color?: string;
}

// Mapping of icon libraries to their components
const Icons = {
  MaterialCommunityIcons,
  Entypo,
  Feather,
  MaterialIcons,
  Fontisto,
  Ionicons,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Octicons,
  AntDesign,
  SimpleLineIcons,
};

// CustomIcon component
const CustomIcon: React.FC<CustomIconProps> = ({
  name,
  as,
  size = 24,
  color = COLORS.BLACK,
}) => {
  const IconComponent = Icons[as]; // Dynamically choose the icon library
  return <IconComponent name={name} size={size} color={color} />;
};

export default CustomIcon;
