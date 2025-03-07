import { SendEmailFormProp } from "./send-email-form.type.ts";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as S from "./send-email-form.styles";
import { SendEmailFormParam } from "app/store/emails/emails.type.ts";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { validateForm } from "./utils.ts";
import { useState } from "react";

export const SendEmailForm = ({ onSendEmail, onClose }: SendEmailFormProp) => {
  const [editorState, setEditorState] = useState("");

  const { handleSubmit, handleChange, values, errors, touched, isSubmitting, setFieldValue, setValues } =
    useFormik<SendEmailFormParam>({
      initialValues: {
        subject: "",
        message: "",
      },
      onSubmit: async (values) => {
        await onSendEmail(values);
        onClose();
      },
      validate: (formValues) => {
        const { subject, message } = validateForm(formValues);

        return {
          ...(subject.isValid ? {} : { subject: subject.message }),
          ...(message.isValid ? {} : { message: message.message }),
        };
      },
    });

  const handleEditorChange = (newState: string) => {
    setEditorState(newState);
    setFieldValue("message", newState);
  };

  const onCancel = () => {
    setValues({
      subject: "",
      message: "",
    });
    setEditorState("");
    onClose();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormFields>
        <S.FormGroup>
          <S.FormLabel>Title</S.FormLabel>
          <TextField
            name="subject"
            variant="outlined"
            size="small"
            type="text"
            value={values.subject}
            onChange={handleChange}
            error={touched.subject && Boolean(errors.subject)}
            helperText={errors.subject}
            placeholder="Enter title"
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.FormLabel>Message</S.FormLabel>

          <S.QuillWrapper $isError={Boolean(touched.message && errors.message)}>
            <ReactQuill
              theme="snow"
              value={editorState}
              onChange={handleEditorChange}
              placeholder="Enter message"
              className="custom-quill"
            />
            {touched.message && errors.message && <p className="error">{errors.message}</p>}
          </S.QuillWrapper>
        </S.FormGroup>
      </S.FormFields>

      <S.ButtonContainer>
        <Button type="button" variant="outlined" fullWidth color="primary" onClick={onCancel}>
          Cancel
        </Button>

        <Button type="submit" variant="contained" color="primary" fullWidth disabled={isSubmitting}>
          Send Message
        </Button>
      </S.ButtonContainer>
    </S.Form>
  );
};
