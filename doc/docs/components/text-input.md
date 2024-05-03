---
sidebar_position: 21
---

# Text Input

The **Text Input**, a text input with label, count, helper text, left and right icons, and animations for the label and input box.
### Import

```js
import { TextInput } from '@tra-tech/react-native-kitra';
```

### Usage

```js
import { TextInput, Icon } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';

const App = () => (
  <View style={{ justifyContent: 'center', flex: 1 }}>
    <TextInput
      label="E-mail"
      size="large"
      left={<Icon type="ant-design" name="check" size={20} />}
      right={<Icon type="ant-design" name="apple1" size={20} />}
      count
      defaultValue="Default Value"
      maxLength={20}
      helperText="Normal"
      errorMessage="ERROR"
    />
  </View>
);

export default App;
```

### Props

| Prop name             | Type                                            | Required | Description                                                                                |
|-----------------------|-------------------------------------------------|----------|--------------------------------------------------------------------------------------------|
| size                  | <code>'small' \| 'medium' \| 'large'</code>                    | No      | The size of the text input. Default Value: ``'medium'  ``                 |
| bottomLabel                 |``string``                                  | No      |Text to be displayed under the text input.|
| bottomLabelStyle          |[``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)| No       | Additional styles to apply to the bottom label.                         |
| variant          |<code>'filled' \| 'outlined'</code>| No       | Variant of the TextInput. Default value: ``'filled'`` ,                    |
| containerStyle          |[``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)| No       | Additional styles to apply to the container.                     |
| inputContainerStyle          |[``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)| No       | Additional styles to apply to the input container.                   |
| labelContainerStyle          |[``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)| No       | Additional styles to apply to the label container.                       |
| count                  | ``boolean``                | No      | Shows the number of text input characters. Default value: ``false``.               |
| label                 |``string``| No                                                 | The text to use for the floating label.              |
| labelStyle          |[``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)| No       | Additional styles to apply to the label text.                         |
| editable            |``boolean``                   | No       | If false, text is not editable. Default value: ``true``. |
| inputStyle   |[``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)| No       | Additional styles to apply to the text input.                  |
| error           |``boolean `` | No       | Checks error status.                   |
| left           |[``(event:boolean)=> React.ReactNode``](https://reactnative.dev/docs/react-node)  | No       | Used to add a react node to the left of the text input.                    |
| right           |[``(event:boolean)=> React.ReactNode``](https://reactnative.dev/docs/react-node)  | No       | Used to add a react node to the right of the text input.                      |
| ...TextInputProps           |[``TextInputProps``](https://reactnative.dev/docs/textinput#props) | No       | Any additional props to be passed TextInput component.                      |
| theme                 |``UITheme                                     `` | No       | The UI theme to use for the component.                                                     |
| typography            |``UITypography                                `` | No       | The UI typography to use for the component.                                                |

