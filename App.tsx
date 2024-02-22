import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import {useColorScheme} from 'react-native';
import Section from './components/Section';
import TextAndLabel from './components/TextAndLabel';
import FlatListBasics from './components/FlatList';
import SectionListBasics from './components/SectionList';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
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
          <Section>content with a default title</Section>
          <Section title="text and label">
            <TextAndLabel />
          </Section>
          <Section title="Flat list">
            <FlatListBasics />
          </Section>
          <Section title="Section list">
            <SectionListBasics />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
