import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from '../lib/axios';
import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';
import HorizontalRule from '../components/HorizontalRule';
import Link from '../components/Link';
import GoogleImage from '../assets/google.svg';
import styles from './LoginPage.module.css';
import { useAuth } from '../contexts/AuthProvider';

function LoginPage() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleChange(e) {
    const { name, value } = e.target;

    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    /**
     * @TODO
     * 서버에 로그인을 시도합니다
     * 로그인이 성공하면 `/me`로 이동합니다
     */
    const { email, password } = values;
    //request는 비동기니까 await을 꼭 넣는걸 잊지말자.
    // await axios.post('/auth/login', // contexts/AuthProvider에서 request login함수를 만들어서 사용함.
    await login({
      email,
      password,
    }),
      // {
      //withCredentials: true 이 옵션을 꼭 넣어줘야하는데
      //ㄴ> 서로다른 도메인에서 쿠키를 보내거나 받을떄 반드시 필요
      // ㄴ> 리퀘스트 보내는 도메인과 리스폰스 받는 도메인이 다를때 필요
      // withCredentials: true, 일일히 해줄때에는 이렇게 하는데 lib/axios.js 에서 상시적으로 적용시켜놨음
      // },
      // );
      navigate('/me');
  }

  return (
    <>
      <h1 className={styles.Heading}>로그인</h1>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <Label className={styles.Label} htmlFor='email'>
          이메일
        </Label>
        <Input
          id='email'
          className={styles.Input}
          name='email'
          type='email'
          placeholder='이메일'
          value={values.email}
          onChange={handleChange}
        />
        <Label className={styles.Label} htmlFor='password'>
          비밀번호
        </Label>
        <Input
          id='password'
          className={styles.Input}
          name='password'
          type='password'
          placeholder='비밀번호'
          value={values.password}
          onChange={handleChange}
        />
        <Button className={styles.Button}>로그인</Button>
        <HorizontalRule className={styles.HorizontalRule}>또는</HorizontalRule>
        <Button
          className={styles.GoogleButton}
          type='button'
          appearance='outline'
          as={Link}
          /** @TODO 구글 로그인 구현 */
        >
          <img src={GoogleImage} alt='Google' />
          구글로 시작하기
        </Button>
        <div>
          회원이 아니신가요? <Link to='/register'>회원가입하기</Link>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
