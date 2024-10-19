import React from 'react';

const mapContainerStyle = {
  width: '100%',
  height: '300px',
};

const ConnectWithUs = () => {
  return (
    <>
      <hr className="border-gray-600 mb-8" />
      <div className="text-center">
        <h2 className="text-2xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Connect With Us.{' '}
        </h2>
      </div>
      <div className="bg-black-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                  Our Location
                </span>
              </h3>
              {/* Embed Google Maps link as the map */}
              <div className="contact-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3837.3420372307833!2d80.47171507513214!3d15.891141984762838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a3fbf87bf7a23%3A0x3f1fb5edf17e0771!2sJBS%20GYM%20BAPATLA%20for%20Ladies%20%26%20gents%20fitness%20centre!5e0!3m2!1sen!2sin!4v1728816902574!5m2!1sen!2sin"
    allowFullScreen=""
    aria-hidden="false"
    title="JBS Gym Bapatla Location"
    tabIndex="0"
    loading="lazy"
    style={{ width: "100%", height: "300px", border: 0 }}
  ></iframe>
</div>



            </div>
            <div>
              <h3 className="text-xl font-semibold mt-10 mb-6">
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                  Opening Hours
                </span>
              </h3>
              <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="mb-2">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="mb-2">Sunday: Closed</p>
              <h3 className="text-xl font-semibold mb-4 mt-8">
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                  Contact Information
                </span>
              </h3>
              <p className="mb-2">Phone: 8150933624, 9398103576</p>
              <p className="mb-2">Email: support@jbsgym.com</p>
              <p className="mb-2">
                Address: Sikharamvari veedhi, Maddiboinavaripalem, Bapatla, Andhra Pradesh 522101
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectWithUs;
