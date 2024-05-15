import { devicesInfo } from "../../../../interfaces/devices.interface";

export default function DevicesBox({title, icon}: devicesInfo) {
  return (
    <div className="dark:bg-black-6 bg-gradient-to-tr from-red-45/0 from-60% to-red-45/10 p-12 rounded-xl space-y-7 border dark:border-black-15">
      <div className="flex items-center gap-4">
        <div className="dark:bg-black-8 p-4 rounded-xl border border-gray-85 dark:border-black-12">
          <img src={icon} alt="" />
        </div>
        <h4 className="text-2xl">{title}</h4>
      </div>
      <p className="text-lg text-gray-60">
        StreamVibe is optimized for both Android and iOS smartphones. Download
        our app from the Google Play Store or the Apple App Store
      </p>
    </div>
  );
}
