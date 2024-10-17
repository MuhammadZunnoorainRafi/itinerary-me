import Modal from 'react-modal';
import { RiCloseFill } from 'react-icons/ri';
import Image from 'next/image';

// Define the ModalPopUpProps interface
interface ModalPopUpProps {
  isOpen: boolean;
  onRequestCloseOrOpen: () => void;
  modalContainer?: string;
  mode: 'edit' | 'create';
  content?: React.ReactNode; // Accept a component as 'content'
}

const ModalBox: React.FC<ModalPopUpProps> = ({
  isOpen,
  onRequestCloseOrOpen,
  content,
  modalContainer,
  mode
}) => {
  const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  };

  return (
    <Modal
      style={modalStyle}
      className={`px-3 sm:px-0 max-w-[450px] mx-auto outline-none z-50 relative ${modalContainer}`}
      isOpen={isOpen}
      onRequestClose={onRequestCloseOrOpen}
      ariaHideApp={false}
    >
      <div className="p-2.5 mt-[15vh] relative bg-white rounded-[7px] pt-5 pb-6">
        {content}

        {mode === 'create' ? (
          <div className="absolute top-0 right-0 p-2.5">
            <RiCloseFill
              className="cursor-pointer text-dark-blue"
              size={30}
              onClick={onRequestCloseOrOpen}
            />
          </div>
        ) : (
          <div className="absolute -top-2 -right-2.5 p-2.5">
            <Image
              src="/images/delete-icon.png"
              alt="delete icon"
              width={60}
              height={60}
              className="rounded-md m-1 mr-3 cursor-pointer"
              onClick={onRequestCloseOrOpen}
            />
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalBox;
