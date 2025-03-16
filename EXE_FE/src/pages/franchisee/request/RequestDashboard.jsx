import { useState } from "react";
import { REQUEST_DATA } from "./RequestData";
import { Button, Container, Row, Col } from "react-bootstrap";
// import { Filter, Plus } from "react-bootstrap-icons";
import RequestCard from "../../../components/franchisee/request";
import "./RequestDashboard.css";
import RequestDetails from "../../../components/modal/request";
import { Link } from "react-router-dom";

const TAB_DATA = [
  { id: "all", label: "Tất cả" },
  { id: "discussing", label: "Đang thảo luận" },
  { id: "processing", label: "Đang thực hiện" },
  { id: "resolved", label: "Đã giải quyết" },
];

const RequestDashboard = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const filteredRequests =
    activeTab === "all"
      ? REQUEST_DATA
      : REQUEST_DATA.filter((request) => {
          if (activeTab === "discussing") return request.status === "pending";
          if (activeTab === "processing")
            return request.status === "processing";
          if (activeTab === "resolved")
            return (
              request.status === "completed" || request.status === "resolved"
            );
          return true;
        });

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  return (
    <div className="request-dashboard">
      <Container fluid>
        <div className="dashboard-header mb-4 d-flex justify-content-between align-items-center">
          <h2 className="dashboard-title">Yêu cầu của tôi</h2>
          <Link to="/request/new">
            <Button className="new-request-btn">+ Tạo yêu cầu mới</Button>
          </Link>
        </div>

        <div className="dashboard-tabs mb-4">
          <div className="tabs-container">
            {TAB_DATA.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${
                  activeTab === tab.id ? "tab-active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <Row className="request-grid">
          {filteredRequests.map((request) => (
            <Col md={6} key={request.id} className="mb-3">
              <RequestCard
                title={request.title}
                sender={request.sender}
                date={request.date}
                category={request.category}
                content={request.content}
                status={request.status}
                onClick={() => handleRequestClick(request)}
              />
            </Col>
          ))}
        </Row>
      </Container>

      <RequestDetails
        show={showModal}
        onHide={() => setShowModal(false)}
        requestData={selectedRequest}
      />
    </div>
  );
};

export default RequestDashboard;
