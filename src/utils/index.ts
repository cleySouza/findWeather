import {Dimensions} from 'react-native';

interface Props {
  percentWidth: number;
  percentHeight: number;
}

export function calculateDimension({percentWidth, percentHeight}: Props) {
  const {width, height} = Dimensions.get('window');

  const percentageWidth = percentWidth * width;
  const percentageHeight = percentHeight * height;
  return {
    width: percentageWidth,
    height: percentageHeight,
  };
}
