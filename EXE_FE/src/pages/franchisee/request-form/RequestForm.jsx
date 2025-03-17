import { useState } from "react";
import { Container, Form, Button, Dropdown } from "react-bootstrap";
import { Plus } from "lucide-react";
import "./RequestForm.css";

const RequestForm = () => {
  const [title, setTitle] = useState("");
  const [requestType, setRequestType] = useState("Loại yêu cầu");
  const [content, setContent] = useState("");
  const [attachments, setAttachments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ title, requestType, content, attachments });
  };

  const handleAttachmentAdd = () => {
    // This would typically open a file picker
    console.log("Add attachment clicked");
  };

  const handleSaveDraft = () => {
    console.log("Save draft clicked");
  };

  return (
    <div className="app-container">
      <Container fluid className="request-form-container">
        <div className="form-header">
          <h2 className="branch-title">Branch Name - Request</h2>
          <Button variant="outline-secondary" className="view-draft-btn">
            Xem bản nháp
          </Button>
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Tiêu đề:</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              placeholder="Tiêu đề"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form-label">Người gửi:</Form.Label>
            <div className="sender-info">Name - Branch Name, Manager</div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form-label">Loại yêu cầu:</Form.Label>
            <Dropdown className="request-type-dropdown">
              <Dropdown.Toggle variant="light" id="dropdown-request-type">
                {requestType}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setRequestType("Thanh toán")}>
                  Thanh toán
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setRequestType("Nghỉ phép")}>
                  Nghỉ phép
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setRequestType("Tăng lương")}>
                  Tăng lương
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setRequestType("Khác")}>
                  Khác
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form-label">Nội dung:</Form.Label>
            <div className="text-editor-container">
              <div className="text-editor-toolbar">Text Editor tools</div>
              <Form.Control
                as="textarea"
                rows={8}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="text-editor-content"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form-label">Tập đính kèm:</Form.Label>
            <div className="attachments-container">
              <div className="attachment-box" onClick={handleAttachmentAdd}>
                <Plus className="attachment-icon" />
              </div>
              {attachments.map((att, index) => (
                <div key={index} className="attachment-preview">
                  {att.name}
                </div>
              ))}
            </div>
          </Form.Group>

          <div className="form-buttons">
            <Button
              variant="outline-secondary"
              className="save-draft-btn"
              onClick={handleSaveDraft}
            >
              Lưu nháp
            </Button>
            <Button variant="dark" type="submit" className="submit-btn">
              Gửi yêu cầu
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default RequestForm;
