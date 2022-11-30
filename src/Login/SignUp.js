import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../components/Loading/Loading';

const SignUp = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const nameRef = useRef('');
    const [signInWithGoogle, gUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    //const { register, formState: { errors }, handleSubmit } = useForm();
    let handleError;
    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }
    if (error || googleError) {
        handleError = <p className='text-red-500'><small>{error?.message || googleError?.message || updateError?.message}</small></p>
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const password = passRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }


    // const onSubmit = async data => {
    //     await createUserWithEmailAndPassword(data.email, data.password);
    //     
    //     console.log('update done');
    // }
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" required ref={nameRef} placeholder="Input your Name" className="input input-bordered bg-white text-dark" />
                            </div>
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
                                <button className="btn btn-warning">SignUp</button>
                            </div>
                            <p className='text-danger italic'>Already Have an account? <Link to="/login" className='text-primary no-underline'>Please Register</Link> </p>
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
        // <div className='mb-5 mt-5 pt-5'>
        //     <div className="hero min-h-screen bg-base-200">
        //         <div className="hero-content flex-col lg:flex-row-reverse">
        //             <div className="text-center lg:text-left md:w-1/2">
        //                 <h1 className="text-5xl fw-bold">Signup now!</h1>
        //                 <p className="py-6">Please Signup to our Movie Server for watch new upcoming and trending movies free.</p>
        //             </div>
        //             <div onSubmit={handleSubmit(onSubmit)} className="w-50 m-auto">
        //                 <div className="ms-2 me-2">
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Name</span>
        //                         </label>
        //                         <input autoComplete='off'
        //                             type="text"
        //                             placeholder="Your Name"
        //                             className="form-control"
        //                             {...register("name", {
        //                                 required: {
        //                                     value: true,
        //                                     message: 'Name is Required'
        //                                 }
        //                             })}
        //                         />
        //                         <label className="label">
        //                             {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
        //                         </label>
        //                     </div>
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Email</span>
        //                         </label>
        //                         <input autoComplete='off'
        //                         type="email"
        //                         placeholder="Your Email"
        //                         className="form-control"
        //                         {...register("email", {
        //                             required: {
        //                                 value: true,
        //                                 message: 'Email is Required'
        //                             },
        //                             pattern: {
        //                                 value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        //                                 message: 'Provide a valid Email'
        //                             }
        //                         })}
        //                     />
        //                     <label className="label">
        //                         {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        //                         {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        //                     </label>
        //                     </div>
        //                     <div className="form-control">
        //                         <label className="label">
        //                             <span className="label-text">Password</span>
        //                         </label>
        //                         <input autoComplete='off'
        //                         type="password"
        //                         placeholder="Password"
        //                         className="form-control"
        //                         {...register("password", {
        //                             required: {
        //                                 value: true,
        //                                 message: 'Password is Required'
        //                             },
        //                             minLength: {
        //                                 value: 6,
        //                                 message: 'Must be 6 characters or longer'
        //                             }
        //                         })}
        //                     />
        //                     <label className="label">
        //                         {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        //                         {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        //                     </label>
                                
        //                     </div>
        //                     {handleError}
        //                     <div className="form-control mt-6">
        //                         <button className="btn btn-accent text-white">Signup</button>
        //                     </div>
        //                     <p className='text-danger italic'>Have an Account? <Link className='text-primary' to="/login">Please login</Link> </p>
        //                     <div className="divider">OR</div>
        //                     <button
        //                         onClick={() => signInWithGoogle()}
        //                         className="btn btn-accent text-white"
        //                     >Continue with Google</button>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default SignUp;