import React from "react";
import LoadingIcon from "../icons/loading";

type Props = {
  isSubmitting?: boolean;
};

const NewsletterForm = ({ isSubmitting = false }: Props) => {
  return (
    <div className="w-full h-screen flex items-center bg-gray-200">
      <div className="px-12 py-10 w-1/2 mx-auto min-h-1/2 my-auto bg-white rounded-lg shadow-md">
        <h2 className="font-bold text-3xl">Newsletter name</h2>
        <div className="text-gray-700 mt-8 mb-2">
          Subscribe to the newsletter to get updates about new contents and news.
        </div>
        <div className="flex items-center">
          <label htmlFor="email" className="flex-1">
            <input
              type="email"
              className="mt-1 block w-10/12 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              autoComplete="off"
              id="email"
              placeholder="sundar@google.com"
            />
          </label>
          <button
            className="flex items-center px-6 h-[42px] text-sm font-medium leading-5 text-white bg-blue-500 border border-transparent rounded-lg focus:outline-none"
          >
            { isSubmitting && <LoadingIcon />}
            Subscribe
          </button>
        </div>
        <div className="mt-4 text-gray-700">
          Join 00 subscribers – 00 issues
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
