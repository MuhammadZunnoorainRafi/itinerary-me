import Image from 'next/image';

const Breadcrumb: React.FC = () => {
  return (
    <div className="text-sm breadcrumbs mx-4 my-2">
      <ul className="font-bold flex items-center gap-1.5"> {/* Added flex to align items */}
        <span className="text-base-300 font-sans leading-3">Itinerary</span>
        <Image
          className="max-w-[7px] max-h-[8px] mt-[1.5px]"
          src="/images/s-arrow.png"
          alt="arrow"
          width={100} // Adjusted to match the class max-width
          height={100} // Adjusted to match the class max-height
        />
        <span className="text-blue font-sans leading-3">
          Boracay Summer 2024
        </span>
      </ul>
    </div>
  );
};

export default Breadcrumb;
