import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.one}>
                <Text>1</Text>
            </View>
             <View style={styles.two}>
                <Text>2</Text>
            </View>
            <View style={styles.three}>
                <Text>3</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        width: "80%",
        height: 300,
        justifyContent: "space-around",
        alignItems: "stretch",
        flexDirection: "row"
    },
    one: {
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }, 
    two: {
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        flex: 2
    },
    three: {
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    }
});
