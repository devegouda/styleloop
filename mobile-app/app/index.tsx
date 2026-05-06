import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const value = await AsyncStorage.getItem("isLoggedIn");

    if (value === "true") {
      setLoggedIn(true);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  if (loggedIn) {
    return <Redirect href="/home" />;
  }

  return <Redirect href="/login" />;
}