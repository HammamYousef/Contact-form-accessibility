import React from "react";
import FormInput from "./FormInput";

const ContactForm = () => {
  return (
    <form className="bg-white rounded-lg p-4 flex flex-col items-start gap-6 w-full">
      <p className="text-3xl font-bold">Contact Us</p>

      <FormInput label="First Name" type="text" className="w-full" />
      <FormInput label="Last Name" type="text" className="w-full" />
      <FormInput label="Email Address" type="email" className="w-full" />

      <FormInput
        label="Query Type"
        type="radio"
        name="queryType"
        options={["General Enquiry", "Support Request"]}
        className="w-full"
      />

      <FormInput label="Message" type="text" className="w-full">
        <textarea
          required
          rows={10}
          className="border border-gray-400 rounded-lg p-3"
        ></textarea>
      </FormInput>

      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          id="consent"
          className="size-4 appearance-none border border-gray-400 rounded-sm p-2"
          required
        />
        <label htmlFor="consent">
          I consent to being contacted by the team{" "}
          <span className="text-green-600">*</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-800 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
