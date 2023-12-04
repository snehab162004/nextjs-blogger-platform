import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return<div>
    <SignIn path="/sign-in"
     routing="path" 
    signUpUrl={'/sign-up'}
     redirectUrl={'/'} />
    </div>
}

export default SignInPage