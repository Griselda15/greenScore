import {View, StyleSheet} from 'react-native';
import QuestionCard from './components/question/questionCard.jsx';
import Profile from './components/profile/profile.jsx';
import styles from './components/question/style.js';


export default function App() {
  return(
    <View style={Styles.bigContainer}>
      <Profile/>
      <QuestionCard/>
      
    </View>
  );
};


const Styles = StyleSheet.create({
  bigContainer:{
    flex:1,
    backgroundColor:'#ecf39e'
  }

})