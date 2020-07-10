import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView
} from 'react-native';

import EventCard from '../../objects/dumb/eventCard';

export default function EventsScreen(props) {

  let renderFooter = () => {
    return <View style={styles.footer}></View>
  }

  let data = props.data;
  let likes = props.likes;
  console.log("START RENDER{EventsScreen}");
  for(let j = 0; j < data.length; j++){
    data[j].event.liked = false;

    let tags = data[j].event.titel + " " + data[j].event.titel.toLowerCase() + " " + data[j].event.titel.toUpperCase();
    tags = tags.split(" ");
    data[j].event.tags = tags;

    for(let i = 0; i < likes.length; i++){
      if(data[j].event.id == likes[i].event_id){
        data[j].event.liked = true;
      }
    }
  }
  console.log(data);

  return(
    <View style={{height: '100%'}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => {
          console.log(props.favFilter);
          if(item.event.location == props.find || item.event.tags.includes(props.find) || props.find == '' ){
            if(props.favFilter){

              try {
                if(item.event.liked){
                  return(
                    <EventCard
                      key={(item, index) => {
                          return item.id;
                      }}
                      title={item.event.titel}
                      eventId={item.event.id}
                      location={item.event.location}
                      {...props}
                      liked={item.event.liked}
                      toggleLikeEvent={() => props.onToggleLikeEvent(props.userEmail, item.event.id)}
                    />
                  );
                }else if(likes.amount <= 0){
                  return(
                    <View><Text>You have no favorites yet!</Text></View>
                  )
                }
              } catch (e){
                console.log(e);
              }
            }else{
              return(
                <EventCard
                  key={(item, index) => {
                      return item.id;
                  }}
                  title={item.event.titel}
                  eventId={item.event.id}
                  location={item.event.location}
                  {...props}
                  liked={item.event.liked}
                  toggleLikeEvent={() => props.onToggleLikeEvent(props.userEmail, item.event.id)}
                />
              )
            }
          }
        }}
        ListFooterComponent={renderFooter()}
        keyExtractor={(item, index) => String(index)}
        refreshing={props.refreshing}
        onRefresh={props.onRefresh}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  footer: {
    width: '100%',
    height: 0,
    marginTop: '5%'
  }
});
