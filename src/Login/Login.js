import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link} from 'react-router-dom';
import Loading from '../components/Loading/Loading';
//import { toast } from 'react-toastify';
import auth from '../firebase.init';
//import auth from '../../firebase.init';
//import useToken from '../../hooks/useToken';
//import Loading from '../Shared/Loading';

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

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Sent email');
        }
        else {
            alert('please enter your email address');
        }
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Login our website to place an order. And if you like our design and pattern please subscribe our newsletter to get the latest update price and design.</p>
                    </div>
                    <form onSubmit={formSubmit} className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required ref={emailRef} placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" ref={passRef} required placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <button onClick={resetPassword} className="label-text-alt link link-hover">Forgot password?</button>
                                </label>
                            </div>
                            {handleError}
                            <div className="form-control mt-6">
                                <button className="btn btn-accent text-white">Login</button>
                            </div>
                            <p className='text-danger italic'>New to Ceramic Tiles? <Link to="/register" className='text-primary no-underline'>Please Register</Link> </p>
                            <div className="divider">OR</div>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-accent text-white"
                            >Continue with Google</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;