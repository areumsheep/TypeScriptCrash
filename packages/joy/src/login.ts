import '../assets/page/login.css';
import { $, $btn_type } from './util/dom';
import { login } from './api/index';

$btn_type('login').addEventListener('click', async (event: any) => {
  event.preventDefault();

  const email = $('#login-email').value;
  const password = $('#login-password').value;

  const data = await login({
    email,
    password,
  });

  const { _id, email: userEmail } = data[0];
  alert(`환영합니다, ${userEmail}님!`);

  localStorage.setItem('user_token', _id);
  location.replace('/');
});
