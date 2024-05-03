---
sidebar_position: 17
---

# Slider

The **Slider** component is a customizable slider component that allows users to select a value within a given range by sliding a button along a horizontal bar.
### Import

```js
import { Slider } from '@tra-tech/react-native-kitra';
```

### Usage
```js
import { Slider } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';

const App = () => (
  <View>
    <Slider onChangeEnd={e => console.log(e)} showPercentage value={20} />
  </View>
);

export default App;
```
### Props

| Prop Name      | Type                    | Required | Description                                                                                                                               |
|----------------|-------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| showPercentage | boolean                 | No       | Determines whether to show the percentage indicator above the slider button.                                                              |
| onChangeEnd    | (value: number) => void | Yes       | A callback function that is called when the user releases the slider button. The selected value is passed as an argument to the function. |
| defaultValue   | number                  | No       | The initial value of the slider.                  |
| containerStyle | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)         | No       | Additional styles to apply to the slider container.                               |
| buttonStyle    | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)        | No       | Additional styles to apply to the slider button.                                                                                          |
| barStyle       | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)         | No       | Additional styles to apply to the slider bar.                                                                                             |
| progressStyle  | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)         | No       | Additional styles to apply to the progress bar.                                                                                           |
| theme          | ``UITheme``                  | No       | The theme to use for the component.                                                                                   |
