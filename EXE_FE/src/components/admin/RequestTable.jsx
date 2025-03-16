import { PropTypes } from 'prop-types';

const RequestTable = ({ requests }) => {
    return (
        <div className="container my-4">
            <div className="row g-4">
                {requests.map((req) => (
                    <div className="col-md-6 col-lg-4" key={req.id}>
                        <div
                            className=" position-relative h-100 "
                            style={{
                                backgroundColor: "#FEEFC9",
                                borderRadius: "8px",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                padding: "1.5rem",
                            }}
                        >
                            <span
                                className="badge bg-warning text-white position-absolute  "
                                style={{ top: "10px", right: "10px", height: "2.7rem", display: "flex", alignItems: "center", justifyContent: "center" }}
                            >
                                {req.badge}
                            </span>

                            <h6 className="fw-bold mt-2">{req.title}</h6>
                            <p className="mb-1">{req.sender}</p>
                            <p className="mb-1">{req.date}</p>
                            <p className="mb-1">{req.status}</p>
                            <p className="mb-3">{req.staff}</p>

                            <button className="btn btn-dark">Chi tiết</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

RequestTable.propTypes = {
    requests: PropTypes.array,
};

export default RequestTable