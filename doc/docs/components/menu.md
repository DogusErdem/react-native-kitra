---
sidebar_position: 11
---

# Menu

The **Menu** display a list of options. Their placement depends on the container location. They can be opened up or down.

### Import

```js
import { Menu } from '@tra-tech/react-native-kitra';
```
### Usage

```js
import { Menu, Icon } from '@tra-tech/react-native-kitra';
import { View } from 'react-native';

const MenuData = [  
{ label: 'Add',left: <Icon type="ant-design" name="addfolder" size={17} color="#D7D1E9" />,right: <Icon type="ant-design" name="addfile" size={17} color="#D7D1E9" />,onPress(){console.log('pressed')}},
{ label: 'Delete', left: <Icon type="ant-design" name="delete" size={17} color="#D7D1E9" /> },
{ label: 'Update', left: <Icon type="ant-design" name="upcircleo" size={17} color="#D7D1E9" /> },
{ label: 'Skip', right: <Icon type="ant-design" name="fastforward" size={12} color="#D7D1E9" /> }];

const App = () => (
  <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
    <Menu
      menuStyle={{ backgroundColor: '#8973CD' }}
      button={() => <Icon name="plus" type="ant-design" size={30} color="#8973CD" />}
      labelStyle={{ color: '#D7D1E9' }}
      dividerColor="#EDEAF8"
      items={MenuData}
    />
  </View>
);

export default App;
```

### Props

| Prop name      | Type                                                                                                | Required | Description                                       |
|----------------|-----------------------------------------------------------------------------------------------------|----------|---------------------------------------------------|
| items          | ``Array<{label:string,``<br/>`` left?: React.ReactNode, right?:React.ReactNode, onPress ?: ()=>void}>`` | Yes       | Items to be listed in the menu.                   |
| containerStyle | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)                           | No       | Additional styles to apply to the menu container. |
| rowTextStyle   | [``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)                           | No       | Additional styles to apply to each the row text.     |
| rowStyle     | [``StyleProp<TextStyle>``](https://reactnative.dev/docs/text-style-props)                           | No       | Additional styles to apply to each row container.     |
| menuStyle      | [``StyleProp<ViewStyle>``](https://reactnative.dev/docs/view-style-props)                           | No       | Additional styles to apply to the menu.           |
| button     | [``(event: boolean)=> React.ReactNode``](https://reactnative.dev/docs/react-node)               | No       | This button opens the menu. It also returns whether the menu is open or closed.|
| closeOnPress     | ``boolean                                ``                                                    | No       | Specifies whether it should close when an option is selected.       |
| theme          | ``UITheme                                     ``                                                    | No       | The theme to use for the component.            |
| typography     | ``UITypography                                ``                                                    | No       | The typography to use for the component.       |
