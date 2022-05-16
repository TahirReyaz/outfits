import { ScrollView, View } from "react-native";
import React from "react";

import Category from "./Category";

const categories = [
  {
    id: "newin",
    title: "New In",
    color: "#FFE8E9",
  },
  {
    id: "summer",
    title: "Summer",
    color: "#F1E0FF",
  },
  {
    id: "activeWear",
    title: "Active Wear",
    color: "#BFEAF5",
  },
  {
    id: "outlet",
    title: "Outlet",
    color: "#BFEAF5",
  },
  {
    id: "accessories",
    title: "Accessories",
    color: "#FFE8E9",
  },
];

const Categories = () => {
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {categories.map((category) => (
          <Category key={category.id} {...{ category }} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
