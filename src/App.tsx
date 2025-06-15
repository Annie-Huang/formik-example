import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

type Errors = {
  email?: string;
  username?: string;
  password?: string;
};

function App() {
  // ------------------- Version 3 ---------------------------
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('onSubmit', values);
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email address'),
      password: Yup.string().required('Password is required'),
      username: Yup.string().required('Username is required'),
    }),
  });

  // ------------------- Version 2 ---------------------------
  /*
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('onSubmit', values);
    },
    validate: (values) => {
      const errors: Errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      }
      if (!values.username) {
        errors.username = 'Username is required';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      }
      return errors;
    },
  });
*/

  // ------------------- Version 3 ---------------------------
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className='field'>
          <input
            name='email'
            placeholder='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className='error'>
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </div>
        </div>
        <div className='field'>
          <input
            name='username'
            placeholder='Username'
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className='error'>
            {formik.errors.username &&
              formik.touched.username &&
              formik.errors.username}
          </div>
        </div>
        <div className='field'>
          <input
            name='password'
            placeholder='Password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className='error'>
            {formik.errors.password &&
              formik.touched.password &&
              formik.errors.password}
          </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );

  // ------------------- Version 2 ---------------------------
  /*  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className='field'>
          <input
            name='email'
            placeholder='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className='error'>
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </div>
        </div>
        <div className='field'>
          <input
            name='username'
            placeholder='Username'
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className='error'>
            {formik.errors.username &&
              formik.touched.username &&
              formik.errors.username}
          </div>
        </div>
        <div className='field'>
          <input
            name='password'
            placeholder='Password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className='error'>
            {formik.errors.password &&
              formik.touched.password &&
              formik.errors.password}
          </div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );*/

  // ------------------- Version 1 ---------------------------
  /*  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <form>
        <div className='field'>
          <input name='email' placeholder='Email' />
          <div className='error'></div>
        </div>
        <div className='field'>
          <input name='username' placeholder='Username' />
          <div className='error'></div>
        </div>
        <div className='field'>
          <input name='password' placeholder='Password' />
          <div className='error'></div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );*/
}

export default App;
