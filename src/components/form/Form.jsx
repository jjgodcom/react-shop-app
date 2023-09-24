import React from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form'

// SignUp, SignIn 에서 전달받은 prop값 : title
const Form = ({title, getDataForm, firebaseError}) => {

  // React Hook Form 을 이용한 유효성 체크
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    mode: 'onChange'
  });

  // 작성한 input의 value값 받아올것임
  const onSubmit = ({email, password}) => {
    console.log(email,password)
    // 버튼클릭시 
    getDataForm(email,password);
    reset();
  }

  // ...register 로 추가하기
  // 객체 안에 유효성체크 추가하기
  const userEmail = {
    required: "필수 필드입니다.",
  }
  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 6,
      message: "최소 6자입니다."
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input 
          type="email" 
          placeholder='E-mail' 
          {...register("email", userEmail)}
        />
        {/* email 에러가 있을경우 출력 */}
        {errors?.email &&
          <div>
            <span className={styles.form_error}>
              {errors.email.message}
            </span>
          </div>
        }
      </div>

      <div>
        <input 
          type="password" 
          placeholder='Password'
          {...register("password", userPassword)}
        />
        {/* email 에러가 있을경우 출력 */}
        {errors?.password &&
          <div>
            <span className={styles.form_error}>
              {errors.password.message}
            </span>
          </div>
        }
      </div>

      <button type="submit">{title}</button>
      {/* 파이어베이스 에러가 있을때 출력 */}
      {firebaseError && (
        <span className={styles.form_error}>{firebaseError}</span>
      )}
    </form>
  )
}

export default Form