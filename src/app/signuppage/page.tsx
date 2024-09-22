"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from 'next/link';
import Head from 'next/head';
import { Eye, EyeOff } from 'lucide-react';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

const SignUpPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data:any) => {
    console.log(data);
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <>
      <Head>
        <title>Sign Up - RutubaFarm</title>
        <meta name="description" content="Sign up for RutubaFarm" />
      </Head>
      <div className="flex min-h-screen">
        <div className="w-1/2 bg-[#e0b16c] flex flex-col items-center justify-center p-12">
          <div className="mb-8">
            <img
              src="/images/Rutubalogo-removebg-preview.png"
              alt="Rutuba Logo"
              width={300}
              height={300}
            />
          </div>
          <h1 className="text-6xl font-bold text-[#016a2f]">Welcome</h1>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center p-12 bg-white">
          <h2 className="text-4xl font-bold mb-8 text-[#016a2f] font-nunito">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
            <input
              {...register('firstName')}
              placeholder="First Name"
              className="w-full p-3 mb-4 border border-black-300 rounded-lg"
            />
            {errors.firstName && <p className="text-red-500 mb-2 font-bold text-lg mb-8 ">{errors.firstName.message}</p>}
            
            <input
              {...register('lastName')}
              placeholder="Last Name"
              className="w-full p-3 mb-8 border border-black-500 rounded-lg"
            />
            {errors.lastName && <p className="text-red-500 mb-2 mb-2">{errors.lastName.message}</p>}
            
            <input
              {...register('email')}
              placeholder="Email"
              className="w-full p-3 mb-8 border border-black-600 rounded-lg font-bold"
            />
            {errors.email && <p className="text-red-500 mb-2 mb-2">{errors.email.message}</p>}
            
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                {...register('password')}
                placeholder="Password"
                className="w-full p-3 border border-black-300 rounded-lg pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-red-500 mb-2" /> : <Eye className="h-5 w-5 text-gray-500" />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 mb-2">{errors.password.message}</p>}
            
            <div className="relative mb-6">
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register('confirmPassword')}
                placeholder="Confirm Password"
                className="w-full p-3 border border-black-300 rounded-lg pr-10"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5 text-black-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 mb-2">{errors.confirmPassword.message}</p>}
            
            <button
              type="submit"
              className="w-full p-3 bg-[#f4c378] text-black font-semibold rounded-lg hover:bg-[#e0b16c] transition-colors"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-black-800 font-nunito">
            Already have an account?{' '}
            <Link href="/login" className="text-[#016a2f] font-semibold font-nunito">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
   
//     console.log(formData);
//   };

//   return (
//     <>
//       <Head>
//         <title>Sign Up - RutubaFarm</title>
//         <meta name="description" content="Sign up for RutubaFarm" />
//       </Head>
//       <div className="flex min-h-screen bg-white">
       
//         <div className="w-1/2 bg-amber-200 flex flex-col items-center justify-center p-12 ">
//           <div className="mb-8">
//           <img 
//         src="/images/Rutubalogo-removebg-preview.png" 
//         className="m-4" 
//         width={300} 
//         alt="Rutuba Logo" 
//       />
            

//           </div>
//           <h1 className="text-6xl font-bold text-green-700">Welcome</h1>
//         </div>

       
//         <div className="w-1/2 flex flex-col items-center justify-center p-12">
//           <h2 className="text-4xl font-bold mb-8 text-green-700">Sign Up</h2>
//           <form onSubmit={handleSubmit} className="w-full max-w-md">
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               placeholder="First Name"
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               placeholder="Last Name"
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Password"
//               className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
//               required
//             />
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm Password"
//               className="w-full p-3 mb-6 border border-gray-300 rounded-lg"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full p-3 bg-amber-300 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors"
//             >
//               Sign Up
//             </button>
//           </form>
//           <p className="mt-6 text-gray-600">
//             Already have an account?{' '}
//             <Link href="/login" className="text-green-700 font-semibold">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUpPage;