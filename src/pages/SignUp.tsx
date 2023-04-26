import FormHeader from '../components/FormHeader'
import SignUpForm from '../components/SignUpForm'

export default function SignUp (): JSX.Element {
  // Thanks to Siddhant Varma https://www.loginradius.com/blog/engineering/guest-post/modern-login-signup-form-tailwindcss-react/
  return (
    <div className='w-80 m-auto'>
      <FormHeader
        heading='Regístrate'
        paragraph='¿Ya estás registrado?'
        linkName='Inicia sesión'
        linkUrl='/login'
      />
      <SignUpForm />
    </div>
  )
}
