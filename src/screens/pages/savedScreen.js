import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

import EventCard from '../../objects/dumb/eventCard';

export default function SavedScreen(props) {

  let renderFooter = () => {
    return <View style={styles.footer}></View>
  }

  let data = props.data;
  let likes = props.likes;
  let amount = likes.length;
  return(
    <View style={styles.inputContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => {
          let itemLiked = false;
          for(let i = 0; i < likes.length;i++){
            if(item.event.id === likes[i].event_id){
              itemLiked = true;
            }
          }
          if(itemLiked)
          {
            if(item.event.location == props.find || item.event.titel == props.find || props.find == '' ){
              amount--;
              return(
                <EventCard
                  key={(item, index) => {
                    return item.id;
                  }}
                  title={item.event.titel}
                  eventId={item.event.id}
                  location={item.event.location}
                  {...props}
                  liked={itemLiked}
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
