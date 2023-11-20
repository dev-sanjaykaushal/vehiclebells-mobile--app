import * as React from 'react';
import { View, FlatList, StyleSheet,Text } from 'react-native';
import { List, Divider,withTheme,Card,Switch,Title, Paragraph } from 'react-native-paper';

const AttendanceListingPage = () => {
    // Sample attendance data
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const attendanceData = [
      {
        id: '1',
        date: '2023-11-03',
        status: 'Present',
      },
      {
        id: '2',
        date: '2023-11-02',
        status: 'Present',
      },
      {
        id: '3',
        date: '2023-11-03',
        status: 'Present',
      },
      {
        id: '4',
        date: '2023-11-02',
        status: 'Present',
      },
      {
        id: '5',
        date: '2023-11-02',
        status: 'Present',
      },
      {
        id: '6',
        date: '2023-11-03',
        status: 'Present',
      },
      {
        id: '7',
        date: '2023-11-02',
        status: 'Present',
      },
      // Add more attendance data here
    ];
  
    // Render each attendance item in the list
    const renderAttendanceItem = ({ item }) => (
      <List.Item
        style={styles.list}
        title={`Date: ${item.date}`}
        titleStyle={styles.titleStyle}
        descriptionStyle={styles.descriptionStyle}
        description={`Status: ${item.status}`}
        right={(props) => (<Text style={styles.chipText}><List.Icon color='#fff' style={styles.attendanceSign} icon="check" /></Text>)}
    
      />
    );

    const CardItem = ({ title, content,style }) => (
        <Card style={style}>
          <Card.Content>
            <Title style={{color:"#fff",marginBottom:20}}>{title}</Title>
            <Paragraph style={{color:"#fff",fontSize:16,fontWeight:"700"}}>{content}</Paragraph>
          </Card.Content>
        </Card>
    );
  
    return (
      <View style={styles.container}>
        <CardItem
          style={styles.cardItem}
          title="Mark Attendace"
          content={(<Switch style={{
            transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], 
          }} value={isSwitchOn} onValueChange={setIsSwitchOn} />)}
        />
        <FlatList
          data={attendanceData}
          keyExtractor={(item) => item.id}
          renderItem={renderAttendanceItem}
          ItemSeparatorComponent={() => <Divider />}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "900",
    },
    list: {
        backgroundColor: "#fff",
        marginBottom: 5,
        height: 80,
        paddingVertical: 10,
        paddingHorizontal: 15,
      },
    descriptionStyle:{
        fontWeight:"700",
        fontSize:14
      },
      attendanceSign:{
        backgroundColor:"#06c40f",
        color:"#fff",
        padding:10,
        borderRadius:50
      },
      chipText: {
        color: "#fff",
        fontSize: 16,
      },
      cardItem:{
        backgroundColor:"#71d5f0",margin: 16
      }
  });
  
  export default withTheme(AttendanceListingPage);
  