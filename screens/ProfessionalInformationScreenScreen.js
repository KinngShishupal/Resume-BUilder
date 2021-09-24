// professional Info

import React from 'react';
import {
  Button,
  TextInput,
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground
} from 'react-native';
import {Formik, FieldArray, ErrorMessage} from 'formik';
import {useDispatch} from 'react-redux';
import {addProfessionalInformation} from '../store/actions';
import AppHeader from '../components/Header';
import {useNavigation} from '@react-navigation/core';
import * as Yup from 'yup';

const ProfessionalInformationScreenScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const val = ['high', 'intermediate', 'graduation'];
  const initialValues = {
    particulars: [
      {
        companyName: '',
        designation: '',
        timePeriod: '',
        role: '',
      },
    ],
  };

  const validationSchema = Yup.object({
    particulars: Yup.array().of(
      Yup.object().shape({
        companyName: Yup.string().required('Required*'),
        designation: Yup.string().required('Required*'),
        timePeriod: Yup.string().required('Required*'),
        role: Yup.string().required('Required*'),
      }),
    ),
  });

  return (
    <ImageBackground
    source={require('./images/main.jpg')}
    resizeMode="cover"
    style={styles.image}>
    <ScrollView keyboardShouldPersistTaps={'always'}>
      <AppHeader
        backgroundColor="green"
        heading="Professional Details"
        headingColor="#fff"
      />
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>
            Please Add Experience in Descending Order
          </Text>
        </View>
        <View>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values =>
              dispatch(addProfessionalInformation(values, navigation))
            }>
            {({handleChange, handleBlur, handleSubmit}) => (
              <View>
                <FieldArray name="particulars">
                  {fieldArrayProps => {
                    const {push, remove, form} = fieldArrayProps;
                    const {values} = form;
                    return values.particulars.map((single, index) => {
                      return (
                        <View key={index}>
                          <View style={styles.block}>
                            <TextInput
                              onChangeText={handleChange(
                                `particulars[${index}].companyName`,
                              )}
                              onBlur={handleBlur(
                                `particulars[${index}].companyName`,
                              )}
                              value={single.companyName}
                              style={styles.input}
                              placeholder="Company Name"
                            />

                            <Text style={styles.error}>
                              <ErrorMessage
                                name={`particulars[${index}].companyName`}
                              />
                            </Text>

                            <TextInput
                              onChangeText={handleChange(
                                `particulars[${index}].designation`,
                              )}
                              onBlur={handleBlur(
                                `particulars[${index}].designation`,
                              )}
                              value={single.designation}
                              style={styles.input}
                              placeholder="Designation"
                            />

                            <Text style={styles.error}>
                              <ErrorMessage
                                name={`particulars[${index}].designation`}
                              />
                            </Text>

                            <TextInput
                              onChangeText={handleChange(
                                `particulars[${index}].timePeriod`,
                              )}
                              onBlur={handleBlur(
                                `particulars[${index}].timePeriod`,
                              )}
                              value={single.timePeriod}
                              style={styles.input}
                              placeholder="Time Period(ex 10/2020 - 11/2015)"                            
                            />

                            <Text style={styles.error}>
                              <ErrorMessage
                                name={`particulars[${index}].timePeriod`}
                              />
                            </Text>

                            <TextInput
                              onChangeText={handleChange(
                                `particulars[${index}].role`,
                              )}
                              onBlur={handleBlur(`particulars[${index}].role`)}
                              value={single.role}
                              style={styles.input}
                              placeholder="Role"
                            />

                            <Text style={styles.error}>
                              <ErrorMessage
                                name={`particulars[${index}].role`}
                              />
                            </Text>
                          </View>
                          {index === values.particulars.length - 1 && (
                            <>
                              <Button
                                title="Add More Experience"
                                color="tomato"
                                onPress={() =>
                                  push({
                                    companyName: '',
                                    designation: '',
                                    timePeriod: '',
                                    role: '',
                                  })
                                }
                              />
                              {index > 0 && (
                                <View style={styles.delete}>
                                  <Button
                                    title="X"
                                    color="tomato"
                                    onPress={() => remove()}
                                  />
                                </View>
                              )}
                            </>
                          )}
                        </View>
                      );
                    });
                  }}
                </FieldArray>
                <View style={styles.submit}>
                  <Button onPress={handleSubmit} title="Submit" />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

export default ProfessionalInformationScreenScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 3,
    textAlign: 'center',
    color: '#ff4d6a',
  },
  input: {
    borderColor: '#006600',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 3,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },

  error: {
    color: '#b30000',
    fontSize:10,
    fontWeight: 'bold',
  },

  block: {
    backgroundColor: '#006600',
    padding: 22,
    marginVertical: 10,
    position: 'relative',
  },
  delete: {
    position: 'absolute',
    right: 0,
    top: 10,
  },
  submit: {
    marginTop: 10,
    width: 200,
    alignSelf: 'center',
    borderRadius: 20,
  },
  image: {
    flex: 1,
  },
});
