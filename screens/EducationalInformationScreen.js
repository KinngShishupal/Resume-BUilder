// // Educational Info

// import React from 'react';
// import {
//   Button,
//   TextInput,
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import {Formik, FieldArray, ErrorMessage} from 'formik';
// import {useDispatch, useSelector} from 'react-redux';
// import {addEducationalInformation} from '../store/actions';
// import AppHeader from '../components/Header';
// import {useNavigation} from '@react-navigation/core';
// import * as Yup from 'yup';

// const EducationalInformationScreen = () => {
//   const dispatch = useDispatch();
//   const navigation = useNavigation();
//   const val = ['high', 'intermediate', 'graduation'];
//   const initialValues = {
//     particulars: [
//       {
//         instituteName: '',
//         passingYear: '',
//         marks: '',
//         subjects: '',
//         board: '',
//       },
//     ],
//   };

//   const validationSchema = Yup.object({
//     particulars: Yup.array().of(
//       Yup.object().shape({
//         instituteName: Yup.string().required('required '),
//         passingYear: Yup.string().required('required'),
//         marks: Yup.string().required('required'),
//         subjects: Yup.string().required('required'),
//         board: Yup.string().required('required'),
//       }),
//     ),
//   });

//   const standard = [
//     'High School',
//     'InterMediate',
//     'Graduation',
//     'Post Graduation',
//     'Doctorate',
//   ];
//   return (
//     <ScrollView>
//       <AppHeader
//         backgroundColor="#006666"
//         heading="Educational Information"
//         headingColor="#fff"
//       />

//       <View style={styles.container}>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={values => {
//             // dispatch(addEducationalInformation(values, navigation))
//             console.log('PPPPP');
//           }}>
//           {({handleChange, handleBlur, handleSubmit, errors, touched}) => (

//               <>
//                 <FieldArray name="particulars">
//                   {fieldArrayProps => {
//                     const {push, remove, form} = fieldArrayProps;
//                     const {values} = form;
//                     return values.particulars.map((single, index) => {
//                       return (
//                         <View key={index}>
//                           <View style={styles.block}>
//                             <Text style={styles.level}>{standard[index]}</Text>

//                             <TextInput
//                               onChangeText={handleChange(
//                                 `particulars[${index}].instituteName`,
//                               )}
//                               onBlur={handleBlur(
//                                 `particulars[${index}].instituteName`,
//                               )}
//                               value={single.instituteName}
//                               style={styles.input}
//                               placeholder="Institute Name"
//                             />
//                             <Text style={styles.error}>
//                               <ErrorMessage
//                                 name={`particulars[${index}].instituteName`}
//                               />
//                             </Text>

//                             <TextInput
//                               onChangeText={handleChange(
//                                 `particulars[${index}].passingYear`,
//                               )}
//                               onBlur={handleBlur(
//                                 `particulars[${index}].passingYear`,
//                               )}
//                               value={single.passingYear}
//                               style={styles.input}
//                               placeholder="Passing Year (ex. 2020)"
//                               keyboardType="numeric"
//                             />

//                             <Text style={styles.error}>
//                               <ErrorMessage
//                                 name={`particulars[${index}].passingYear`}
//                               />
//                             </Text>

//                             {/* <TextInput
//                             onChangeText={handleChange(
//                               `particulars[${index}].marks`,
//                             )}
//                             onBlur={handleBlur('particulars[0].marks')}
//                             value={single.marks}
//                             style={styles.input}
//                             placeholder="Marks(%)"
//                             keyboardType="numeric"
//                           /> */}

//                             <TextInput
//                               onChangeText={handleChange(
//                                 `particulars[${index}].subjects`,
//                               )}
//                               onBlur={handleBlur(
//                                 `particulars[${index}].subjects`,
//                               )}
//                               value={single.subjects}
//                               style={styles.input}
//                               placeholder="Subjects"
//                               multiline
//                             />

//                             <Text style={styles.error}>
//                               <ErrorMessage
//                                 name={`particulars[${index}].subjects`}
//                               />
//                             </Text>

//                             <TextInput
//                               onChangeText={handleChange(
//                                 `particulars[${index}].board`,
//                               )}
//                               onBlur={handleBlur(`particulars[${index}].board`)}
//                               value={single.board}
//                               style={styles.input}
//                               placeholder="Board"
//                             />

//                             <Text style={styles.error}>
//                               <ErrorMessage
//                                 name={`particulars[${index}].board`}
//                               />
//                             </Text>
//                           </View>

//                           {index === values.particulars.length - 1 && (
//                             <>
//                               {standard.length - 1 > index && (
//                                 <Button
//                                   title="Add Education"
//                                   color="tomato"
//                                   onPress={() =>
//                                     push({
//                                       companyName: '',
//                                       designation: '',
//                                       timePeriod: '',
//                                       role: '',
//                                     })
//                                   }
//                                 />
//                               )}

//                               {index > 0 && (
//                                 <View style={styles.delete}>
//                                   <Button
//                                     title="X"
//                                     color="tomato"
//                                     onPress={() => remove()}
//                                   />
//                                 </View>
//                               )}
//                             </>
//                           )}
//                         </View>
//                       );
//                     });
//                   }}
//                 </FieldArray>
//                 <View style={styles.submit}>
//                   <Button onPress={handleSubmit} title="Submit" />
//                 </View>
//               </>

//           )}
//         </Formik>
//       </View>
//     </ScrollView>
//   );
// };

// export default EducationalInformationScreen;

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 10,
//   },
//   level: {
//     fontSize: 18,
//     letterSpacing: 2,
//     color: '#fff',
//   },
//   header: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     letterSpacing: 3,
//     textAlign: 'center',
//     color: '#ff4d6a',
//   },
//   input: {
//     borderColor: '#006600',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginVertical: 3,
//     backgroundColor: '#fff',
//     paddingHorizontal: 5,
//   },

//   error: {
//     color: '#b30000',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },

//   block: {
//     backgroundColor: '#006666',
//     padding: 22,
//     marginVertical: 10,
//     position: 'relative',
//   },
//   delete: {
//     position: 'absolute',
//     right: 0,
//     top: 10,
//   },
//   submit: {
//     marginVertical: 10,
//   },
// });

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
import {addEducationalInformation} from '../store/actions';
import AppHeader from '../components/Header';
import {useNavigation} from '@react-navigation/core';
import * as Yup from 'yup';

const ProfessionalInformationScreenScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const initialValues = {
    particulars: [
      {
        instituteName: '',
        passingYear: '',
        marks: '',
        subjects: '',
        board: '',
      },
    ],
  };

  const validationSchema = Yup.object({
    particulars: Yup.array().of(
      Yup.object().shape({
        instituteName: Yup.string().required('required '),
        passingYear: Yup.string().required('required'),
        marks: Yup.string().required('required'),
        subjects: Yup.string().required('required'),
        board: Yup.string().required('required'),
      }),
    ),
  });

  const standard = [
    'High School',
    'InterMediate',
    'Graduation',
    'Post Graduation',
    'Doctorate',
  ];

  return (
    <ImageBackground
    source={require('./images/stone.jpg')}
    resizeMode="cover"
    style={styles.image}>
    <ScrollView keyboardShouldPersistTaps={'always'}>
      <AppHeader
        backgroundColor="#006666"
        heading="Educational Details"
        headingColor="#fff"
      />
      <View style={styles.container}>
        <View>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values =>
              dispatch(addEducationalInformation(values, navigation))
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
                            <Text style={styles.level}>{standard[index]}</Text>
                            <TextInput
                              onChangeText={handleChange(
                                `particulars[${index}].instituteName`,
                              )}
                              onBlur={handleBlur(
                                `particulars[${index}].instituteName`,
                              )}
                              value={single.instituteName}
                              style={styles.input}
                              placeholder="Institute Name"
                            />

                            <Text style={styles.error}>
                              <ErrorMessage
                                name={`particulars[${index}].instituteName`}
                              />
                            </Text>

                            <TextInput
                              onChangeText={handleChange(
                                `particulars[${index}].passingYear`,
                              )}
                              onBlur={handleBlur(
                                `particulars[${index}].passingYear`,
                              )}
                              value={single.designation}
                              style={styles.input}
                              placeholder="Passing Year"
                            />

                            <Text style={styles.error}>
                              <ErrorMessage
                                name={`particulars[${index}].passingYear`}
                              />
                            </Text>

                            <TextInput
                              onChangeText={handleChange(
                                `particulars[${index}].marks`,
                              )}
                              onBlur={handleBlur(`particulars[${index}].marks`)}
                              value={single.timePeriod}
                              style={styles.input}
                              placeholder="marks"
                            />

                            <Text style={styles.error}>
                              <ErrorMessage
                                name={`particulars[${index}].marks`}
                              />
                            </Text>

                            <TextInput
                              onChangeText={handleChange(
                                `particulars[${index}].subjects`,
                              )}
                              onBlur={handleBlur(
                                `particulars[${index}].subjects`,
                              )}
                              value={single.role}
                              style={styles.input}
                              placeholder="subjects"
                            />

                            <Text style={styles.error}>
                              <ErrorMessage
                                name={`particulars[${index}].subjects`}
                              />
                            </Text>

                            <TextInput
                              onChangeText={handleChange(
                                `particulars[${index}].board`,
                              )}
                              onBlur={handleBlur(`particulars[${index}].board`)}
                              value={single.role}
                              style={styles.input}
                              placeholder="board"
                            />

                            <Text style={styles.error}>
                              <ErrorMessage
                                name={`particulars[${index}].board`}
                              />
                            </Text>
                          </View>
                          {index === values.particulars.length - 1 && (
                            <>
                              {values.particulars.length < 5 && (
                                <Button
                                  title="Add More Experience"
                                  color="tomato"
                                  onPress={() =>
                                    push({
                                      instituteName: '',
                                      passingYear: '',
                                      marks: '',
                                      subjects: '',
                                      board: '',
                                    })
                                  }
                                />
                              )}

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
    fontSize: 10,
    fontWeight: 'bold',
  },

  block: {
    backgroundColor: '#006666',
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
  level: {
    fontSize: 18,
    letterSpacing: 2,
    color: '#fff',
  },
  image: {
    flex: 1,
  },
});
