import React, { Component } from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Image source={{ uri: this.props.photo.urlPerfil }}
                        style={styles.photoPerfil} />
                    <Text>{this.props.photo.loginUsuario}</Text>
                </View>
                <Image source={{ uri: this.props.photo.urlFoto }}
                    style={styles.photoPost} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    photoPerfil: {
        width: 40,
        height: 40,
        margin: 5,
        borderRadius: 20
    },
    photoPost: {
        width: width,
        height: width
    }
});
