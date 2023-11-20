import { View, Text, ImageBackground, Image } from "react-native";
import { Card, Title, Paragraph, Chip, FAB, Avatar } from "react-native-paper";

const Datanotfound = () => {
  return (
    <View style={{ margin: 20 }}>
      <Card>
        <Card.Cover
          source={{
            uri: "https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg",
          }}
        />
        <Card.Content style={{ backgroundColor: "#0A1C31" }}>
          <Title
            style={{
              color: "#fff",
              textAlign: "center",
              padding: 10,
              borderRadius: 10,
              fontSize: 22,
              fontWeight: "800",
            }}
          >
            {" No Record Found "}
          </Title>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Datanotfound;
