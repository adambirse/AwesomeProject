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


const HomePage = ({navigation}: any) => {
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
          <Section title="My First Section">
            Its Alive!! Next steps to do something clever and complicated, or
            basic and easy
          </Section>
          <Button
            title="Navigate to second"
            onPress={() => navigation.navigate('Second')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
