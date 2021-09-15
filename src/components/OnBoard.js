import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
} from "react-native";
import * as Font from "expo-font";
import AppIntroSlider from "react-native-app-intro-slider";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../../assets/colors/colors";

const data = [
    {
        title: "Save time by tracking your studies",
        text: "Schedule your classes, assigments, quizzes and more",
        image: require("../../assets/images/1.png"),
    },
    {
        title: "Stay on top of your education",
        text: "Reduce your stress, increase your productivty",
        image: require("../../assets/images/2.png"),
    },
    {
        title: "Spend more time doing the things you love",
        text: "Get started within five minutes",
        image: require("../../assets/images/3.png"),
    },
];

async function loadAsync() {
    Font.loadAsync({
        OSBold: require("../../assets/fonts/OpenSans-Bold.ttf"),
    });
}

const OnBoard = ({ handleDone }) => {
    const key = (item) => item.title;

    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image style={styles.image} source={item.image} />
                <View style={styles.contentWrapper}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        );
    };

    const renderDoneButton = () => {
        return (
            <LinearGradient
                colors={["#A5C8FF", "#23286B"]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}} 
                style={styles.doneButtonWrapper}
            >
                <Text style={styles.doneButtonText}>Done</Text>
            </LinearGradient>
        );
    };

    const renderNextButton = () => {
        return (
            <View style={styles.rightTextWrapper}>
                <Text style={styles.rightText}>Next</Text>
            </View>
        );
    };

    const renderPrevButton = () => {
        return (
            <View style={styles.leftTextWrapper}>
                <Text style={styles.leftText}>Prev</Text>
            </View>
        );
    };

    const handleFinish = () => {
        handleDone();
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" />
            <AppIntroSlider
                keyExtractor={key}
                renderItem={renderItem}
                data={data}
                renderDoneButton={renderDoneButton}
                renderNextButton={renderNextButton}
                renderPrevButton={renderPrevButton}
                showPrevButton
                activeDotStyle={{ backgroundColor: "rgba(0,0,0,1)" }}
                dotStyle={{ backgroundColor: "rgba(0,0,0,.3)" }}
                onDone={handleFinish}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.white,
    },
    image: {
        marginVertical: 60,
    },
    contentWrapper: {},
    title: {
        fontSize: 24,
        color: colors.black,
        textAlign: "center",
        fontWeight: "bold",
        marginHorizontal: 60,
    },
    text: {
        fontSize: 14,
        color: colors.black,
        textAlign: "center",
        marginHorizontal: 60,
        marginTop: 20,
    },
    leftTextWrapper: {
        width: 40,
        height: 40,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    leftText: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.blue,
    },
    rightTextWrapper: {
        width: 40,
        height: 40,
        marginRight: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    rightText: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.blue,
    },
    doneButtonWrapper: {
        flex: 1,
        paddingLeft: 35,
        paddingRight: 50,
        borderRadius: 25,
        marginRight: -40
    },
    doneButtonText: {
        fontSize: 14,
        textAlign: "center",
        margin: 10,
        color: colors.white,
        fontWeight: "bold"
    },
});

export default OnBoard;
