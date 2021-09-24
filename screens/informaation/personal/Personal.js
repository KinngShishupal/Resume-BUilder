// personal Information
import React from 'react';
import {Button, StyleSheet, Text, View, ScrollView, ImageBackground} from 'react-native';
import {Formik, ErrorMessage} from 'formik';
import {TextInput} from 'react-native-paper';
import * as Yup from 'yup';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';
import {addpersonalInfo} from '../../../store/actions';
import {Alert} from 'react-native';
import AppHeader from '../../../components/Header';
import {useNavigation} from '@react-navigation/core';

const ExploreScreen = () => {
  const navigation = useNavigation();

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const initialValues = {
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    email: '',
    address: '',
    phone: '',
    fatherName: '',
    religion: '',
    maritalStatus: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email Format').required('Required'),
    phone: Yup.string().required('Required').min(10).max(10),
    fatherName: Yup.string().required('Required'),
    religion: Yup.string().required('Required'),
  });

  return (
    <ImageBackground
    source={require('../../images/water.jpg')}
    resizeMode="cover"
    style={styles.image}>
    <ScrollView keyboardShouldPersistTaps={'always'}>
      <AppHeader
        backgroundColor="green"
        heading="Personal Details"
        backgroundColor="#808000"
        headingColor="#fff"
      />
      <View style={styles.wrapper}>
        <Text style={styles.header}></Text>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={values => dispatch(addpersonalInfo(values, navigation))}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <View style={styles.block}>
                <TextInput
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                  style={styles.input}
                  placeholder="First Name"
                />
                <Text style={styles.error}>
                  {touched.firstName && errors.firstName}
                </Text>

                <TextInput
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  style={styles.input}
                  placeholder="Last Name"
                />
                <Text style={styles.error}>
                  {touched.lastName && errors.lastName}
                </Text>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  style={styles.input}
                  placeholder="Email"
                />
                <Text style={styles.error}>
                  {touched.email && errors.email}
                </Text>

                <TextInput
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  style={styles.input}
                  placeholder="Phone"
                  keyboardType="number-pad"
                />
                <Text style={styles.error}>
                  {touched.phone && errors.phone}
                </Text>
                <TextInput
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
                  style={styles.input}
                  multiline
                  placeholder="Address Name"
                />
                <Text style={styles.error}>
                  {touched.address && errors.address}
                </Text>
                <View style={styles.input}>
                  <Picker
                    selectedValue={values.gender}
                    enabled={true}
                    mode="dropdown"
                    placeholder="Select Gender"
                    onValueChange={handleChange('gender')}>
                    <Picker.Item label="Select Gender" value="Unknown" />
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Male" value="Male" />
                  </Picker>
                </View>

                <TextInput
                  onChangeText={handleChange('religion')}
                  onBlur={handleBlur('religion')}
                  value={values.religion}
                  style={styles.input}
                  placeholder="Religion"
                  autoFocus={true}
                />
                <Text style={styles.error}>
                  {touched.phone && errors.religion}
                </Text>

                <TextInput
                  onChangeText={handleChange('fatherName')}
                  onBlur={handleBlur('fatherName')}
                  value={values.fatherName}
                  style={styles.input}
                  placeholder="Father Name"
                  autoFocus={true}
                />
                <Text style={styles.error}>
                  {touched.phone && errors.fatherName}
                </Text>

                <View style={styles.input}>
                  <Picker
                    selectedValue={values.maritalStatus}
                    enabled={true}
                    mode="dropdown"
                    placeholder="Marital Status"
                    onValueChange={handleChange('maritalStatus')}>
                    <Picker.Item label="Marital Status" value="Unknown" />
                    <Picker.Item label="Married" value="Married" />
                    <Picker.Item label="UnMarried" value="Un-Married" />
                  </Picker>
                </View>
              </View>
              <View style={styles.btn}>
                <Button onPress={handleSubmit} title="Save" />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
  },

  header: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 3,
    textAlign: 'center',
    color: '#808000',
  },
  input: {
    borderColor: '#ff4d6a',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 3,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },

  error: {
    color: '#b30000',
    fontSize: 10,
    fontWeight: 'bold',
  },
  block: {
    backgroundColor: '#808000',
    padding: 22,
    marginVertical: 10,
    position: 'relative',
  },
  btn: {
    marginVertical: 10,
    width: 200,
    alignSelf: 'center',
    borderRadius: 20,
  },
  image: {
    // flex: 1,
  },
});
