import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from '../types/api/user';
import { useLoginUser } from './useLoginUser';
import { useMessage } from './useMessage';

export const UseAuth = () => {
  const { setLoginUser } = useLoginUser();
  const history = useHistory();
  const { ShowMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`http://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          const isAdmin = res.data.id === 10 ? true : false;
          setLoginUser({ ...res.data, isAdmin });
          ShowMessage({ title: 'ログインしました', status: 'success' });
          history.push('/home');
        } else {
          ShowMessage({ title: 'ユーザーが見つかりません', status: 'error' });
          setLoading(false);
        }
      })
      .catch(() => {
        ShowMessage({ title: 'ログインできません', status: 'error' });
        setLoading(false);
      });
  }, []);
  return { login, loading, setLoginUser };
};
