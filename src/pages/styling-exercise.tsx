import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColouredBox from '../components/coloured-box';

/*
This is an example of a page containing UI elements and a reusable component
*/
const StylingExercise = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Here are some boxes of different colours
      </Text>
      <View>
        <ColouredBox colour="#2aa198" description="Cyan #2aa198" />
        <ColouredBox colour="#268bd2" description="Blue #268bd2" />
        <ColouredBox colour="#d33682" description="Magenta #d33682" />
        <ColouredBox colour="#cb4b16" description="Orange #cb4b16" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

export default StylingExercise;
