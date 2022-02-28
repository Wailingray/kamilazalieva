import * as yup from 'yup'

export const emailSchema = yup.string().email().required()
export const fieldSchema = yup.string().required().min(1)

export const validateInput = async (schema, setterFunction, stateValue) => {
  const isValid = await schema.isValid(stateValue);
  isValid ? setterFunction(false) : setterFunction(true);
};

