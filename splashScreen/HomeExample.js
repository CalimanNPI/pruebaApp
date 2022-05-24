import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, ScrollView, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/*import Post1 from '../assets/post1.jpeg';
import Post2 from '../assets/post2.jpeg';
import Post3 from '../assets/post3.jpeg';
import Post4 from '../assets/post4.jpeg';
import Post5 from '../assets/post5.jpeg';*/

export default function Home() {

    const edges = useSafeAreaInsets();

    return (
        <View>
            <ScrollView>
                <View style={{
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: (edges.top + 65),
                    paddingBottom: 25
                }}>
                    <Text>SplashScreen Demo! 👋</Text>
                </View>
            </ScrollView>
        </View>
    );
}