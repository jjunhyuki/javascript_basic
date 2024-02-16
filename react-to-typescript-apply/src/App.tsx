import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Label from './components/Label';
import { useSetLocale, useTranslate } from './translate';

function App() {
  //useState는 초기값으로 기본적으로 타입추론이 잘 되지만 타입추론을 잘 못할때에는 제네릭을 사용해서 타입을 지정해줄수 있다.
  const [values, setValues] = useState<{
    username: string; //추론이 잘되어서 이렇게할필요는 없지만 가끔 타입정의가 필요할때가 있다.
    password: string;
  }>({
    username: '',
    password: '',
  });

  // const [names, setNames] = useState([]); //여기서 usestate에다 호버를해보면 []타입이 never타입이라 뜨는데 이것은 있을수 없는 타입이라는 뜻 , 그래서 이럴때 타입을 명시적으로 해줘야한다.
  // const [names, setNames] = useState<string[]>([]); //이렇게 말이다.

  //useRef에서는 제네릭으로 대상이 되는 노드의 타입을 정해줄수 있고 초기값이 비어있으면 타입이 안맞기 때문에
  // ㄴ> 초기값으로 null을 넣어주자.
  const formRef = useRef<HTMLFormElement>(null);
  const t = useTranslate();
  const setLocale = useSetLocale();

  useEffect(() => {
    //useEffect는 타입을 정의해줄 일이 많이 없다.
    const form: any = formRef.current;
    if (form) form['username'].focus();
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const nextValues = {
      ...values,
      [name]: value,
    };
    setValues(nextValues);
  }

  // function handleClick(e: MouseEvent<HTMLButtonElement>) {
  // ㄴ> 여기서도 구체적으로 타입을 정해주고 싶다면 제네릭으로 써줘도 괜찮고 지금은 딱히 이벤트를 사용하고있지않으니까 냅둬보겠다.
  //지금처럼 마우스 이벤트를 딱히 사용하고있지않고 타입을 정해주고싶지 않다면 react에서 제공하는
  //ㄴ> 보편적인 타입인 SyntheticEvent를 사용해도 괜찮다.
  // function handleClick(e: SyntheticEvent) {
  function handleClick(e: MouseEvent) {
    e.preventDefault();

    const message = `${values.username}님 환영합니다`;
    alert(message);
  }

  return (
    <form className='login' ref={formRef}>
      <h1 className='login-title'>{t('signin')}</h1>
      <Label>{t('username')}</Label>
      <Input
        id='username'
        name='username'
        type='text'
        placeholder={t('email or phone number')}
        value={values.username}
        onChange={handleChange}
      />
      <Label>{t('password')}</Label>
      <Input
        id='password'
        name='password'
        type='password'
        placeholder={t('password')}
        value={values.password}
        onChange={handleChange}
      />
      <div className='login-forgot'>
        <a className='login-forgot-link' href='#login'>
          {t('forgot your password?')}
        </a>
      </div>
      <Button id='submit' onClick={handleClick}>
        {t('signin')}
      </Button>
      <div className='login-signup'>
        {t('new user?')}{' '}
        <a className='login-signup-link' href='#signup'>
          {t('signup')}
        </a>
      </div>
      <div className='locale'>
        <span onClick={() => setLocale('ko')}>한국어</span> |{' '}
        <span onClick={() => setLocale('en')}>English</span>
      </div>
    </form>
  );
}

export default App;
