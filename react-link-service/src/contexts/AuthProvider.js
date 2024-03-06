import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../lib/axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
  user: null,
  isPending: true,
  login: () => {},
  logout: () => {},
  updateMe: () => {},
});

export function AuthProvider({ children }) {
  //   const [user, setUser] = useState(null);
  const [values, setValues] = useState({
    user: null,
    isPending: true,
  });

  async function getMe() {
    setValues(prevValues => ({
      ...prevValues,
      isPending: true,
    }));
    let nextUser;
    try {
      const res = await axios.get('/users/me');
      nextUser = res.data;
    } catch {
    } finally {
      setValues(prevValues => ({
        ...prevValues,
        user: nextUser,
        isPending: false,
      }));
    }
  }

  async function login({ email, password }) {
    await axios.post('/auth/login', {
      email,
      password,
    });
    await getMe();
  }

  async function logout() {
    /* @TODO 로그아웃 구현하기 */
  }

  async function updateMe(formData) {
    const res = await axios.patch('/users/me', formData);
    const nextUser = res.data;
    // setUser(nextUser);
    setValues(prevValues => ({
      ...prevValues,
      user: nextUser,
    }));
  }

  useEffect(() => {
    getMe();
  }, []);

  return;
  <AuthContext.Provider
    value={{
      user: values.user,
      ispending: values.isPending,
      login,
      logout,
      updateMe,
    }}
  >
    {children}
  </AuthContext.Provider>;
}

// export function useAuth() {
//유저가 꼭필요한 페이지라면 유저 데이터를 받지못했을때 리다이렉트 되도록 옵션을 추가
export function useAuth(required) {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error('반드시 AuthProvider안에서 사용해야 합니다.');
  }

  useEffect(() => {
    // if (required && !context.user) {
    if (required && !context.user && !context.isPending) {
      navigate('/login');
    }
  }, [context.user, context.isPending, navigate, required]);

  return context;
}
