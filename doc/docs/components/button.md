---
sidebar_position: 5
---

# Button

The **Button** component is a customizable button that can display either a label or an icon, or both. It is built using the [Pressable](https://reactnative.dev/docs/pressable) component from react-native and allows for various states like focused and disabled.

### Import

```js
import { Button } from "@tra-tech/react-native-kitra";    
``` 

### Usage

```js
import { Button, Icon } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';

const App = () => (
  <View style={{ flexDirection: 'column', alignItems: 'center' }}>
    <Button 
      size="medium" 
      iconPosition="left" 
      label="Press Me!" 
      style={{ alignSelf: 'center', marginBottom: 10 }} 
      onPress={()=>console.log('pressed')}>
        <Icon type="material-community" size={20} name="penguin" />
    </Button>
  </View>
);

export default App;


``` 
### Props


| Prop | Type | Required | Description |
|------|------|----------|-------------|
| size | <code>'small' \| 'medium' \| 'large'</code> | No | The size of the button. Default value: ``'medium'``. |
| disabled | ``boolean`` | No | Determines whether the button is disabled. Default value: ``false``. |
| left                | ``(event: boolean) =>  React.ReactElement ``      | No       | Renders the given React element to the left side.                                            |
| right               | ``(event: boolean) => React.ReactElement``        | No       | Renders the given React element to the right side.                                           |
| label | ``string`` | No | The label to display on the button. |
| style | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props) | No | Additional styles to apply to the button. |
| labelStyle | [``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props) | No | Additional styles to apply to the label. |
| theme | ``UITheme`` | No | The theme to use for the component. |
| typography | ``UITypography`` | No | The typography to use for the component. |
| ...PressableProps | [``Pressable``](https://reactnative.dev/docs/pressable#props) | No | Any additional props to be passed to the underlying `Pressable` component. |


