import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide mb-8">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 ">
        What People are Saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p className="mb-4">{testimonial.text}</p>
              <div className="text-center">
                <h6 className="font-bold text-lg mb-1">{testimonial.user}</h6>
                <span className="text-lrg text-orange-600 font-normal italic text-neutral-600">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
