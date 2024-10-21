// @ts-ignore
import { Activity } from '@itineract/types/Activity';
import Image from 'next/image';
import { RxDragHandleDots2 } from 'react-icons/rx';

type ActivityItemProps = {
  activity: Activity;
  // isLast?: boolean;
  // opacity:Number
};

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  const activityPadding =
    activity.takeSpace > 1 ? `${(activity.takeSpace - 1) * 62}px` : `4px`;
  return (
    <div>
      <div
        data-testid={`activity-${activity.id}`}
        style={{ paddingBottom: activityPadding }}
        className={`flex flex-row flex-nowrap bg-light-purple relative min-w-60 p-1 rounded-lg content-center `}
      >
        <Image
          src={
            activity.photo
              ? activity.photo.url
              : 'https://placehold.co/300x200.png'
          }
          alt={activity.photo ? activity.photo.title : 'Placeholder Image'}
          width={50}
          height={38}
          className="rounded-md m-1 mr-3"
        />
        <div className="flex flex-col min-w-32 overflow-clip grow">
          <div className="font-poppins text-md font-semibold truncate">
            {activity.name}
          </div>
          <p className="overflow-clip text-md">{activity.description}</p>
        </div>
        <RxDragHandleDots2 className="self-center text-2xl font-normal justify-end ml-3" />
      </div>
    </div>
  );
};

export default ActivityItem;
