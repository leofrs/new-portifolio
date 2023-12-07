// Modal.js

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    description: string;
    tags: string;
    github: string;
    webapp: string;
  };
};
const Modal = ({ isOpen, onClose, data }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#000000a7]bg-opacity-75 text-white">
      <div className="bg-[#171721] p-8 max-w-lg mx-auto rounded-md shadow-md">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            Fechar
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-5 text-3xl">
            {data.title}
          </h2>
          <p className="text-base mb-5">{data.description}</p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-5">
            Recursos uilizados
          </p>
          <p>{data.tags}</p>
          <div className="flex justify-around text-white mt-3 ">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg shadow-lg border border-[#2A0E61] p-3"
            >
              Github
            </a>
            <a
              href={data.webapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg shadow-lg border border-[#2A0E61] p-3"
            >
              Deploy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
