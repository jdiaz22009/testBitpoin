import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAllDog } from "../../../hooks/useAllDog";
import styles from "./styles";
import { useLoader } from "../../../hooks/useLoader";
import { useNavigator } from "../../../hooks/useNavigation";

const HomeScreens = () => {
  const { goToPage } = useNavigator();
  const { dog, loading } = useAllDog();
  const [visibleItems, setVisibleItems] = useState<number>(18);
  const { showLoader, hideLoader } = useLoader();

  useEffect(() => {
    if (dog && Object.keys(dog).length > 0) {
      hideLoader();
    } else {
      showLoader();
    }
  }, [loading]);

  const loadMoreItems = () => {
    setVisibleItems(visibleItems + 10);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          goToPage("Gallery", { img: item });
        }}
      >
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#ccc",
            padding: 10,
            width: 300,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {dog && Object.keys(dog).length > 0 && (
        <>
          <FlatList
            data={Object.keys(dog).slice(0, visibleItems)}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          {visibleItems < Object.keys(dog).length && (
            <Button title="Ver más" onPress={loadMoreItems} />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreens;
