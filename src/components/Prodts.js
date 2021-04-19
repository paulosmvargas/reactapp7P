import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

export default class Prodts extends Component {

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.card}>
                    <Image style={styles.img} source={{uri:this.props.data.img}}></Image>
                    <TouchableOpacity>
                        <Text style={styles.txt}>{this.props.data.desc}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.cat}>{this.props.data.categ}</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    txt: {
        fontSize: 16,
        marginLeft: 8
    },
    card: {
        backgroundColor: '#4fdfff',
        marginBottom: 10,
        marginLeft: '2%',
        borderRadius: '5px',
        width: '96%',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height: 3
        }
    },
    img: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 12,
        resizeMode: 'cover',
        height: '200px',
        width: '200px'
    },
    cat: {
        borderRadius: '10px',
        borderWidth: 3,
        backgroundColor: '#ff6a00',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        padding: 2
    }
});