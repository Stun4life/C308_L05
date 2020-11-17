import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native';
const movie = {title: 'Doctor Sleep', year: '2019'};

const MOVIES_DATA = ['Doctor Sleep', 'Midway'];
const MOVIES_DATA2 = [
  {
    title: 'Doctor Sleep',
    year: '2019',
  },
  {
    title: 'Midway',
    year: '2019',
  },
];

const Movie_list = () => {
  return MOVIES_DATA.map((title) => <Text>{title}</Text>);
};

const Movie_list2 = () => {
  return MOVIES_DATA2.map((movie) => (
    <Text>
      {movie.title} {'\n'} {movie.year}
    </Text>
  ));
};
const MOVIES_DATA3 = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

const Movie_list3 = () => {
  return MOVIES_DATA3.map((movie2) => (
    <View>
      <Text>
        {movie2.title}
        {'\n'}
        {movie2.year}
      </Text>
      <Image source={movie2.poster} />
    </View>
  ));
};
// Or

const Movie_list3alt = () => {
  return MOVIES_DATA3.map((movie) => (
    <Movie2 title={movie.title} year={movie.year} poster={movie.poster} />
  ));
};
class Movie extends React.Component {
  render() {
    return (
      <View>
        <Text>
          {'\n'} {movie.title} {'\n'} {movie.year}
        </Text>
      </View>
    );
  }
}

class Movie2 extends React.Component {
  render() {
    return (
      <View>
        <Text>
          {'\n'} {this.props.title} {'\n'} {this.props.year}
        </Text>
        <Image source={this.props.poster} />
      </View>
    );
  }
}
export {Movie_list};
export {Movie};
export {Movie_list2};
export {Movie_list3};
export {Movie2};
export {Movie_list3alt};
