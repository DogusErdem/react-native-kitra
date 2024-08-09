require('react-native-reanimated').setUpTests();

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('expo-linear-gradient', () => 'LinearGradient');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
