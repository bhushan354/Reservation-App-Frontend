import React from 'react';
import style from '../styles/Auth.module.css';

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
            if (!email || !password) {
        setError('Email and password are required');
        return;
      }
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      });
      const responseJson = await response.json();
      const { status } = responseJson;
      if (status.code === 200) {
        const tokenHeader = response.headers.get('Authorization');
        const token = tokenHeader ? tokenHeader.split(' ')[1] : null;
        if (token) {
          const { data } = responseJson;
          const { id, email } = data;
          dispatch(loginSuccess({ user: { id, email }, token }));
          navigate('/homepage');
        } else {
          dispatch(loginFailure());
          setError('Login failed');
        }
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
      dispatch(loginFailure());
      setError('An error occurred');
    }
  };

  return (
    <div className={style['section-auth-container']}>
      <div className={`${style.color} ${style['color-1']}`} />
      <div className={`${style.color} ${style['color-2']}`} />
      <div className={`${style.color} ${style['color-3']}`} />
      <div className={style.box}>
        <div className={style.container}>
          <h2 className={style.heading}>Login Form</h2>
          <form className={style.form}>
            <input
              type="text"
              name="login"
              placeholder="Username or Email"
            />
            <div className={style['input-container']}>
              <input
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className={style['submit-btn']}>
              Log In
              {' '}
              {value}
            </button>
            <p>
              Do not have an accout?
              <button type="button">Sign Up</button>
            </p>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Login;
