import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { Ionicons } from "@expo/vector-icons";

const RestaurantCard = ({
  id,
  image,
  name,
  rating,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          image,
          name,
          rating,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
    >
      <Image
        source={{
          uri: urlFor(image).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{name}</Text>
        <View className="flex-row items-center space-x-1">
          <Ionicons name="star" size={20} color="#fcc203" />
          <Text className="text-xs text-gray-500">
            <Text className="text-yellow-500">{rating}</Text> * offers
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <Ionicons name="location-outline" size={22} color="gray" />
          <Text className="text-xs text-gray-500">Nearby * {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
