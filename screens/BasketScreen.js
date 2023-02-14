import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaraurantSlice";
import {
  removeFromBasket,
  selectedBasketTotal,
  selectedBasketItems,
} from "../slices/basketSlice";
import { Ionicons } from "@expo/vector-icons";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectedBasketItems);
  const basketTotal = useSelector(selectedBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupdItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupdItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#E33342] bg-white shadow-sm">
          <Text className="text-lg font-bold text-center">Basket</Text>
          <Text className="text-gray-400 text-center">{restaurant?.name}</Text>
        </View>
        <TouchableOpacity
          onPress={navigation.goBack}
          className="rounded-full bg-gray-100 absolute top-3 right-5"
        >
          <Ionicons name="close-circle" size={30} color="#E33342" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <Text className="flex-1">Delivery in 30 - 35 mins</Text>
        <TouchableOpacity className="">
          <Text className="text-[#E33342]">Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="divide-y divide-gray-200">
        {Object.entries(groupedItemsInBasket).map(([key, items]) => (
          <View
            key={key}
            className="flex-row items-center space-x-3 bg-white py-2 px-5"
          >
            <Text className="text-[#E33342]">{items.length} x</Text>
            <Image
              source={{
                uri: urlFor(items[0]?.image).url(),
              }}
              className="h-12 w-12 rounded-full"
            />
            <Text className="flex-1">{items[0]?.name}</Text>
            <Text className="text-gray-600">
              <Currency quantity={items[0]?.price} currency="INR" />
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BasketScreen;
