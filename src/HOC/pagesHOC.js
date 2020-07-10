import React from 'react';

import AdminAddEventScreen from '../screens/admin/admin-addEvent';
import EventsScreen from '../screens/pages/eventsScreen';
import TicketsScreen from '../screens/pages/ticketsScreen';
import SavedScreen from '../screens/pages/savedScreen';
import ProfileScreen from '../screens/pages/profileScreen';
import DataLoading from '../screens/pages/loadingData';

export default function PagesHOC(props){
  let page = props.page;
  if(page == 'admin'){
    return(
      <AdminAddEventScreen
        {...props}
      />
    )
  }else if(page == 'events' || page == 'likes'){
    return(
      <EventsScreen
        {...props}
      />
    )
  }else if(page == 'tickets'){
    return(
      <TicketsScreen
        {...props}
      />
    )
  }else if(page ==  props.firstName){
    return(
      <ProfileScreen
        {...props}
      />
    )
  }
  else if(page == 'loadingData') {
    return(
      <DataLoading/>
    )
  }else{
    return null;
  }
}
