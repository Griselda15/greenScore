import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
  Alert,
  Modal,
  Pressable,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import LottieView from "lottie-react-native";
import styles from "./style.js";

import questionsData from "../questions.json";
import FinalScore from "./end.jsx";
let totalAPoints = 0;
let totalMPoints = 0;
let totalTPoints = 0;

for (let i = 0; i < questionsData.questions.length; i++) {
  if (i < 5) {
    totalMPoints += questionsData.questions[i].responses.yes.points;
  }
  if (i >= 5 && i < 10) {
    totalTPoints += questionsData.questions[i].responses.yes.points;
  }
  if (i >= 10) {
    totalAPoints += questionsData.questions[i].responses.yes.points;
  }
}
const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [fontLoaded, setFontLoaded] = useState(false); // <-- Add this state variable
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
      });

      setFontLoaded(true); // <-- Set the state to true when the font loads
    };

    loadFonts();
  }, []);
  if (!fontLoaded) {
    return null;
  }
  return (
    <View style={styles.leftView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Image source={require("../assets/close.png")} />
            </TouchableOpacity>

            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "black",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl0s-d443a3b4-fa4e-47a6-99b4-d2a769785614.png/v1/fill/w_1280,h_1280/grass_type_symbol_galar_by_jormxdos_dffvl0s-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmwwcy1kNDQzYTNiNC1mYTRlLTQ3YTYtOTliNC1kMmE3Njk3ODU2MTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6-S1a0_YYhlP6eXW5QqrJk4jtv6b5a3MRuugxqhJ6EA",
                }}
                style={styles.avatar}
              />
              <Text style={styles.profileTitle}>Will's Profile</Text>
            </View>
            <View style={styles.profileDescContain}>
              <Text style={styles.profileTitle}>
                GreenScore : {MPoints + TPoints + APoints}
              </Text>
            </View>
            <View style={{ width: "90%" }}>
              <Progress
                step={MPoints}
                steps={totalMPoints}
                height={25}
                icon=<Image
                  source={require("../assets/home.png")}
                  style={styles.house}
                />
              />
              <Progress
                step={TPoints}
                steps={totalTPoints}
                height={25}
                icon=<Image
                  source={require("../assets/bike.png")}
                  style={styles.house}
                />
              />
              <Progress
                step={APoints}
                steps={totalAPoints}
                height={25}
                icon=<Image
                  source={require("../assets/burger.png")}
                  style={styles.house}
                />
              />
            </View>
          </View>
        </View>
      </Modal>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Image
          source={require("../assets/avatar.png")}
          style={{ height: 60, width: 60 }}
        />
      </Pressable>
    </View>
  );
};
const Progress = ({ step, steps, height, icon }) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const reactive = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);
  let stepcount = step.toString() + " / " + steps.toString();

  return (
    <>
      <View style={{ flexDirection: "row", marginTop: 4 }}>
        {icon}
        <Text
          style={{
            fontFamily: "Menlo",
            fontSize: 12,
            fontWeight: "900",
            marginBottom: 4,
            marginTop: 10,
          }}
        >
          {stepcount}
        </Text>
      </View>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height,
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: height,
          overflow: "hidden",
        }}
      >
        <Animated.View
          style={{
            height,
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: height,
            position: "absolute",
            left: 0,
            top: 0,
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
        />
      </View>
    </>
  );
};

global.bigCount = 0;
let APoints = 0;
let MPoints = 0;
let TPoints = 0;

export default function QuestionCard() {
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
      });
    };

    loadFont();
  }, []);

  const [count, setCount] = useState(0);
  const [displayText, setDisplayText] = useState(
    questionsData.questions[0].text
  );
  const [isYesClicked, setIsYesClicked] = useState(false);
  const [isNoClicked, setIsNoClicked] = useState(false);
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

  const animatedValue = new Animated.Value(0);
  const nextAnimationRef = useRef(null);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  }, [displayText]);

  const handleAnswer = (answer) => {
    const message = questionsData.questions[count].responses[answer].message;
    setDisplayText(message);
    setIsYesClicked(answer === "yes");
    setIsNoClicked(answer === "no");
    setIsNextButtonEnabled(true);
    if (answer == "yes") {
      if (global.bigCount < 5) {
        MPoints += questionsData.questions[count].responses.yes.points;
      }
      if (global.bigCount >= 5 && global.bigCount < 10) {
        TPoints += questionsData.questions[count].responses.yes.points;
      }
      if (global.bigCount >= 10) {
        APoints += questionsData.questions[count].responses.yes.points;
      }
    }
  };

  const handleNextClick = () => {
    if (nextAnimationRef.current) {
      nextAnimationRef.current.play();
      global.bigCount += 1;
    }
  };

  const onLottieAnimationFinish = () => {
    let newCount = (count + 1) % questionsData.questions.length;
    setCount(newCount);
    setDisplayText(questionsData.questions[newCount].text);
    setIsYesClicked(false);
    setIsNoClicked(false);
    setIsNextButtonEnabled(false);
  };

  const animatedStyle = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
    ],
  };
  if (global.bigCount > 15) {
    return (
      <View style={styles.container}>
      <Profile />
      <FinalScore />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Profile />
      <View style={styles.profileDescContain}>
              <Text style={styles.points}>
               {MPoints + TPoints + APoints}
              </Text>
            </View>
      
      {/* Section pour le texte */}
      <View style={styles.display}>
        <Animated.Text style={[styles.quote, animatedStyle]}>
          {displayText}
        </Animated.Text>
      </View>

      {/* Section pour les boutons */}
      <View style={{ flex: 1.5, justifyContent: "flex-start" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            top: 20,
          }}
        >
          {!isYesClicked && !isNoClicked && (
            <>
              <TouchableOpacity
                onPress={() => handleAnswer("yes")}
                style={styles.Button}
              >
                <Text style={styles.buttonText}>Oui</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleAnswer("no")}
                style={styles.Button}
              >
                <Text style={styles.buttonText}>Non</Text>
              </TouchableOpacity>
            </>
          )}

          {isYesClicked && (
            <LottieView
              source={require("../assets/yes.json")}
              autoPlay
              loop={false}
              style={{ width: 100, height: 100 }}
            />
          )}

          {isNoClicked && (
            <LottieView
              source={require("../assets/no.json")}
              autoPlay
              loop={false}
              style={{ width: 100, height: 100 }}
            />
          )}
        </View>
        {isNextButtonEnabled && (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity onPress={handleNextClick} style={styles.Button}>
              <LottieView
                ref={nextAnimationRef}
                source={require("../assets/next.json")}
                autoPlay={false}
                loop={false}
                onAnimationFinish={onLottieAnimationFinish}
                style={{ width: 100, height: 100 }}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <StatusBar style="auto" />
      <View style={{ width: "100%", marginBottom: 65 , paddingLeft: 20, paddingRight: 20}}>
        <Progress step={global.bigCount} steps={15} height={25} icon="" />
      </View>
    </View>
  );
}
export { APoints, MPoints, TPoints };

