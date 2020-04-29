import { StyleSheet } from 'react-native';

const ContactStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contact: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    borderBottomColor: '#CABEBE',
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  contactLeft: {
    flex: .3,
    paddingLeft: 10,
    paddingTop: 10,
  },
  userImage: {
    width: 60,
    height: 60,
  },
  contactRight: {
    flex: .7,
  },
  name: {
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default ContactStyles;