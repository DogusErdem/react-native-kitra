import type { ComponentType, ForwardedRef } from 'react';
import React, { createRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { StyleProp, View, ViewStyle } from 'react-native';
import { ThemeProvider } from './theme/theme';
import { TypographyContext, TypographyProvider } from './typography/typography';

import { NotificationContextType, NotificationProvider, showNotificationProps } from './notification/notification';

const Feather = require('react-native-vector-icons/Feather').default;
const Ionicons = require('react-native-vector-icons/Ionicons').default;
const AntDesign = require('react-native-vector-icons/AntDesign').default;

export const showNotificationRef = createRef<NotificationContextType>();
export const showNotification = (item:showNotificationProps) => {
  showNotificationRef.current?.showNotification({ type: item.type, header: item.header, message: item.message });
};
Animated.addWhitelistedNativeProps({ text: true });
const messageTypes = (theme:any) => ({
  SUCCESS: {
    backgroundColor: theme.colors.status.successLight,
    icon: <Feather name="check" size={25} color={theme.colors.status.success} />,
  },
  INFO: {
    backgroundColor: theme.colors.system.primary15,
    icon: <Ionicons name="information-circle-outline" size={25} color={theme.colors.system.primary} />,
  },
  DANGER: {
    backgroundColor: theme.colors.status.errorLight,
    icon: <AntDesign name="warning" size={25} color={theme.colors.status.error} />,
  },
  WARNING: {
    backgroundColor: theme.colors.status.warningLight,
    icon: <AntDesign name="warning" size={25} color={theme.colors.status.warning} />,
  },
});

type KitraProviderType= {
  children?:any,
  limit?:number,
  messageType?:(theme?:any, colorScheme?:'dark' | 'light') => {[key:string]: {
      backgroundColor:string,
    icon?:React.ReactNode
    onPress?:()=>void
  }},
  notificationContainerStyle?:StyleProp<ViewStyle>,
  customView?:({ header, type, message, theme }:
    {header:string, type:string, message:string, theme:any})=>React.ReactNode}

export const KitraProvider =
({ children, messageType = messageTypes, notificationContainerStyle, limit, customView }: KitraProviderType) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider>
      <TypographyProvider>
        <NotificationProvider
          messageType={theme => (messageType ? messageType(theme) : theme)}
          notificationContainerStyle={notificationContainerStyle}
          limit={limit}
          customView={item => customView?.(item)}
          ref={showNotificationRef}
        >
          {children}
        </NotificationProvider>
      </TypographyProvider>
    </ThemeProvider>
  </GestureHandlerRootView>
);

export function applyDefaults<T>(Component: ComponentType<T>) {
  return React.forwardRef((props: T, ref: ForwardedRef<any>) => (
    <TypographyContext.Consumer>
      {typography =>
        <Component ref={ref} typography={typography?.typography} {...props} />
          }
    </TypographyContext.Consumer>
  ));
}
