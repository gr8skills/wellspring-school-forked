import React {useState} from './React'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { AppButton } from "../AppButton/AppButton";
import './_form.scss';
import { useState } from "react";
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
let [value, setValue] = React.useState("");

let handleInputChange = (e) => {
  let inputValue = e.target.value;
  setValue(inputValue);
};
  return (
    <Formik
      initialValues={{ name: "Sasuke" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <Input {...field} placeholder="name" />
                <Input type="email" placeholder="Email address" />
                <Input
                  type="text"
                  placeholder="Subject"
                />

                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <AppButton
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
            text="Submit"
          />
        </Form>
      )}
    </Formik>
  );
}