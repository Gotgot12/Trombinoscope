
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../Views/HomeScreen';
import DetailsScreen from '../Views/DetailsScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

class BottomNavigation extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Home">
                    <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />),
                    }}/>
                    <Tab.Screen name="Details" component={DetailsScreen} options={{tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size} />),
                    }}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

export default BottomNavigation