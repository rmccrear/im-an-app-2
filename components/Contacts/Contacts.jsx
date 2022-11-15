import { useState, useEffect } from 'react';
import { Button, Text, View, FlatList } from 'react-native';
import { styles } from '../../styles';
import * as ExpoContacts from 'expo-contacts';
import i18n from '../../translations';



function Contacts(props) {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    (async () => {
      const permissions = await ExpoContacts.requestPermissionsAsync();
      console.log(permissions)
      if (permissions.status === 'granted') {
        const { data } = await ExpoContacts.getContactsAsync();
        setContacts(data);
      }
    })();
  });

  const call = (contact) => {
    console.log(contact);
  }

  return (
    <View style={ styles.contactContainer }>
      <Text>
        {i18n.t('contacts')}
      </Text>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <Button
            onPress={() => call(item)}
            title={ item.name }
          >
          </Button>
        ) }
      >

      </FlatList>
    </View>
  );
}

export default Contacts;