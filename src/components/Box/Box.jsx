import { FaQuoteLeft, FaQuoteRight, FaPenNib } from "react-icons/fa";

const Box = () => {
  return (
    <div className="bg-[#0A0D18] min-h-[60vh] flex items-center justify-center px-4">
      <div className="relative border border-gray-600 rounded-lg p-6 text-white font-semibold bg-[#0d1117]">
        {/* Top Left Quote Icon */}
        <FaQuoteLeft className="text-gray-500 absolute -top-4 -left-4 text-2xl" />

        {/* Quote Text */}
        <p className="text-lg flex items-center gap-2">
          💘 {" "}
          <span className="text-white">
           If you feel pain, you're alive. If you feel other people'e pain, you're a human being Sakib Hossain
          </span>{" "}
          😊
        </p>

        {/* Author Block */}
        <div className="absolute -bottom-4 right-6 bg-[#0d1117] px-3 py-1 border border-gray-600 rounded-md flex items-center gap-2">
          <FaPenNib className="text-yellow-300" />
          <span className="text-gray-300">Sakib Hossain</span>
        </div>

        {/* Bottom Right Quote Icon */}
        <FaQuoteRight className="text-gray-500 absolute -bottom-4 -right-4 text-2xl" />
      </div>
    </div>
  );
};

export default Box;
