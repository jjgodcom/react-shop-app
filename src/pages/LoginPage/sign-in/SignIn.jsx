import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/user/user.slice';

const SignIn = () => {
  const navigate = useNavigate(); // 페이지 이동시키는 기능
  const [firebaseError, setFirebaseError] = useState(""); // 로그인하다 에러뜨면 넣어줄 예정
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const handelLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      dispatch(setUser({
        email: userCredential.user.email,
        token: userCredential.user.refreshToken,
        id: userCredential.user.id,
      }))
      navigate('/') //성공시 홈으로
    })
    .catch(error => {
      return error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
    })
  }

  return (
    <Form 
      title={"로그인"}
      getDataForm={handelLogin}
      firebaseError={firebaseError}
    >
    </Form>
  )
}

export default SignIn