import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Articles from "../modules/Articles";

const ArticleShow = (props) => {
  const { id } = props.route.params.article;
  const { currentArticle } = useSelector((state) => state);

  useEffect(() => {
    Articles.show(id);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: currentArticle.image }} style={styles.image} />
      <Text style={styles.title}>{currentArticle.title}</Text>
      <Text style={[styles.body]}>{currentArticle.body}</Text>
    </View>
  );
};

export default ArticleShow;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: Dimensions.get("window").width,
    padding: 7,
    paddingLeft: 10,
    paddingRight: 8,
    bottom: 8,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  title: {
    padding: 30,
    color: "gray",
    fontSize: 36,
  },
  subtitle: {
    color: "gray",
    fontSize: 16,
  },
  image: {
    height: 250,
    width: Dimensions.get("window").width,
  },
  body: {
    padding: 30,
    color: "gray",
    fontSize: 18,
  },
});