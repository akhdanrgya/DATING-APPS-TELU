import { useRouter } from "expo-router";
import { View } from "react-native";
import Splash from "@/components/splashScreen";
import React, { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);

  useEffect(() => {
    if (!isLoading){
        router.replace("/mainApp")
    }
  }, [])

  return <View>{isLoading ? <Splash /> : null}</View>;
};

export default App;
