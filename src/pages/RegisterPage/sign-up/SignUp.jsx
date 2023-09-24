import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../../../firebase';

const SignUp = () => {
  const navigate = useNavigate(); // 페이지 이동시키는 기능
  const [firebaseError, setFirebaseError] = useState(""); // 회원가입하다가 에러뜨면 넣어줄 예정

  const auth = getAuth(app);
  // 로그인하거나 회원가입할때 마다 이 함수를 호출
  const handleSignupAndLogin = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      // 리덕스 스토어에 담는 로직

      navigate('/'); //메인페이지로 이동
    })
    .catch(error => {
      return error && setFirebaseError("이메일 또는 비밀번호가 잘못되었습니다.")
    })
  }

  return (
    <Form 
      title={"가입하기"}
      getDataForm={handleSignupAndLogin}
      firebaseError={firebaseError}
    >
    </Form>
  )
}

export default SignUp