import styled from "@emotion/styled";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import { dialogStore } from "stores/dialogStore";
import { loadingStore } from "stores/loadingStore";
import { getFieldProps } from "utils/getFieldProps";
import * as yup from "yup";

const Image = styled.img`
  min-width: 0;
  max-width: 600px;
  width: 100%;
`;

const validationSchema = yup.object({
  email: yup.string().email("รูปแบบอีเมลไม่ถูกต้อง").required("กรุณาระบุอีเมล"),
  password: yup.string().required("กรุณาระบุรหัสผ่าน"),
});

export const AuthLoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      loadingStore.increase();

      const { email, password } = values;
      try {
        // await firebaseApp.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        // const { title, message } = getError(error.code);
        // dialogStore.open(message, { title });
      }

      loadingStore.decrease();
    },
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100vh"
    >
      <Box mb={6}>
        <Typography variant="h1">Example Login Form</Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          style={{ marginBottom: "1.25rem" }}
          fullWidth
          variant="outlined"
          label="อีเมล"
          autoComplete="email"
          {...getFieldProps(formik, "email")}
        />

        <TextField
          fullWidth
          variant="outlined"
          label="รหัสผ่าน"
          type="password"
          autoComplete="current-password"
          {...getFieldProps(formik, "password")}
        />

        <Box mt={2}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            เข้าสู่ระบบ
          </Button>
        </Box>
      </form>
    </Box>
  );
};
