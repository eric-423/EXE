/* eslint-disable react/prop-types */
import { Modal, Button } from "react-bootstrap";
import "./RequestDetails.css";
import { statusMap } from "../../../config/constant";

const RequestDetails = ({ show, onHide, requestData }) => {
  if (!requestData) return null;
  const statusInfo = statusMap[requestData.status];

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="request-detail-modal"
    >
      <div className="request-modal-content">
        <div className="request-modal-header">
          <h2 className="modal-title">{requestData.title}</h2>
          <button className="close-button" onClick={onHide}>
            ×
          </button>
        </div>

        <div className="request-modal-body">
          <div className="request-info">
            <p>
              <span className="info-label">Người gửi:</span>{" "}
              {requestData.sender}
            </p>
            <p>
              <span className="info-label">Loại yêu cầu:</span>{" "}
              {requestData.category}
            </p>
            <p>
              <span className="info-label">Trạng thái:</span>{" "}
              <span className="status-text">{statusInfo.text}</span>
            </p>
          </div>

          <div className="request-content">
            <h4>Nội dung:</h4>
            <p>{requestData.content}</p>
          </div>

          <div className="attachments">
            <h4>Tệp đính kèm:</h4>
            <div className="attachments-container">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="attachment-box"></div>
              ))}
            </div>
          </div>

          <div className="recipient">
            <p>
              <span className="info-label">Người tiếp nhận:</span> Trần Văn B -
              Phòng ban Quản lý Nhượng quyền
            </p>
          </div>
        </div>

        <div className="request-modal-footer">
          <Button variant="dark" className="reply-button">
            Gửi tin nhắn cho người tiếp nhận
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default RequestDetails;
