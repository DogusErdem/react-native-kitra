import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import useComponentTheme from '../../core/hooks/useComponentTheme';
import type { ChipProps, FCCWD } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const Chip:FCCWD<ChipProps> = (
  { typography,
    label,
    value,
    labelStyle,
    style,
    icon,
    iconPosition = 'right',
    size = 'small',
    onChange,
    disabled = false,
    theme },
) => {
  const [select, setSelect] = useState(value || false);
  const componentStatus = disabled ? 'disabled' : (select ? 'active' : 'default');
  const { statusTheme } = useComponentTheme(theme, 'chip', componentStatus);

  const offset = useSharedValue(0);

  const typographySize = {
    small: typography?.body.xsmedium,
    medium: typography?.body.smedium,
    large: typography?.body.medium,
  };

  const animated = useAnimatedStyle(() => {
    const colorAnimated = interpolateColor(
      offset.value,
      [0, 1],
      [statusTheme.background, statusTheme.background],
    );
    return {
      backgroundColor: colorAnimated,
    };
  });

  useEffect(() => {
    offset.value = withTiming(Number(!!select));
    if (onChange) onChange(select);
  }, [select]);

  useEffect(() => {
    setSelect(!!value);
  }, [value]);
  return (
    <AnimatedTouchableOpacity
      disabled={disabled}
      testID="chip"
      onPress={() => { setSelect(prev => !prev); }}
      activeOpacity={1}
      style={[animated, { justifyContent: 'center',
        alignItems: 'center',
        height: sizes[size].height,
        borderWidth: 1,
        borderRadius: 30,
        opacity: disabled ? 0.7 : 1,
        width: icon ? sizes[size].iconwithWidth : sizes[size].width }, style, { borderColor: statusTheme.border }]}
    >
      <View style={{ flexDirection: iconPosition === 'right' ? 'row' : 'row-reverse', alignItems: 'center' }}>
        <Animated.Text style={[{ fontSize: typographySize[size]?.fontSize, lineHeight: typographySize[size]?.lineHeight, fontWeight: '500' }, labelStyle, { color: statusTheme.label }]}>{label}</Animated.Text>
        {icon && React.cloneElement(icon, {
          size: sizes[size].iconSize,
          color: statusTheme.icon,
          style: [(iconPosition === 'right' ? { marginLeft: 6 } : { marginRight: 6 })],
        })}
      </View>
    </AnimatedTouchableOpacity>
  );
};

export default applyDefaults(Chip);

const sizes = {
  small: {
    width: 57,
    height: 24,
    iconSize: 12,
    iconwithWidth: 71.54,
  },
  medium: {
    width: 65,
    height: 30,
    iconSize: 15,
    iconwithWidth: 82.39,
  },
  large: {
    width: 73,
    height: 33,
    iconSize: 17,
    iconwithWidth: 93.24,

  },
};