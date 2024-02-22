/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title?: string;
}>;

const Section = ({children, title}: SectionProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        marginTop: 32,
        paddingHorizontal: 24,
      }}>
      <Text
        testID="title"
        style={{
          fontSize: 24,
          fontWeight: '600',
          color: isDarkMode ? Colors.white : Colors.black,
        }}>
        {title ? title : 'Default title'}
      </Text>
      <Text
        style={{
          marginTop: 8,
          fontSize: 18,
          fontWeight: '400',
          color: isDarkMode ? Colors.light : Colors.dark,
        }}>
        {children}
      </Text>
    </View>
  );
};

export default Section;
