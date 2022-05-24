import React, { useState, useEffect } from "react";
import { Box, FlatList, Center, NativeBaseProvider } from "native-base";
import { Text, View } from "react-native";
import NotificationsExampleData from "./NotificationsExampleData";

export default function GetDataFetchNotify() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const resp = await fetch("http://192.168.1.243:3000/");
      const data = await resp.json();
      console.log(data);
      setData(data);
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>Hello</Text>

      {data.map((item) => (
        <Text>{item.clave}</Text>
        
      ))}
    </View>
  );
}
