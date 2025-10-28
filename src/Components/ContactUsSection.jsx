import React, { useState } from "react";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";

    // ✅ Indian phone validation: allows +91, 0, or 10-digit number starting with 6-9
    const phonePattern = /^(?:\+91[\-\s]?|0)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Enter a valid Indian mobile number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.requirement.trim()) {
      newErrors.requirement = "Please describe your requirement.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", requirement: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#f8f9fb] py-16 px-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold mb-3">Contact Us</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Let's Build Your Project Together.
        </p>
      </div>

      {submitted && (
        <p className="text-green-600 text-center mb-4 font-medium">
          ✅ Thank you! We’ve received your message.
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 px-15"
      >
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#d4a373] focus:outline-none"
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1">{errors.name}</span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#c69666] focus:outline-none"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm mt-1">{errors.phone}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#c69666] focus:outline-none"
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
        </div>

        {/* Requirement */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-medium text-gray-700 mb-1">
            Describe Your Requirement
          </label>
          <textarea
            name="requirement"
            placeholder="Write your project or service requirement here..."
            rows="5"
            value={formData.requirement}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#c69666] focus:outline-none"
          />
          {errors.requirement && (
            <span className="text-red-500 text-sm mt-1">
              {errors.requirement}
            </span>
          )}
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-[#d4a373] text-white px-10 py-3 rounded-lg font-medium hover:bg-[#c69666] transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUsSection;
