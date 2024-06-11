import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#FFFFFF", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/klarferdigstopplogo-removebg.png")}
          style={styles.Logo}
        />
      }
    >
      <ThemedView style={styles.stepContainer}>
        {/*  <ThemedText type="subtitle">Step 1: Try it</ThemedText> */}
        <ThemedText>
          Er du klar til å gjøre en innsats for et{" "}
          <ThemedText style={{ fontFamily: "OpenSansBold" }}>
            bedre liv
          </ThemedText>
          ?
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        {/*  <ThemedText type="subtitle">Step 2: Explore</ThemedText> */}
        <ThemedText>
          Vi kan ikke hjelpe deg med å holde deg borte fra avhengigheten din.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        {/* <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText> */}
        <ThemedText>
          Men vi kan hjelpe deg med å holde styr på{" "}
          <ThemedText style={{ fontFamily: "OpenSansBold" }}>
            hvor langt du har kommet
          </ThemedText>
          .
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.infoContainer}>
        <ThemedText type="subtitle" style={styles.infoContainerHeader}>
          Sånn funker det
        </ThemedText>
        <ThemedText style={styles.infoContainerText}>
          Trykk på +-en og velg eller skriv inn din avhengighet.
        </ThemedText>
        <ThemedText style={styles.infoContainerText}>
          Sjekk i appen eller legg til appens widget på hjemskjermen din for å
          se hvor langt du har kommet.
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText type="subtitle" style={styles.infoContainerText}>
          Oversikt:
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    fontFamily: "OpenSansSemiBold",
    paddingHorizontal: 32,
    gap: 8,
    marginBottom: 8,
  },
  infoContainer: {
    marginTop: 16,
    backgroundColor: "#094D69",
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  infoContainerHeader: {
    color: "#FFFFFF",
    marginBottom: 8,
    fontFamily: "OpenSansExtraBold",
  },

  infoContainerText: {
    color: "#FFFFFF",
    marginBottom: 8,
    fontFamily: "OpenSansSemiBold",
  },
  Logo: {
    height: 110,
    width: 110,
    bottom: 0,
    left: 20,
    position: "absolute",
  },
});
