import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Benefit of using typescript: Can use this interface to force programmer to pass props that ore only of this type
interface ColouredBoxProps {
  colour: string;
  description: string;
}

/*
This is an example of a reusable component
*/
const ColouredBox = ({colour, description}: ColouredBoxProps) => {
  // Destructuring props example^
  return (
    <View style={[{backgroundColor: `${colour}`}, styles.container]}>
      <Text style={[styles.whiteText]}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  whiteText: {
    color: 'white',
  },
  container: {
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
});

export default ColouredBox;
