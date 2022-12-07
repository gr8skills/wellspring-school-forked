import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { AppButton } from "../AppButton/AppButton";
import './_form.scss';
// The below import defines which components come from formik
// import { Field, Form, Formik } from 'formik';

export const EnquiryForm=() =>{
  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    } else if (value.toLowerCase() !== 'naruto') {
      error = "Jeez! You're not a fan 😱"
    }
    return error
  }

  return (
    <Formik
      initialValues={{ name: 'Sasuke' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name='name' validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                {/* <FormLabel>First name</FormLabel> */}
                <Input {...field} placeholder='name' />
                <Input {...field} placeholder='Email Address' />
                <Input {...field} placeholder='SUbje' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <AppButton
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
            text="Submit"
          />
          
        </Form>
      )}
    </Formik>
  )
}