import React from "react";

function Home() {
  return (
    <div className="bg-gray-100 flex flex-col items-center h-[90vh]">
      <div className="hero flex m-5 rounded-xl">
        <div className="w-2/5">
          <img
            className="rounded-xl"
            src="https://plus.unsplash.com/premium_photo-1661899405263-a0bee333068e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
          />
        </div>
        <div className="w-3/5 p-10 ">
          <h1 className="text-4xl  font-bold leading-tight mt-10 mb-6">
            Secure Your Land{" "}
            <span className="text-secondary">with Blockchain</span>
          </h1>
          <p className="text-lg text-lightText mb-8 pr-20 pl-0">
            BlockEstate brings trustless land transfers and verified ownership
            to your fingertips. Experience real estate redefined with the power
            of Web3.
          </p>
          <div className="flex gap-4">
            <button className="bg-emerald-300 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-emerald-600 cursor-pointer transition">
              Get Started
            </button>
            <button className="bg-white border border-secondary text-secondary px-6 py-3 rounded-xl text-base font-medium cursor-pointer  ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
