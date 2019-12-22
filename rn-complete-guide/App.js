import React, {useState } from 'react';
import { StyleSheet, Text, View 
    ,TextInput, Button, ScrollView, FlatList
} from 'react-native';

export default function App() {
    const [enteredGoal, setEnterGoal ]= useState('');
    const [courseGoals, setCourseGoals ] = useState([]);

    const  goalInputHandler = (enteredText) => {
        setEnterGoal(enteredText);
    }
    
    const addGoalHandler = () => {
        setCourseGoals( currentGoals => 
            [...currentGoals, 
                {
                    key: Math.random().toString(),
                    value: enteredGoal
                }
            ]
        );
    }


    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.inputText}
                    placeholder="Course Goal" 
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button 
                    onPress={addGoalHandler}
                    title="ADD" />
            </View>
            <FlatList 
                data= {courseGoals}
                renderItem={ itemData => (
                    <View
                        style={styles.goals}>
                        <Text>{itemData.item.value}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    inputContainer: {
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center"
    }, inputText: {
        borderColor: "red",
        borderWidth: 1,
        width: "80%",
        padding:10
    }, goals: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: 'black',
        borderWidth: 1
    }
});
