// resume format

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import {Checkbox} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import AppHeader from '../components/Header';

const ResumeScreen = () => {
  const resumeData = useSelector(state => state);
  const navigation = useNavigation();

  const personalInfo = resumeData.infoReducer.personalInfo;
  const professionalInfo =
    resumeData.infoReducer.professionalInfo.particulars || [];
  const educationalInfo =
    resumeData.infoReducer.educationalInfo.particulars || [];
  const photo = resumeData.infoReducer.photoUrl || '';

  const checkList = [
    {
      value: 'Personal Info',
      name: 'Personal',
      completed: Object.keys(personalInfo).length > 0 ? true : false,
    },
    {
      value: 'Professional Info',
      name: 'Professional Information',
      completed: professionalInfo.length > 0 ? true : false,
    },
    {
      value: 'Educational Info',
      name: 'Education',
      completed: educationalInfo.length > 0 ? true : false,
    },
    {value: 'Photo', name: 'Image', completed: photo.length > 0 ? true : false},
  ];

  const standard = [
    'High School',
    'InterMediate',
    'Graduation',
    'Post Graduation',
    'Doctorate',
  ];

  if (
    !(
      Object.keys(personalInfo).length > 0 &&
      professionalInfo.length > 0 &&
      educationalInfo.length > 0 &&
      photo.length > 0
    )
  ) {
    return (
      <ImageBackground
    source={require('./images/main.jpg')}
    resizeMode="cover"
    style={styles.image}>
      <View>
        <AppHeader
          backgroundColor="#b300b3"
          heading="Resume Builder"
          headingColor="#fff"
          display="none"
        />
        <View style={styles.cardPlace}>
          <Card elevation={6} type="elevated" style={styles.checkWrapper}>
            <Card.Content>
              <Title>Complete Below Section To Generate Resume</Title>
              <Paragraph style={styles.status}>Status</Paragraph>
              {checkList.map((item, index) => (
                <View key={index} style={styles.checkContainer}>
                  <Text>{item.value}</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(item.name)}>
                    <View style={styles.checkArea}>
                      <Checkbox
                        status={item.completed ? 'checked' : 'unchecked'}
                      />
                      <MaterialCommunityIcons
                        name="square-edit-outline"
                        color="blue"
                        size={20}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </Card.Content>
          </Card>

          <Card elevation={6} type="elevated" style={styles.checkWrapper}>
            <Card.Content>
              {/* <Title>Lets Go</Title> */}
              <Button
                icon="thumb-up"
                mode="contained"
                onPress={() => navigation.navigate('Personal')}>
                Start Your Journey
              </Button>
            </Card.Content>
          </Card>
        </View>
      </View>
      </ImageBackground>
    );
  }

  return (
    <ScrollView>
      <View style={styles.overlay}></View>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          {/* Personal Info */}

          <View style={styles.contactInfo}>
            <Text style={styles.name}>
              {personalInfo.firstName} {personalInfo.lastName}
            </Text>
            <View style={styles.emailAddress}>
              <Avatar.Icon size={24} icon="email" style={styles.icon} />
              <Text style={styles.email}>{personalInfo.email}</Text>
            </View>

            <View style={styles.phoneNo}>
              <Avatar.Icon
                size={24}
                icon="cellphone-basic"
                style={styles.icon}
              />

              <Text style={styles.phone}>+91 - {personalInfo.phone}</Text>
            </View>
          </View>

          <View style={styles.image}>
            {/* <Avatar.Image size={100} source={require('./images/profile.png')} /> */}
            <Avatar.Image size={100} source={{uri: photo}} />
          </View>
        </View>

        <View style={styles.careerObjective}>
          <Text style={styles.careerHeading}>CAREER OBJECTIVE</Text>
          <Text>
          Looking for a challenging role in a reputable organization to utilize my technical, database, and management skills for the growth of the organization as well as to enhance my knowledge about new and emerging trends in the IT sector.
          </Text>
        </View>

        {/* Educational Info */}

        <View style={styles.educationalInfo}>
          <Text style={styles.educationalHeader}>EDUCATIONAL ATTAINMENT</Text>
          {educationalInfo.map((item, index) => {
            return (
              <View style={styles.degree} key={index}>
                <Text style={styles.instituteName}>{standard[index]}</Text>
                <Text style={styles.instituteName}>{item.instituteName}</Text>
                <Text style={styles.instituteField}>{item.subjects}</Text>
                <Text style={styles.instituteDuration}>{item.passingYear}</Text>
              </View>
            );
          })}
        </View>

        {/* professional info */}

        <View style={styles.educationalInfo}>
          <Text style={styles.educationalHeader}>WORK EXPERIENCE</Text>
          {professionalInfo.map((item, index) => {
            return (
              <View style={styles.degree} key={index}>
                <Text style={styles.instituteName}>{item.companyName}</Text>
                <Text style={styles.designation}>{item.designation}</Text>
                <Text style={styles.instituteDuration}>{item.timePeriod}</Text>
                <Text style={styles.instituteField}>{item.role}</Text>
              </View>
            );
          })}
        </View>

        {/* personal info */}

        <View style={styles.educationalInfo}>
          <Text style={styles.educationalHeader}>PERSONAL INFORMATION</Text>
          <View style={styles.degree}>
            <View style={styles.personalField}>
              <Text style={styles.personalkey}> Name :</Text>
              <Text style={styles.personalValue}>
                {personalInfo.firstName} {personalInfo.lastName}
              </Text>
            </View>

            <View style={styles.personalField}>
              <Text style={styles.personalkey}>Father's Name :</Text>
              <Text style={styles.personalValue}>
                {personalInfo.fatherName}
              </Text>
            </View>

            <View style={styles.personalField}>
              <Text style={styles.personalkey}>Sex :</Text>
              <Text style={styles.personalValue}>{personalInfo.gender}</Text>
            </View>

            <View style={styles.personalField}>
              <Text style={styles.personalkey}>Religion :</Text>
              <Text style={styles.personalValue}> {personalInfo.religion}</Text>
            </View>

            <View style={styles.personalField}>
              <Text style={styles.personalkey}>Marital Status :</Text>
              <Text style={styles.personalValue}>
                {' '}
                {personalInfo.maritalStatus}
              </Text>
            </View>

            <View style={styles.personalField}>
              <Text style={styles.personalkey}>Address :</Text>
              <Text style={styles.personalValue}>{personalInfo.address}</Text>
            </View>
          </View>
        </View>

        {/* Declaration */}

        <View style={styles.educationalInfo}>
          <Text style={styles.educationalHeader}>DECLARATION</Text>
          <View style={styles.degree}>
            <Text style={styles.declaration}>
              I hereby declare that the details and information given above are
              complete and true to the best of my knowledge
            </Text>
            <Text>Name : </Text>
            <Text>Place : </Text>
            <Text>Date : </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResumeScreen;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name: {
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 3,
  },
  contactInfo: {},
  emailAddress: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 3,
  },
  email: {
    paddingLeft: 5,
  },

  phoneNo: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 3,
  },
  phone: {
    paddingLeft: 5,
  },
  careerObjective: {
    borderTopColor: '#000',
    borderBottomColor: '#000',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: 5,
    paddingVertical: 5,
  },
  careerHeading: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  educationalInfo: {
    paddingVertical: 5,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  educationalHeader: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  degree: {
    paddingVertical: 3,
  },
  instituteName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  designation: {
    fontSize: 18,
  },
  instituteField: {
    fontSize: 16,
  },
  instituteDuration: {
    fontSize: 14,
  },

  personalField: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 5,
  },
  personalkey: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  personalValue: {
    fontSize: 15,
    marginLeft: 3,
    textTransform: 'capitalize',
  },
  checkContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 2,
    marginBottom: 3,
    justifyContent: 'space-between',
  },
  checkArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '800',
  },
  icon: {
    backgroundColor: '#3678B5',
  },
  checkWrapper: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  cardPlace: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  image:{
    flex:1
  }
});
