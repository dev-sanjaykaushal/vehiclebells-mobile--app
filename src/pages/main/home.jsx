import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
} from "react-native";
import { Card, Title, Paragraph, Switch, List } from "react-native-paper";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
const CardItem = ({ title, content, style }) => (
  <Card style={style}>
    <Card.Content>
      <Title style={{ color: "#fff", marginBottom: 20 }}>{title}</Title>
      <Paragraph style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>
        {content}
      </Paragraph>
    </Card.Content>
  </Card>
);

const StatisticsScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const data = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        data: [20, 45, 28],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Trips List"], // optional
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.column}>
          <CardItem
            style={{ backgroundColor: "#ba8616", margin: 16 }}
            title="Mark Attendace"
            content={
              <Switch
                style={{
                  transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
                }}
                value={isSwitchOn}
                onValueChange={setIsSwitchOn}
              />
            }
          />
          <View style={{ margin: 15 }}>
            <Text style={{color:"#000", fontSize: 20, fontWeight: "900" }}>
              Today Fuel Prices
            </Text>
            <StackedBarChart
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              data={{
                labels: ["Petrol", "Desiel", "CNG", "LPG"],
                legend: ["Low", "Medium", "High"],
                data: [
                  [60, 60, 60],
                  [30, 30, 60],
                ],
                barColors: ["green", "orange", "red"],
              }}
              width={Dimensions.get("window").width - 30}
              height={220}
              chartConfig={{
                backgroundColor: "#143975",
                backgroundGradientFrom: "#940c7d",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
            />

            <Text style={{color:"#000", fontSize: 20, fontWeight: "900" }}>
              Distance Total KM
            </Text>
            <BarChart
              //style={graphStyle}
              data={{
                labels: ["3 Month", "Month", "Today"],
                datasets: [
                  {
                    data: [209, 89, 15],
                  },
                ],
              }}
              width={Dimensions.get("window").width - 30}
              height={250}
              yAxisLabel="KM"
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              chartConfig={{
                backgroundColor: "#143975",
                backgroundGradientFrom: "#e6356a",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
              verticalLabelRotation={30}
            />
            <Text style={{color:"#000", fontSize: 20, fontWeight: "900" }}>
              Last Three Month Expenses
            </Text>
            <LineChart
              data={{
                labels: ["January", "February", "March"],
                datasets: [
                  {
                    data: [14, 29, 25],
                  },
                ],
              }}
              width={Dimensions.get("window").width - 30} // from react-native
              height={220}
              yAxisLabel="$"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#143975",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
            <Text style={{color:"#000", fontSize: 20, fontWeight: "900" }}>
              Last Three Month Trips
            </Text>
            <LineChart
              data={data}
              width={Dimensions.get("window").width - 30}
              height={220}
              chartConfig={{
                backgroundColor: "#143975",
                backgroundGradientFrom: "#0c9419",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  column: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
  },
  card: {
    margin: 16,
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
  mainView: {
    marginBottom: 50,
  },
});

export default StatisticsScreen;
