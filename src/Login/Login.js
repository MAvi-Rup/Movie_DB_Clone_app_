import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link} from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import auth from '../firebase.init';


const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let handleError;
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    //const [token] = useToken(user || gUser)
    //const navigate = Navigate();
    // const location = useLocation();
    // let from = location.state?.from?.pathname || "/";

    // const navigateRegister = event => {
        
    // }
    
    if (loading || sending || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError) {
        handleError = <p className='text-warning fs-4'>Error:{error?.message || gError?.message}</p>
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        await signInWithEmailAndPassword(email, password);
        console.log("Login Successful")

    }





    return (
        <div className='mt-5 pt-5 w-50 m-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Login our website to view the latest movie and TV shows fully free.</p>
                    </div>
                    <form onSubmit={formSubmit} className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100 mb-5">
                        <div className="card-body">
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required ref={emailRef} placeholder="Input your Email" className="input input-bordered bg-white text-dark" />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" ref={passRef} required placeholder="Input Your Password" className="input input-bordered bg-white text-dark" />
                                {/* <label className="label">
                                    <button onClick={resetPassword} className="label-text-alt link link-hover">Forgot password?</button>
                                </label> */}
                            </div>
                            {handleError}
                            <div className=" mt-2 mb-2">
                                <button className="btn btn-warning">Login</button>
                            </div>
                            <p className='text-danger italic'>New to MovieDB? <Link to="/register" className='text-primary no-underline'>Please Register</Link> </p>
                            <div className="divider">OR</div>
                            <div
                                onClick={() => signInWithGoogle()}
                                className="btn btn-warning"
                            >Continue with Google</div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;