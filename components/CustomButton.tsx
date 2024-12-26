import { View, Text, Pressable } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

interface CustomButtonProps {
  text: string;
}

const CustomButton = ({ text }: CustomButtonProps) => {
  return (
    <Pressable
      style={{
        backgroundColor: Colors.PRIMARY,
        height: 50,
        width: "80%",
        marginVertical: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 55,
      }}
    >
      <Text style={{ fontFamily: "outfit-m", color: "white", fontSize: 15 }}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;