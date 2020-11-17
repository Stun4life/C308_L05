import React from 'react';
import {View, Text} from 'react-native';
import {
  Movie,
  Movie_list,
  Movie_list2,
  Movie_list3,
  Movie_list3alt,
} from './Movies.js';
import {ScrollView} from 'react-native';
import {Boat_list, Boat_list2} from './Boats.js';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <View>
        <Text>Lesson 05 Exercises</Text>
        <Movie />
        <Movie_list />
        <Movie_list2 />
        <Movie_list3 />
        {/*<Movie_list3alt />*/}
        {/*<Boat_list />*/}
        <Boat_list2 />
      </View>
    </ScrollView>
  );
};
export default App;
