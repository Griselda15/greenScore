// style.js
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbde76",
  },
  display: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100, // ajustez selon la taille de votre icône de profil
  },
  quote: {
    margin: 20,
    fontSize: 35,
    fontFamily: "Portico Regular",
    color: "#2C3922",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    top: 20,
    flexDirection: "row",
  },
  Button: {
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Portico Regular",
    color: "#31572c",
    textAlign: "center",
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  leftView: {
    position: 'absolute',
    top: 80,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  modalView: {
    margin: 32,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 650,
    width: 350,
    marginTop: 80,
  },
  button: {
    borderRadius: 10,
    padding: 10,
  },
  buttonOpen: {},
  buttonClose: {},
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 0,
    textAlign: "center",
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 50,
  },
  house: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginRight: 5,
    marginLeft: 5,
  },
  profileDescContain: {
    flexDirection: "row",
  },
  profileTitle: {
    fontSize: 25,
    marginTop: 15,
    padding: 10,
    textAlign: "left",
    fontFamily: "Poppins",
    color: "#107a06",
  },
  points: {
    position: 'absolute',
    marginRight: 12,
    marginTop: 13,
    paddingRight: 10,
    paddingLeft: 10,
    borderWidth: 4, // Épaisseur de la bordure
    borderColor: "#2C3922", // Couleur de la bordure
    borderRadius: 10, 

    fontSize: 30,
    top: 80,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',

  }
});

export default styles;
