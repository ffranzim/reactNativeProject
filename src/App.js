/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { FlatList, Platform, StyleSheet, Dimensions, View, Text } from 'react-native';
import Post from './components/Post';

const instructions = Platform.select({
  ios: 'IOS',
  android: 'Android'
});

type Props = {};

export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    fetch('http://10.0.2.2:8001/fotos.html')
      .then(resposta => resposta.json())
      .then(json => this.setState({ photos: json }))

  }

  render() {
    return (
      <View>
        <FlatList
          style={styles.container}
          data={this.state.photos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>
            <Post photo={item} />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5
  }
});
