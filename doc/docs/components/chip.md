---
sidebar_position: 7
---

# Chip
The **Chips** can be used to display entities in small blocks.

### Import

```js
import { Chip } from '@tra-tech/react-native-kitra';
```

### Usage

```js
import { Chip } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';

const App = () => (
 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Chip
        icon={{ iconName: 'penguin', iconPosition: 'left', iconType: 'material-community' }}
        label="Small"
        size='large'
        onChange={e => console.log(e)}
        colorStyle={{ backgroundColor: 'tomato', selectBackgroundColor: 'white', selectTitleColor: 'tomato', titleColor: 'white' }}
      />
  </View>
);

export default App;
```

### Props

| Prop name    | Type                                                                                                           | Required | Description                                                                 |
|--------------|----------------------------------------------------------------------------------------------------------------|----------|-----------------------------------------------------------------------------|
| label        | ``string``                                                                           | No       | The label to display on the chip.        |
| value        | ``boolean``                                                                                                     | No       | Status of chip.                  Default value: ``'false'``                                             |
| labelStyle        | [``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)                                      | No       | Additional styles to apply to the chip.                                     |
| style        | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)                                      | No       | Additional styles to apply to the label.                                     |
| left                | ``(event: boolean) =>  React.ReactElement ``      | No       | Renders the given React element to the left side.                                            |
| right               | ``(event: boolean) => React.ReactElement``        | No       | Renders the given React element to the right side.                                           |
| size         | <code> 'small' \| 'medium' \| 'large'</code>                                                                               | No       | The size of the chip. Default value: ``'small'``                              |
| onChange     | ``(event:boolean)=> void``                                                        | Yes      | Callback function to be called when the value of a chip component changes|
| disabled      | ``boolean ``                                                                                                   | No       | If true the user won't be able to toggle the chip. Default value: ``false`` |
| theme        | ``UITheme ``                                                                                                   | No       | The theme to use for the component.                                      |
| typography   | ``UITypography``                                                                                               | No       | The typography to use for the component.                                 |
