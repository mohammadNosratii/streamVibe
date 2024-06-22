import Calender from "../../../assets/icons/Calender";
import Language from "../../../assets/icons/Language";

export default function MovieDetail() {
  return (
    <div>
      <div>
        <div className="flex items-center gap-1 text-gray-60">
          <Calender />
          <h3 className="text-lg">Release Date</h3>
        </div>
        <span className="text-xl">10 september 2024</span>
      </div>
      <div>
        <div className="flex items-center gap-1 text-gray-60">
          <Language />
          <h3>Available Languages</h3>
        </div>
      </div>
    </div>
  );
}
