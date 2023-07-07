import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, FlatList, Image, Dimensions } from "react-native";
import { getDogsImg } from "../../../services/api/images";

const ImageGallery = () => {
  const route = useRoute();
  const [imgDog, setImgDog] = useState<any[]>([]);

  useEffect(() => {
    console.log(route);
    const getImgDog = async () => {
      try {
        if (route.params?.img) {
          const rs = await getDogsImg(route.params?.img, "1000");
          setImgDog(rs?.message);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getImgDog();
  }, [route.params?.img]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={imgDog}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
      />
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const imageSize = windowWidth / 3 - 4;

const styles = {
  container: {
    flex: 1,
    padding: 2,
  },
  imageContainer: {
    flex: 1,
    margin: 2,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
};

export default ImageGallery;
