import '../assets/page/login.css';
import { signup } from './api/index';
import { $, $btn_type } from './util/dom';
import { EMAIL_FORMAT_CHECK } from './constant/index';

$btn_type('signup').addEventListener('click', async (event: any) => {
  event.preventDefault();

  const email = $('#signup-email').value;
  const password = $('#signup-password').value;
  const passwordConfirm = $('#signup-password-confirm').value;

  if (password !== passwordConfirm) return alert('패스워드를 확인해주세요.');
  if (!EMAIL_FORMAT_CHECK.test(email)) return alert('옳지 않은 이메일 형식입니다.');

  console.log(email);
  console.log(password);
  console.log(passwordConfirm);
  await signup({
    email,
    password,
    status: 0,
  });

  alert('회원가입이 완료되었습니다.\n로그인해주세요.');
  location.replace(`/login.html`);
});
