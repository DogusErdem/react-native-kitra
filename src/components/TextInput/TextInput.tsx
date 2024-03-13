// @ts-nocheck
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { TextInput as RNTextInput, View, TextInputProps as RNTextInputProps, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { opacity } from '../../utilities';
import type { FCCWD, TextInputProps } from '../../types';
import { applyDefaults } from '../../core/KitraProvider';

const AnimatedTextInput = Animated.createAnimatedComponent(RNTextInput);
const TextInput: FCCWD<TextInputProps & RNTextInputProps> = (
  { theme,
    typography,
    inputStyle,
    editable = true,
    size = 'medium',
    helperText = '',
    variant = 'filled',
    labelContainerStyle,
    containerStyle,
    count = false,
    onChangeText,
    label,
    inputContainerStyle,
    labelStyle,
    helperTextStyle,
    error = false,
    errorMessage,
    left,
    right,
    labelColor = { focus: theme?.primary, default: theme?.primary },
    onFocus,
    onEndEditing,
    ...props },
) => {
  const inputRef = useRef<RNTextInput>(null);
  const [counts, setCounts] = useState(0);
  const [labelLayout, setLabelLayout] = useState({ width: 0, height: 0 });
  const textInputOffset = useSharedValue(props.defaultValue || props.placeholder || props.value ? 0 : 1);

  const fontStyles =
  {
    large: typography?.body.regular,
    medium: typography?.body.sregular,
    small: typography?.body.xsregular,
  };

  const sizeStyles =
  {
    large: {
      paddingHorizontal: 18,
      height: 51,
      paddingVertical: 15,
      lineHeight: 20,
    },
    medium: {
      paddingHorizontal: 12,
      height: 42,
      paddingVertical: 12,
      lineHeight: 17,
    },
    small: {
      paddingHorizontal: 10,
      height: 36,
      paddingVertical: 10,
      lineHeight: 15,
    },
  };

  const labelStyles =
  {
    large: {
      focused: typography?.body.regular,
      default: typography?.body.sregular,
    },
    medium: {
      focused: typography?.body.sregular,
      default: typography?.body.xsregular,
    },
    small: {
      focused: typography?.body.xsregular,
      default: typography?.body.xxsregular,
    },
  };

  // label'Ä±n konum ve fontsize animasyonu
  const labelPositionAnimation = useAnimatedStyle(() => {
    const topInterpolate = interpolate(
      textInputOffset.value,
      [0, 1],
      [-1, sizeStyles[size].paddingHorizontal],
    );

    return {
      top: topInterpolate,
    };
  });

  const borderAnimation = useAnimatedStyle(() => {
    const topInterpolate = interpolateColor(
      textInputOffset.value,
      [0, 1],
      [error ? theme?.error || '#FF3434' : theme?.primary || '#000000', error ? theme?.error || '#FF3434' : theme?.grey || '#FFFFFF'],
    );

    return {
      borderColor: topInterpolate,
    };
  });

  const labelFontAnimation = useAnimatedStyle(() => {
    const fontSize = interpolate(
      textInputOffset.value,
      [0, 1],
      [labelStyles[size].default.fontSize, labelStyles[size].focused.fontSize],
    );
    const lineHeight = interpolate(
      textInputOffset.value,
      [0, 1],
      [labelStyles[size].default.lineHeight, labelStyles[size].focused.lineHeight],
    );
    const color = interpolateColor(
      textInputOffset.value,
      [0, 1],
      [error ? theme?.error || '#FF3434' : labelColor.focus || '#000000', error ? theme?.error || '#FF3434' : labelColor.default || '#FFFFFF'],
    );
    const topInterpolate = interpolate(
      textInputOffset.value,
      [0, 1],
      [variant === 'filled' ? 2 : -labelStyles[size].focused.lineHeight + labelStyles[size].focused.lineHeight / 2, sizeStyles[size].paddingHorizontal],
    );
    return {
      fontSize,
      lineHeight,
      color,
      top: topInterpolate,
    };
  });

  useEffect(() => {
    if (props.value) {
      setCounts(props.value?.length ? props.value?.length : 0);
      textInputOffset.value = props.value?.length || props.defaultValue?.length ? withTiming(0) : withTiming(1);
    } else if (!props.defaultValue?.length) {
      textInputOffset.value = withTiming(1);
    }
  }, [props.value]);

  useEffect(() => {
    setCounts(props.defaultValue ? props.defaultValue.length : 0);
  }, []);

  const onFocusInput = () => {
    textInputOffset.value = withTiming(0);
  };

  const onEndEditingInput = () => {
    textInputOffset.value = (counts === 0) ? withTiming(1) : withTiming(0);
  };

  const inputBackground = () => {
    if (Array.isArray(inputContainerStyle)) {
      for (let i = 0; i < inputContainerStyle.length; i + 1) {
        const style = inputContainerStyle[i];
        if (style && Object.hasOwn(style, 'backgroundColor')) {
          // @ts-ignore
          return style.backgroundColor;
        }
      }
    } else if (inputContainerStyle && Object.hasOwn(inputContainerStyle, 'backgroundColor')) {
      // @ts-ignore
      return inputContainerStyle.backgroundColor;
    }
    return theme?.white;
  };
  return (
    <View style={[{ flexGrow: 1, maxHeight: sizeStyles[size].height }, containerStyle]}>
      <Animated.View style={[{
        opacity: editable ? 1 : 0.5,
        borderRadius: 5,
        borderWidth: 1,
        height: sizeStyles[size].height,
        backgroundColor: inputBackground?.(),
      },
      // @ts-ignore
      borderAnimation, inputContainerStyle]}
      >
        <View style={{ flex: 1, flexDirection: 'row', height: sizeStyles[size].height }}>
          <View style={{ alignSelf: 'center', marginLeft: sizeStyles[size].paddingVertical, marginRight: 5 }}>
            {left && left}
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {variant === 'outlined' && <Animated.View style={[{ position: 'absolute', backgroundColor: inputBackground?.(), width: labelLayout.width + 8, height: 1.1, zIndex: 100 }, labelPositionAnimation]} />}
            <AnimatedTextInput
              ref={inputRef}
              editable={editable}
              style={[{
                marginTop: variant === 'filled' ? fontStyles[size].lineHeight / 2 : 0,
                fontSize: fontStyles[size].fontSize,
                fontFamily: labelStyles[size].default.fontFamily,
                lineHeight: sizeStyles[size].lineHeight,
                flexDirection: 'row',
                flexGrow: 1,
              }, inputStyle, { backgroundColor: 'transparent' }]}
              onChangeText={event => { setCounts(event?.length || 0); onChangeText && onChangeText(event); }}
              onFocus={x => { onFocusInput(); onFocus?.(x); }}
              onEndEditing={x => { onEndEditingInput(); onEndEditing?.(x); }}
              {...props}
            />

            {label ? (
              <View style={[
                { position: 'absolute',
                  zIndex: 101,
                  paddingHorizontal: 4 },
                labelContainerStyle,
              ]}
              >
                <TouchableOpacity onPress={() => inputRef.current?.focus()} activeOpacity={0.9} onLayout={event => setLabelLayout({ width: event.nativeEvent.layout.width, height: event.nativeEvent.layout.height })}>
                  <Animated.Text style={[{ color: theme?.primary, fontFamily: labelStyles[size].default.fontFamily }, labelStyle, labelFontAnimation]}>

                    {label}
                  </Animated.Text>
                </TouchableOpacity>
              </View>

            ) : null
            }
          </View>
          <View style={{ alignSelf: 'center', marginRight: sizeStyles[size].paddingVertical, marginLeft: 5 }}>
            {right && right}
          </View>
        </View>
      </Animated.View>

      <View style={[styles.helperContainer, { flexDirection: 'row', display: (error || !!helperText || count) ? 'flex' : 'none', alignSelf: 'stretch' }]}>
        {/* @ts-ignore */}
        <Text style={[labelStyles[size].default, helperTextStyle, { color: error ? theme?.error : helperTextStyle?.color || theme?.grey }]}>{error ? `${errorMessage || ''}` : `${helperText}`}</Text>
        {/* @ts-ignore */}
        {count ? <Text style={[labelStyles[size].default, helperTextStyle, { color: error ? theme?.error : helperTextStyle?.color || theme?.grey }]}>{`${counts}/${props.maxLength}`}</Text> : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
  },
  helperContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },

});
export default applyDefaults(TextInput);
