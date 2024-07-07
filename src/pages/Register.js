import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Container, Typography, Box, Button, CircularProgress } from '@mui/material';
import CustomInput from '../components/CustomInput';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().min(6, 'Password should be at least 6 characters').required('Required'),
});

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      const auth = getAuth();
      try {
        await createUserWithEmailAndPassword(auth, values.email, values.password);
        alert('User registered successfully');
      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setErrors({ email: 'This email is already in use. Please use a different email.' });
            break;
          case 'auth/invalid-email':
            setErrors({ email: 'Invalid email format.' });
            break;
          case 'auth/weak-password':
            setErrors({ password: 'Password should be at least 6 characters.' });
            break;
          default:
            setErrors({ submit: 'An unknown error occurred. Please try again.' });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">Register</Typography>
        {formik.errors.submit && <Typography color="error">{formik.errors.submit}</Typography>}
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
          <CustomInput
            label="Email"
            type="email"
            {...formik.getFieldProps('email')}
            error={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
            aria-label="Email input field"
          />
          <CustomInput
            label="Password"
            type="password"
            {...formik.getFieldProps('password')}
            error={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
            aria-label="Password input field"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={formik.isSubmitting}
            tabIndex="0"
          >
            {formik.isSubmitting ? <CircularProgress size={24} /> : 'Register'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;