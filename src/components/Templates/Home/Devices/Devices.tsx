import devicesBoxInfo from "../../../../mock/devicesBoxInfo";
import DevicesBox from "./DevicesBox";

export default function Devices() {
  return (
    <div className="space-y-20">
      <div className="space-y-3">
        <h2 className="text-2xl lg:text-3xl 2xl:text-4xl">
          We Provide you streaming experience across various devices
        </h2>
        <p className="text-gray-60 text-sm lg:text-base 2xl:text-lg">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7.5">
        {devicesBoxInfo().map((device, index) => (
          <DevicesBox key={index} {...device} />
        ))}
      </div>
    </div>
  );
}
