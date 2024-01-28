// MainStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Splash'; // Assurez-vous que le chemin est correct
import QuestionCard from './questionCard';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="QuestionCard" component={QuestionCard} />
      {/* Ajoutez d'autres écrans si nécessaire */}
    </Stack.Navigator>
  );
};
