import {
  View,
  Text,
  Image,
  Share,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { captureRef } from "react-native-view-shot";
import { APoints, MPoints, TPoints } from "../components/questionCard";
import LottieView from "lottie-react-native";
import styles from "./style";

export default function FinalScore() {
  
  let sum = APoints + MPoints + TPoints;

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
  const nextAnimationRef = useRef(null);

  // SHARE BUTTON
  const viewRef = useRef();
  const onShare = async () => {
    if (nextAnimationRef.current) {
        nextAnimationRef.current.play();}
    try {
      const uri = await captureRef(viewRef, {
        format: "png",
      });
      await Share.share({
        url: uri,
        message:
          "Mon GreenScore est de " +
          sum +
          " 🌿! Télécharge l'application et relève le défi de me surpasser ! Ensemble, œuvrons pour un avenir plus vert. 🌱 #GreenScore",
      });
    } catch (error) {
      alert(error.message);
    }


  };

  return (
    <SafeAreaView style={styles.box} ref={viewRef}>
      <Image
        style={{ height: 150, width: 150 }}
        source={require("../assets/logo.png")}
      />
      <Text style={styles.yourScore}>Mon GreenScore :</Text>
      <Text style={styles.score}>{sum}</Text>

      <View style={{ width: "90%" }}>
        <Progress
          step={MPoints}
          steps={50}
          height={25}
          icon=<Image
            source={require("../assets/home.png")}
            style={styles.house}
          />
        />
        <Progress
          step={TPoints}
          steps={50}
          height={25}
          icon=<Image
            source={require("../assets/bike.png")}
            style={styles.house}
          />
        />
        <Progress
          step={APoints}
          steps={50}
          height={25}
          icon=<Image
            source={require("../assets/burger.png")}
            style={styles.house}
          />
        />
      </View>
      <View style={styles.shareButton}>
        <TouchableOpacity onPress={onShare}>
          <LottieView
            source={require("../assets/share.json")}
            autoPlay={true}
            loop={true}
            style={{ width: 100, height: 100, marginBottom: 40 }}
            speed={1.5}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};