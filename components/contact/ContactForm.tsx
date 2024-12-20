import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Button, Input } from "@nextui-org/react";

interface FormValues {
  email: string;
}

const ContactForm = () => {
  const initialValues: FormValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("La dirección de correo electrónico no es válida.")
      .required("Este campo no puede estar vacío."),
  });

  const onSubmit = (values: FormValues) => {
    console.log("Datos enviados", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form className="w-full max-w-xs space-y-4">
          <Field name="email">
            {({ field }: any) => (
              <Input
                {...field} 
                type="email"
                label="Email"
                placeholder="Enter your email"
                isInvalid={touched.email && errors.email ? true : false} 
                errorMessage={touched.email && errors.email ? errors.email : ""}
                className="w-full"
              />
              
            )}
          </Field>
          <Button
            type="submit"
            color="primary"
            className="w-full"
          >
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
