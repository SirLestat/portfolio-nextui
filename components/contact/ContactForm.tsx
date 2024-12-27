import * as Yup from "yup";
import { Formik, Form, Field, FieldProps } from "formik";
import { Button, Input, Textarea } from "@nextui-org/react";
import inputStyles from "./inputStyles";

interface FormValues {
  email: string;
  name: string;
  message: string;
}

const ContactForm = () => {
  const initialValues: FormValues = {
    email: "",
    name: "",
    message: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("La dirección de correo electrónico no es válida.")
      .required("Este campo no puede estar vacío."),
    name: Yup.string()
      .required("Este campo no puede estar vacío.")
      .min(3, "El nombre debe tener al menos 3 caracteres"),
    message: Yup.string()
      .required("Este campo no puede estar vacío.")
      .min(10, "La descripción debe tener al menos 10 caracteres"),
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
      {({ errors, touched, isValid, dirty }) => (
        <Form className="w-full max-w-[900px] space-y-6 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[180px] gap-10 ">
            <Field name="name">
              {({ field }: FieldProps) => {
                const isNameInvalid = touched.name && errors.name;
                return (
                  <Input
                    {...field}
                    type="text"
                    label="Nombre"
                    aria-invalid={!!isNameInvalid}
                    errorMessage={isNameInvalid ? errors.name : ""}
                    className="w-full"
                    variant="underlined"
                    isInvalid={!!isNameInvalid}
                    classNames={inputStyles}
                    autoComplete="off"
                  />
                );
              }}
            </Field>

            <Field name="email">
              {({ field }: FieldProps) => {
                const isEmailInvalid = touched.email && errors.email;
                return (
                  <Input
                    {...field}
                    type="email"
                    label="Email"
                    isInvalid={!!isEmailInvalid}
                    errorMessage={isEmailInvalid ? errors.email : ""}
                    className="w-full"
                    aria-invalid={!!isEmailInvalid}
                    autoComplete="off"
                    variant="underlined"
                    classNames={inputStyles}
                  />
                );
              }}
            </Field>
          </div>

          <Field name="message">
            {({ field }: FieldProps) => {
              const isMessageInvalid = touched.message && errors.message;
              return (
                <Textarea
                  {...field}
                  label="Mensaje"
                  aria-invalid={!!isMessageInvalid}
                  errorMessage={isMessageInvalid ? errors.message : ""}
                  className="w-full"
                  variant="underlined"
                  isInvalid={!!isMessageInvalid}
                  classNames={inputStyles}
                />
              );
            }}
          </Field>

          <button
            type="submit"
            disabled={!(isValid && dirty)}
            className={`w-full max-w-max rounded-full bg-transparent text-white border-[#CC005F] border-[1px] hover:bg-[#CC005F] font-semibold font-montserrat px-6 py-2 transition-all duration-200 ease-in-out ${
              !(isValid && dirty) ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
