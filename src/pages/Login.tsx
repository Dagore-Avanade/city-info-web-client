import FormHeader from '../components/FormHeader'
import LoginForm from '../components/LoginForm'

export default function Login (): JSX.Element {
  // Thanks to Siddhant Varma https://www.loginradius.com/blog/engineering/guest-post/modern-login-signup-form-tailwindcss-react/
  return (
    <div className='w-80 m-auto'>
      <FormHeader
        heading='Inicia sesión en tu cuenta'
        paragraph='¿No tienes cuenta todavía?'
        linkName='Regístrate'
        linkUrl='/signUp'
      />
      <LoginForm />
    </div>
  )
}
