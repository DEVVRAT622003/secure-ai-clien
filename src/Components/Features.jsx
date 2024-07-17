import React from "react";

const Features = () => {
  return (
    <div className="">
      <h1 className="text-2xl text-center pt-10 font-extrabold text-gray-700"> Features </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 px-6 lg:px-20 py-10">
        <div className="p-4 border-2 border-gray-300 rounded-3xl hover:border-[#fd607f]  cursor-pointer shadow-xl">
          <p className="font-bold">Video Record:</p>
          <p>
            Records a 30-second video automatically upon detecting motion,
            providing comprehensive coverage of events in real-time.
          </p>
        </div>
        <div className="p-4 border-2 border-gray-300 rounded-3xl hover:border-[#fd607f]  cursor-pointer shadow-xl">
          <p className="font-bold">Download:</p>
          <p>
            Enables seamless downloading of recorded videos and pictures onto
            the local system for easy access and review.
          </p>
        </div>
        <div className="p-4 border-2 border-gray-300 rounded-3xl hover:border-[#fd607f]  cursor-pointer shadow-xl">
          <p className="font-bold">Alarm:</p>
          <p>
            Triggers an immediate alarm in response to detected motion, alerting
            users to potential security breaches instantly.
          </p>
        </div>
        <div className="p-4 border-2 border-gray-300 rounded-3xl hover:border-[#fd607f]  cursor-pointer shadow-xl">
          <p className="font-bold">TensorFlow Object Detection:</p>
          <p>
            Utilizes a TensorFlow-trained AI model for advanced object
            detection, enhancing security by accurately identifying and tracking
            objects.
          </p>
        </div>
        <div className="p-4 border-2 border-gray-300 rounded-3xl hover:border-[#fd607f]  cursor-pointer shadow-xl">
          <p className="font-bold">Photo Click:</p>
          <p>
            Allows users to manually capture photos, ensuring important moments
            are documented at their discretion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
