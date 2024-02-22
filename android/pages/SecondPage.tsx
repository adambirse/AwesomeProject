import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  View,
  useColorScheme,
} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import Section from '../../components/Section';

const SecondPage = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="My First Section">I am on the second page</Section>
          <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecondPage;
