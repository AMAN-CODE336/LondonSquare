export default function ContactSection() {
  return (
   <section id="Contactsection" className="w-full  px-6 py-12 md:mt-18 bg-white md:flex md:items-start md:justify-between gap-12">
      {/* Left Side - Location Info */}
      <div className="md:w-1/2 w-full md:px-8 space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Visit Our Office</h2>
        <p className="text-gray-600">
We’re more than happy to connect with you! Whether you have a question, a project idea, or just want to say hello — our doors are always open. <br/> 
Feel free to drop by our office and meet us in person. Prefer writing to us? Simply fill out the form alongside and share your query.<br/> 
One of our team members will get back to you promptly. Let's start the conversation!        </p>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.879844723186!2d76.70805697557442!3d30.58093717465788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe9489f3bf8ef%3A0x5668ce646a11aae7!2sMDB%20LONDON%20SQUARE!5e0!3m2!1sen!2sin!4v1749109809989!5m2!1sen!2sin" 
          className="w-full h-64 mt-12 rounded-md border border-gray-200"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Right Side - Enquiry Form */}
      <form className="md:w-1/2 w-full mt-10 md:mt-0 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-5">Got Questions? We've Got Answers</h3>

        {[
          { label: "Full Name", id: "name", type: "text" },
          { label: "Email Address", id: "email", type: "email" },
          { label: "Phone Number", id: "phone", type: "tel" },
          { label: "City", id: "city", type: "text" },
        ].map(({ label, id, type }) => (
          <div key={id} className="relative">
            <input
              id={id}
              type={type}
              placeholder=" "
              required
                autoComplete="off"
              className="peer block px-4 w-full border-b-2 border-gray-300 bg-transparent py-5 px-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#c26265]"
            />
            <label
              htmlFor={id}
className="absolute px-2 mt-1 left-0 top-[-5]  text-sm transition-all 
  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
  peer-focus:top-[-5] peer-focus:text-sm peer-focus:text-[#c26265]"
            >
              {label}
            </label>
          </div>
        ))}

        {/* Message Field */}
        <div className="relative">
          <textarea
            id="message"
            placeholder=" "
            rows="4"
            required
              className="peer block px-4 w-full border-b-2 border-gray-300 bg-transparent py-5 px-0 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#c26265]"
          ></textarea>
          <label
            htmlFor="message"
className="absolute px-2 mt-1 left-0 top-[-5]  text-sm transition-all 
  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
  peer-focus:top-[-5] peer-focus:text-sm peer-focus:text-[#c26265]"          >
           Tell us what’s on your mind...
          </label>
        </div>

        <button
          type="submit"
          className="inline-block mt-4 bg-[#c26265] text-white font-semibold px-6 py-3 rounded-full  transition duration-300"
        >
          Submit Enquiry
        </button>
      </form>
    </section>
  );
}
