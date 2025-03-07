export const validateField = (value: string, fieldName: string, min: number, max: number) => {
  if (!value) {
    return { isValid: false, message: `Please enter ${fieldName}` };
  } else if (value.length < min || value.length > max) {
    return { isValid: false, message: `${fieldName} must be between ${min} and ${max} characters` };
  }
  return { isValid: true, message: undefined };
};
