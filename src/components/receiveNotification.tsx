
import * as React from "react";
import { useForm } from "react-hook-form";
import { FormValues } from "../types";

const ReceiveNotifications = () => {
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-8">
        <label htmlFor="email" className="block text-base font-normal">
          Email address
        </label>
        <div className="mt-1">
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="block w-full text-base placeholder-gray-400 border-gray-400 rounded-lg h-11 focus:ring-blue-900 focus:outline-none sm:text-sm"
            placeholder="Enter email address"
          />
          {errors.email && <p className="pt-2 text-sm text-red-800">Email is required</p>}
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="block mb-2 text-base font-normal text-black-900">
          Password
        </label>
        <div className="relative">
          <input
            type={"text"}
            id="password"
            {...register("password", { required: true })}
            className="h-11 border border-gray-400 text-black-700 text-base rounded-lg focus:ring-blue-900 focus:outline-none block w-full p-2.5 placeholder-gray-400"
            placeholder="Enter password"
          />
        </div>
        {errors.password && <p className="pt-2 text-sm text-red-800">Password is required</p>}
      </div>
      <div>
        <button
          type="submit"
          disabled={loading}
          className=" transition ease-in duration-300 group relative w-full flex justify-center items-center px-4 border h-12 border-transparent text-sm text-lg font-medium rounded-md text-white bg-blue-900 focus:outline-none">
          {loading ? (
           "Loading..."
          ) : (
            "Login"
          )}
        </button>
      </div>
    </form>
  );
}

export default ReceiveNotifications;