/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import "./RequestCard.css";
import { statusMap } from "../../../config/constant";

const RequestCard = ({
  title,
  sender,
  date,
  category,
  content,
  status,
  onClick,
}) => {
  const statusInfo = statusMap[status];

  return (
    <div className="request-card">
      <div className="request-title mb-2">
        <h3>{title}</h3>
      </div>

      <div className="request-meta mb-2">
        <div className="request-sender">
          <span className="label">Người gửi:</span> {sender}
        </div>
      </div>

      <div className="request-info mb-2">
        <div className="request-date">
          <span className="label">Ngày gửi:</span> {date}
        </div>
        <div className="request-category">
          <span className="label">Loại:</span> {category}
        </div>
      </div>

      <div className="request-content mb-3">
        <div className="content-label mb-1">Nội dung:</div>
        <p className="content-text line-clamp-3">{content}</p>
      </div>

      <div className="request-footer">
        <span className={`status-badge ${statusInfo.className}`}>
          {statusInfo.text}
        </span>

        <Button
          variant="dark"
          size="sm"
          className="detail-button"
          onClick={() => onClick && onClick()}
        >
          Chi tiết
        </Button>
      </div>
    </div>
  );
};

export default RequestCard;
