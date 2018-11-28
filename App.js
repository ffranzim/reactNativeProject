/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList, Platform, StyleSheet, Image, Dimensions, ScrollView, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'IOS',
  android: 'Android'
});

type Props = {};

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class App extends Component<Props> {
  render() {
    const fotos = [
      { id: 1, usuario: 'rafael' },
      { id: 2, usuario: 'pedro' },
      { id: 3, usuario: 'alberto' }];

    return (
      <FlatList
        style={{ marginTop: 20 }}
        data={fotos}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <View>
            <Text>{item.usuario}</Text>
            <Image source={require('./resources/img/alura.jpg')}
              style={{ width: width, height: width }} />
          </View>
        }
      />
    );
  }
}
