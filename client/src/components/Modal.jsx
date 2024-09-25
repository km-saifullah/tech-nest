import Link from "next/link";

const EmailConfirmationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Email Confirmation</h2>
        <p>
          We have sent a confirmation mail to your email. Please verify your
          email address.
        </p>
        <div className="flex items-center justify-center gap-x-3 mt-3">
          <div className="flex items-center">
            <Link href={"/"} className="border px-2 py-1">
              <button>Go to Home</button>
            </Link>
          </div>
          <button
            onClick={onClose}
            className="modal-close bg-secondary px-2 py-1 rounded"
          >
            Close
          </button>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
        }
        .modal-close {
          background: red;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default EmailConfirmationModal;
