import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import codeImg1 from "../assets/code1.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl m-12 sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
      Build Your Strength with {" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text font-bold">
        JBS Gym
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="pt-4 w-full lg:w-1/2">
          <img src={codeImg} alt="Coding" className="mr-16 mt-10 rounded-md border " />
          <div className="pt-14"> <img src={codeImg1} alt="Coding" className="mr-16 mt-10 pt-33 rounded-md border " /></div>
          
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
