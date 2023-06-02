
import * as React from "react";
import { useForm } from "react-hook-form";
import { FormValues } from "../types";

const SendNotifications = () => {
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    setLoading(true);
    fetch("https://e64itmi59l.execute-api.eu-north-1.amazonaws.com/Message_Live/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      setLoading(false);
      alert("Message sent successfully");
    }
    ).catch((error) => {
      setLoading(false);
      console.log(error);
      alert("Message sending failed");
    }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold leading-9 text-center text-gray-900">
          Send Mukuru Notifications
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <label htmlFor="messageText" className="block text-base font-normal">
            Message Text
          </label>
          <div className="mt-1">
            <select
              id="messageText"
              defaultValue={""}
              {...register("messageType", { required: true })}
              className="block w-full text-base placeholder-gray-400 border-gray-400 rounded-lg h-11 focus:ring-blue-900 focus:outline-none sm:text-sm"
              placeholder="Enter message text"
            >
              <option value="" disabled>Select Message Type</option>
              <option value="sms">SMS</option>
              <option value="email">Email</option>
            </select>
            {errors.messageText && <p className="pt-2 text-sm text-red-800">Message body is required</p>}
          </div>
        </div>
        <div className="mb-8">
          <label htmlFor="messageText" className="block text-base font-normal">
            Message Text
          </label>
          <div className="mt-1">
            <textarea
              rows={40} cols={50}
              id="messageText"
              {...register("messageText", { required: true })}
              className="block w-full text-base placeholder-gray-400 border-gray-400 rounded-lg h-11 focus:ring-blue-900 focus:outline-none sm:text-sm"
              placeholder="Enter message text"
            />
            {errors.messageText && <p className="pt-2 text-sm text-red-800">Message body is required</p>}
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="messageTo" className="block mb-2 text-base font-normal text-black-900">
            Message To:
          </label>
          <div className="relative">
            <input
              type={"text"}
              id="messageTo"
              {...register("messageTo", { required: true })}
              className="h-11 border border-gray-400 text-black-700 text-base rounded-lg focus:ring-blue-900 focus:outline-none block w-full p-2.5 placeholder-gray-400"
              placeholder="Enter receiver's phone or email"
            />
          </div>
          {errors.messageTo && <p className="pt-2 text-sm text-red-800">Recipient details  is required</p>}
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className="relative flex items-center justify-center w-full h-12 px-4 text-sm text-lg font-medium text-white transition duration-300 ease-in bg-blue-900 border border-transparent rounded-md  group focus:outline-none">
            {loading ? (
              "Loading..."
            ) : (
              "Post Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendNotifications;