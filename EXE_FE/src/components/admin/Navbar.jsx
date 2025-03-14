import { Form, FormControl, Button, Nav } from "react-bootstrap";
import { Search, Bell, ChatLeft, Gear, Person } from "react-bootstrap-icons";

const Navbar = () => {
  return (
    <Nav className="nav-admin d-flex align-items-center p-3" style={{ backgroundColor: "#f5ede3" }}>
      {/* Ô tìm kiếm */}
      <Form className=" formsearch">
        <div className="input-group rounded-pill border border-dark p-1">
          <FormControl
            type="search"
            placeholder="Tìm kiếm tác vụ..."
            className="border-0 bg-transparent"
          />
          <Button variant="light" className="border-0" style={{ backgroundColor: "transparent" }}>
            <Search size={20} />
          </Button>
        </div>
      </Form>

      {/* Các icon */}
      <div className="d-flex gap-3 ms-3">
        <Button variant="light" className="border-0 rounded-circle " style={{ backgroundColor: "transparent" }}>
          <Bell size={20} />
        </Button>
        <Button variant="light" className="border-0 rounded-circle" style={{ backgroundColor: "transparent" }}>
          <ChatLeft size={20} />
        </Button>
        <Button variant="light" className="border-0 rounded-circle" style={{ backgroundColor: "transparent" }}>
          <Gear size={20} />
        </Button>
        <Button variant="light" className="border-0 rounded-circle" style={{ backgroundColor: "transparent" }}>
          <Person size={20} />
        </Button>
      </div>
    </Nav>
  );
};

export default Navbar;
