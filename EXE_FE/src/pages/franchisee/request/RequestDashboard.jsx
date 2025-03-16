import { useState } from "react";
import { REQUEST_DATA } from "./RequestData";
import { Button, Container, Row, Col } from "react-bootstrap";
// import { Filter, Plus } from "react-bootstrap-icons";
import RequestCard from "../../../components/franchisee/request";
import "./RequestDashboard.css";

const TAB_DATA = [
  { id: "all", label: "Tất cả" },
  { id: "discussing", label: "Đang thảo luận" },
  { id: "processing", label: "Đang thực hiện" },
  { id: "resolved", label: "Đã giải quyết" },
];

const RequestDashboard = () => {
  const [activeTab, setActiveTab] = useState("all");

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
  return (
    <div className="request-dashboard">
      <Container fluid>
        <div className="dashboard-header mb-4">
          <h1 className="dashboard-title">Branch Name - Request</h1>

          <Button variant="light" className="new-request-btn">
            <span className="me-1">Send new Request</span>
            <span className="mx-1">+</span>
            <span>Filter</span>
          </Button>
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
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default RequestDashboard;
