# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 프로젝트 설치
```bash
#1 vite 설치
npm init vite

#2 현재폴더로 지정
./

#3 선택
React 

#4 선택
JavaScript

#5 설치
npm install

### 패키지 설치
npm install axios @reduxjs/toolkit react-icons react-loading-skeleton sass react-router-dom react-hook-form

```

### react-router-dom 세팅
`src > App.jsx `

``` javascript
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetaillPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import OrderPage from './pages/OrderPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<DetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

### global.scss 세팅
 
`src > main.jsx`
``` javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.scss' // 여기에 추가하기

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 로그인 페이지 유효성검사

React Hook form 을 이용하여 유효성 검사

`src > components > form > Form.jsx`

``` javascript
import React from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form'

// SignUp, SignIn 에서 전달받은 prop값 : title
const Form = ({title}) => {

  // React Hook Form 을 이용한 유효성 체크
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    mode: 'onChange'
  });

  // 작성한 input의 value값 받아올것임
  const onSubmit = ({email, password}) => {
    console.log(email,password)
  }

  // ...register 로 추가하기
  // 객체 안에 유효성체크 추가하기
  const userEmail = {
    required: "필수 필드입니다.",
  }
  const userPassword = {
    required: "필수 필드입니다.",
    minLength: {
      value: 4,
      message: "최소 4자입니다."
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
      <span className={styles.form_error}></span>
    </form>
  )
}

export default Form
```