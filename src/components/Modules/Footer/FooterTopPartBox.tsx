import { footerInfos } from "../../../interfaces/footer.interface";

export default function FooterTopPartBox({ title, contents }: footerInfos) {
  return (
    <div>
      <h2 className="text-base md:text-lg lg:text-xl mb-6">{title}</h2>
      <ul className="text-gray-60 space-y-3.5 child-hover:text-red-45">
        {contents.map((content, index) => (
          <li
            className="cursor-pointer text-sm md:text-base lg:text-lg transition-all duration-300"
            key={index}
          >
            {content.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
