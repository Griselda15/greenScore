import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

import questionsData from '../../questions.json';
import styles from './style.js';

export default function QuestionCard() {
    
    const [count, setCount] = useState(0);
    const [Message, setMessage] = useState('');
    const [isVisible, setIsVisible] = useState(true);

    const handleYesClick = () => {
        const message = questionsData.questions[count].responses.yes.message;
        setMessage(message);
        setIsVisible(false);
    }

    const handleNoClick = () => {
        const message = questionsData.questions[count].responses.no.message;
        setMessage(message);
        setIsVisible(false);
    }

    const handleNextClick = () => {
        let newCount = count + 1;
        if (newCount >= questionsData.questions.length) {
        newCount = 0; 
        }
        setCount(newCount);
        setMessage('');
        setIsVisible(true);

    };

    const displayText = Message || questionsData.questions[count].text;

    const [fontLoaded, setFontLoaded] = useState(false);   // <-- Add this state variable

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Poppins': require('../../assets/fonts/Poppins-Medium.ttf'),
            });

            setFontLoaded(true);  // <-- Set the state to true when the font loads
        };

        loadFonts();
    }, []);

    // rest of your code...
    
    // Before return check if fontLoaded is false then return null
    if (!fontLoaded) {
        return null;
    }

    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress= {handleNextClick} style = {styles.Button}>
                <Text style={styles.quote}>{displayText}</Text>
            </TouchableOpacity>

            {isVisible && (
                <View style = {{flexDirection: 'row'}}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress= {handleYesClick} style = {styles.Button}>
                        <Text style={styles.buttonText}>Oui</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress= {handleNoClick} style = {styles.Button}>
                        <Text style={styles.buttonText}>Non</Text>
                    </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            )}

            <StatusBar style="auto" />
        </View>
    );
};
