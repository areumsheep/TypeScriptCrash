import "../assets/page/login.css";
import { $, $btn_type } from "./util/dom";
import { login, signup } from "./api/index";
import { EMAIL_FORMAT_CHECK } from "./constant/index";

$btn_type("login").addEventListener("click", async (event) => {
  event.preventDefault();

  const email = $<HTMLInputElement>("#login-email").value;
  const password = $<HTMLInputElement>("#login-password").value;

  const data = await login({
    email,
    password,
  });

  const { _id, email: userEmail } = data[0];
  alert(`환영합니다, ${userEmail}님!`);

  localStorage.setItem("user_token", _id);
  location.replace("/");
});

$btn_type("signup").addEventListener("click", async (event) => {
  event.preventDefault();

  const email = $<HTMLInputElement>("#signup-email").value;
  const password = $<HTMLInputElement>("#signup-password").value;
  const passwordConfirm = $<HTMLInputElement>("#signup-password-confirm").value;

  if (password !== passwordConfirm) return alert("패스워드를 확인해주세요.");
  if (!EMAIL_FORMAT_CHECK.test(email))
    return alert("옳지 않은 이메일 형식입니다.");

  await signup({
    email,
    password,
    status: 0,
  });

  alert("회원가입이 완료되었습니다.\n로그인해주세요.");
  location.replace(`/login.html`);
});
