import {Appearance, Dimensions, Platform, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import { RFValue } from "react-native-responsive-fontsize";

const {width, height} = Dimensions.get('window');
const colorScheme = Appearance.getColorScheme();
const shadowColor = colorScheme === 'dark' ? '#fff' : '#000';

export const CommonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexGrow1: {
    flexGrow: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },
  flexDirectionColumn: {
    flexDirection: 'column',
  },

  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },

  /** Justification **/
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  justifyEvenly: {
    justifyContent: 'space-evenly',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },

  centerAll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    justifyContent: 'center',
  },
  centerXY: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerY: {
    alignItems: 'center',
  },

  flexStartAll: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  flexStartX: {
    justifyContent: 'flex-start',
  },
  flexStartY: {
    alignItems: 'flex-start',
  },

  flexEndAll: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  flexEndX: {
    justifyContent: 'flex-end',
  },
  flexEndY: {
    alignItems: 'flex-end',
  },

  spaceBetweenAll: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  spaceAroundAll: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  spaceEvenlyAll: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  spaceCenterAll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexBetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
  },
  flexCenterAll: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(5),
  },
  flexAroundCenter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  /** MARGINS */
  m5: {margin: scale(5)},
  m10: {margin: scale(10)},
  m15: {margin: scale(15)},

  mt5: {marginTop: scale(5)},
  mt10: {marginTop: scale(10)},
  mt15: {marginTop: scale(15)},

  mb5: {marginBottom: scale(5)},
  mb10: {marginBottom: scale(10)},
  mb15: {marginBottom: scale(15)},

  ml5: {marginLeft: scale(5)},
  ml10: {marginLeft: scale(10)},
  ml15: {marginLeft: scale(15)},

  mr5: {marginRight: scale(5)},
  mr10: {marginRight: scale(10)},
  mr15: {marginRight: scale(15)},

  /** MARGIN VERTICAL & HORIZONTAL **/
  mv5: {marginVertical: scale(5)},
  mv10: {marginVertical: scale(10)},
  mv15: {marginVertical: scale(15)},
  mv20: {marginVertical: scale(20)},

  mh5: {marginHorizontal: scale(5)},
  mh10: {marginHorizontal: scale(10)},
  mh15: {marginHorizontal: scale(15)},
  mh20: {marginHorizontal: scale(20)},

  /** PADDINGS **/
  p5: {padding: scale(5)},
  p10: {padding: scale(10)},
  p15: {padding: scale(15)},

  pt5: {paddingTop: scale(5)},
  pt10: {paddingTop: scale(10)},
  pt15: {paddingTop: scale(15)},

  pb5: {paddingBottom: scale(5)},
  pb10: {paddingBottom: scale(10)},
  pb15: {paddingBottom: scale(15)},

  pl5: {paddingLeft: scale(5)},
  pl10: {paddingLeft: scale(10)},
  pl15: {paddingLeft: scale(15)},

  pr5: {paddingRight: scale(5)},
  pr10: {paddingRight: scale(10)},
  pr15: {paddingRight: scale(15)},

  /** PADDING VERTICAL & HORIZONTAL **/
  pv5: {paddingVertical: scale(5)},
  pv10: {paddingVertical: scale(10)},
  pv15: {paddingVertical: scale(15)},

  ph5: {paddingHorizontal: scale(5)},
  ph10: {paddingHorizontal: scale(10)},
  ph15: {paddingHorizontal: scale(15)},

  /** MARGINS (Percentage-based) **/
  m1p: {margin: height * 0.01},
  m2p: {margin: height * 0.02},
  m3p: {margin: height * 0.03},
  m4p: {margin: height * 0.04},
  m5p: {margin: height * 0.05},
  m6p: {margin: height * 0.06},
  m7p: {margin: height * 0.07},
  m8p: {margin: height * 0.08},
  m9p: {margin: height * 0.09},
  m10p: {margin: height * 0.1},

  mt1p: {marginTop: height * 0.01},
  mt2p: {marginTop: height * 0.02},
  mt3p: {marginTop: height * 0.03},
  mt4p: {marginTop: height * 0.04},
  mt5p: {marginTop: height * 0.05},
  mt6p: {marginTop: height * 0.06},
  mt7p: {marginTop: height * 0.07},
  mt8p: {marginTop: height * 0.08},
  mt9p: {marginTop: height * 0.09},
  mt10p: {marginTop: height * 0.1},

  mb1p: {marginBottom: height * 0.01},
  mb2p: {marginBottom: height * 0.02},
  mb3p: {marginBottom: height * 0.03},
  mb4p: {marginBottom: height * 0.04},
  mb5p: {marginBottom: height * 0.05},
  mb6p: {marginBottom: height * 0.06},
  mb7p: {marginBottom: height * 0.07},
  mb8p: {marginBottom: height * 0.08},
  mb9p: {marginBottom: height * 0.09},
  mb10p: {marginBottom: height * 0.1},

  ml1p: {marginLeft: width * 0.01},
  ml2p: {marginLeft: width * 0.02},
  ml3p: {marginLeft: width * 0.03},
  ml4p: {marginLeft: width * 0.04},
  ml5p: {marginLeft: width * 0.05},
  ml6p: {marginLeft: width * 0.06},
  ml7p: {marginLeft: width * 0.07},
  ml8p: {marginLeft: width * 0.08},
  ml9p: {marginLeft: width * 0.09},
  ml10p: {marginLeft: width * 0.1},

  mr1p: {marginRight: width * 0.01},
  mr2p: {marginRight: width * 0.02},
  mr3p: {marginRight: width * 0.03},
  mr4p: {marginRight: width * 0.04},
  mr5p: {marginRight: width * 0.05},
  mr6p: {marginRight: width * 0.06},
  mr7p: {marginRight: width * 0.07},
  mr8p: {marginRight: width * 0.08},
  mr9p: {marginRight: width * 0.09},
  mr10p: {marginRight: width * 0.1},

  mh1p: {marginHorizontal: width * 0.01},
  mh2p: {marginHorizontal: width * 0.02},
  mh3p: {marginHorizontal: width * 0.03},
  mh4p: {marginHorizontal: width * 0.04},
  mh5p: {marginHorizontal: width * 0.05},
  mh6p: {marginHorizontal: width * 0.06},
  mh7p: {marginHorizontal: width * 0.07},
  mh8p: {marginHorizontal: width * 0.08},
  mh9p: {marginHorizontal: width * 0.09},
  mh10p: {marginHorizontal: width * 0.1},

  mv1p: {marginVertical: height * 0.01},
  mv2p: {marginVertical: height * 0.02},
  mv3p: {marginVertical: height * 0.03},
  mv4p: {marginVertical: height * 0.04},
  mv5p: {marginVertical: height * 0.05},
  mv6p: {marginVertical: height * 0.06},
  mv7p: {marginVertical: height * 0.07},
  mv8p: {marginVertical: height * 0.08},
  mv9p: {marginVertical: height * 0.09},
  mv10p: {marginVertical: height * 0.1},

  /** PADDING (Percentage-based) **/
  p1p: {padding: height * 0.01},
  p2p: {padding: height * 0.02},
  p3p: {padding: height * 0.03},
  p4p: {padding: height * 0.04},
  p5p: {padding: height * 0.05},
  p6p: {padding: height * 0.06},
  p7p: {padding: height * 0.07},
  p8p: {padding: height * 0.08},
  p9p: {padding: height * 0.09},
  p10p: {padding: height * 0.1},

  pt1p: {paddingTop: height * 0.01},
  pt2p: {paddingTop: height * 0.02},
  pt3p: {paddingTop: height * 0.03},
  pt4p: {paddingTop: height * 0.04},
  pt5p: {paddingTop: height * 0.05},
  pt6p: {paddingTop: height * 0.06},
  pt7p: {paddingTop: height * 0.07},
  pt8p: {paddingTop: height * 0.08},
  pt9p: {paddingTop: height * 0.09},
  pt10p: {paddingTop: height * 0.1},

  pb1p: {paddingBottom: height * 0.01},
  pb2p: {paddingBottom: height * 0.02},
  pb3p: {paddingBottom: height * 0.03},
  pb4p: {paddingBottom: height * 0.04},
  pb5p: {paddingBottom: height * 0.05},
  pb6p: {paddingBottom: height * 0.06},
  pb7p: {paddingBottom: height * 0.07},
  pb8p: {paddingBottom: height * 0.08},
  pb9p: {paddingBottom: height * 0.09},
  pb10p: {paddingBottom: height * 0.1},

  pl1p: {paddingLeft: width * 0.01},
  pl2p: {paddingLeft: width * 0.02},
  pl3p: {paddingLeft: width * 0.03},
  pl4p: {paddingLeft: width * 0.04},
  pl5p: {paddingLeft: width * 0.05},
  pl6p: {paddingLeft: width * 0.06},
  pl7p: {paddingLeft: width * 0.07},
  pl8p: {paddingLeft: width * 0.08},
  pl9p: {paddingLeft: width * 0.09},
  pl10p: {paddingLeft: width * 0.1},

  pr1p: {paddingRight: width * 0.01},
  pr2p: {paddingRight: width * 0.02},
  pr3p: {paddingRight: width * 0.03},
  pr4p: {paddingRight: width * 0.04},
  pr5p: {paddingRight: width * 0.05},
  pr6p: {paddingRight: width * 0.06},
  pr7p: {paddingRight: width * 0.07},
  pr8p: {paddingRight: width * 0.08},
  pr9p: {paddingRight: width * 0.09},
  pr10p: {paddingRight: width * 0.1},

  ph1p: {paddingHorizontal: width * 0.01},
  ph2p: {paddingHorizontal: width * 0.02},
  ph3p: {paddingHorizontal: width * 0.03},
  ph4p: {paddingHorizontal: width * 0.04},
  ph5p: {paddingHorizontal: width * 0.05},
  ph6p: {paddingHorizontal: width * 0.06},
  ph7p: {paddingHorizontal: width * 0.07},
  ph8p: {paddingHorizontal: width * 0.08},
  ph9p: {paddingHorizontal: width * 0.09},
  ph10p: {paddingHorizontal: width * 0.1},

  pv1p: {paddingVertical: height * 0.01},
  pv2p: {paddingVertical: height * 0.02},
  pv3p: {paddingVertical: height * 0.03},
  pv4p: {paddingVertical: height * 0.04},
  pv5p: {paddingVertical: height * 0.05},
  pv6p: {paddingVertical: height * 0.06},
  pv7p: {paddingVertical: height * 0.07},
  pv8p: {paddingVertical: height * 0.08},
  pv9p: {paddingVertical: height * 0.09},
  pv10p: {paddingVertical: height * 0.1},

  w1p: {width: width * 0.01},
  w2p: {width: width * 0.02},
  w3p: {width: width * 0.03},
  w4p: {width: width * 0.04},
  w5p: {width: width * 0.05},
  w6p: {width: width * 0.06},
  w7p: {width: width * 0.07},
  w8p: {width: width * 0.08},
  w9p: {width: width * 0.09},
  w10p: {width: width * 0.1},
  w11p: {width: width * 0.11},
  w12p: {width: width * 0.12},
  w13p: {width: width * 0.13},
  w14p: {width: width * 0.14},
  w15p: {width: width * 0.15},
  w16p: {width: width * 0.16},
  w17p: {width: width * 0.17},
  w18p: {width: width * 0.18},
  w19p: {width: width * 0.19},
  w20p: {width: width * 0.2},
  w21p: {width: width * 0.21},
  w22p: {width: width * 0.22},
  w23p: {width: width * 0.23},
  w24p: {width: width * 0.24},
  w25p: {width: width * 0.25},
  w26p: {width: width * 0.26},
  w27p: {width: width * 0.27},
  w28p: {width: width * 0.28},
  w29p: {width: width * 0.29},
  w30p: {width: width * 0.3},
  w31p: {width: width * 0.31},
  w32p: {width: width * 0.32},
  w33p: {width: width * 0.33},
  w34p: {width: width * 0.34},
  w35p: {width: width * 0.35},
  w36p: {width: width * 0.36},
  w37p: {width: width * 0.37},
  w38p: {width: width * 0.38},
  w39p: {width: width * 0.39},
  w40p: {width: width * 0.4},
  w41p: {width: width * 0.41},
  w42p: {width: width * 0.42},
  w43p: {width: width * 0.43},
  w44p: {width: width * 0.44},
  w45p: {width: width * 0.45},
  w46p: {width: width * 0.46},
  w47p: {width: width * 0.47},
  w48p: {width: width * 0.48},
  w49p: {width: width * 0.49},
  w50p: {width: width * 0.5},
  w51p: {width: width * 0.51},
  w52p: {width: width * 0.52},
  w53p: {width: width * 0.53},
  w54p: {width: width * 0.54},
  w55p: {width: width * 0.55},
  w56p: {width: width * 0.56},
  w57p: {width: width * 0.57},
  w58p: {width: width * 0.58},
  w59p: {width: width * 0.59},
  w60p: {width: width * 0.6},
  w61p: {width: width * 0.61},
  w62p: {width: width * 0.62},
  w63p: {width: width * 0.63},
  w64p: {width: width * 0.64},
  w65p: {width: width * 0.65},
  w66p: {width: width * 0.66},
  w67p: {width: width * 0.67},
  w68p: {width: width * 0.68},
  w69p: {width: width * 0.69},
  w70p: {width: width * 0.7},
  w71p: {width: width * 0.71},
  w72p: {width: width * 0.72},
  w73p: {width: width * 0.73},
  w74p: {width: width * 0.74},
  w75p: {width: width * 0.75},
  w76p: {width: width * 0.76},
  w77p: {width: width * 0.77},
  w78p: {width: width * 0.78},
  w79p: {width: width * 0.79},
  w80p: {width: width * 0.8},
  w81p: {width: width * 0.81},
  w82p: {width: width * 0.82},
  w83p: {width: width * 0.83},
  w84p: {width: width * 0.84},
  w85p: {width: width * 0.85},
  w86p: {width: width * 0.86},
  w87p: {width: width * 0.87},
  w88p: {width: width * 0.88},
  w89p: {width: width * 0.89},
  w90p: {width: width * 0.9},
  w91p: {width: width * 0.91},
  w92p: {width: width * 0.92},
  w93p: {width: width * 0.93},
  w94p: {width: width * 0.94},
  w95p: {width: width * 0.95},
  w96p: {width: width * 0.96},
  w97p: {width: width * 0.97},
  w98p: {width: width * 0.98},
  w99p: {width: width * 0.99},
  w100p: {width: width},

  /** TEXT STYLES */
  textBold: {fontWeight: 'bold'},
  textSemiBold: {fontWeight: '600'},
  textMedium: {fontWeight: '500'},
  textRegular: {fontWeight: '400'},
  textLight: {fontWeight: '300'},
  textThin: {fontWeight: '200'},
  textExtraBold: {fontWeight: '800'},
  textExtraLight: {fontWeight: '100'},

  textCenter: {textAlign: 'center'},
  textLeft: {textAlign: 'left'},
  textRight: {textAlign: 'right'},

  text10: {fontSize: RFValue(10)},
  text12: {fontSize: RFValue(12)},
  text14: {fontSize: RFValue(14)},
  text16: {fontSize: RFValue(16)},
  text18: {fontSize: RFValue(18)},
  text20: {fontSize: RFValue(20)},
  text22: {fontSize: RFValue(22)},
  text24: {fontSize: RFValue(24)},
  text26: {fontSize: RFValue(26)},
  text28: {fontSize: RFValue(28)},
  text30: {fontSize: RFValue(30)},

  textWhite: {
    color: '#fff',
  },
  textBlack: {
    color: '#000',
  },
  textGray: {
    color: 'gray',
  },


  /** BORDERS */
  borderRadius5: {
    borderRadius: scale(5),
  },
  borderRadius10: {
    borderRadius: scale(10),
  },
  borderRadius15: {
    borderRadius: scale(15),
  },
  borderRadius20: {
    borderRadius: scale(20),
  },
  borderRadius25: {
    borderRadius: scale(25),
  },
  borderRadius30: {
    borderRadius: scale(30),
  },
  borderWidth1: {
    borderWidth: scale(1),
    borderColor: '#ccc',
  },
  borderWidth2: {
    borderWidth: scale(2),
    borderColor: '#888',
  },
  shadow1: {
    ...Platform.select({
      ios: {
        shadowColor: shadowColor,
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 1,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  shadow2: {
    ...Platform.select({
      ios: {
        shadowColor: shadowColor,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  shadow3: {
    ...Platform.select({
      ios: {
        shadowColor: shadowColor,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  shadow4: {
    ...Platform.select({
      ios: {
        shadowColor: shadowColor,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  shadow5: {
    ...Platform.select({
      ios: {
        shadowColor: shadowColor,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});