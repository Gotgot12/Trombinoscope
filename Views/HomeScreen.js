import * as React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import members from '../Data/members.json';

function HomeScreen({ navigation }) {
    return (
      <View style={{ paddingTop: 40, alignItems: 'center', marginBottom: 20}}>
        <Text style={{fontSize: 20, color: 'black', textDecorationLine:'underline'}}>HOME SCREEN</Text>
        <ScrollView>
            <View style={styles.userContainer}>
            {members.map(m => (
                <React.Fragment>
                    <TouchableOpacity style={styles.eachUserContainer} onPress={ () => navigation.navigate('Details', {name: m.name, image: m.image, description: m.description}) }>
                        <Image
                            style={styles.image}
                            source={{uri: m.image}}
                        />
                        <Text style={styles.text}>{m.name}</Text>  
                    </TouchableOpacity>
                </React.Fragment>
            ))}
            </View>
        </ScrollView>
      </View>
    );
  }

const styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flex: 1
    },

    eachUserContainer: {
        padding: 20,
        alignItems: 'center',
        width: 170
    },

    image: {
        height: 75,
        width: 75,
        marginBottom: 10
    },

    text: {
        fontSize: 17,
        color: 'black',
        textAlign: 'center'
    },
})
export default HomeScreen