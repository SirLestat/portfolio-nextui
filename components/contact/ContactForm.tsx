import * as Yup from "yup";
import { Formik, Form, Field, FieldProps } from "formik";
import { Button, Input, Textarea } from "@nextui-org/react";
import inputStyles from "./inputStyles";

interface FormValues {
  email: string;
  name: string;
  message: string; // Añadido para el Textarea
}

const ContactForm = () => {
  const initialValues: FormValues = {
    email: "",
    name: "",
    message: "", // Inicializamos el valor del Textarea
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
      .min(10, "La descripción debe tener al menos 10 caracteres"), // Validación para el Textarea
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
        <Form className="w-full max-w-[900px] space-y-6 px-4">
          {/* Contenedor de los campos en línea para pantallas grandes, y en columna para pantallas pequeñas */}
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

          {/* Campo de texto para la descripción que ocupa todo el ancho */}
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

          <Button type="submit" color="primary" className="w-full max-w-max">
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
