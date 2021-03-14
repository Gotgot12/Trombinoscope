import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';


function DetailsScreen({ route, navigation }) {
  const { name, image, description } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 20, color: 'black', textDecorationLine:'underline', marginBottom: 25}}>PROFILE</Text>
      <Image style={styles.image} source={{ uri: image }}/>
      <Text style={styles.text}>{name}</Text>
      <Text style={[styles.text, {width: 300, textAlign: 'center', fontSize: 14, marginBottom: 20}]}>{description}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create ({
    image: {
        height: 75,
        width: 75,
        marginBottom: 10,
    },

    text: {
        fontSize: 19,
        color: 'black',
        marginBottom: 10,
    },
})
export default DetailsScreen