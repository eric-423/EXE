
import PropTypes from 'prop-types';

const ListBranch = ({ branches }) => {
    return (
        <div className="container my-4">
            <div className="row g-4">
                {branches.map((branch) => (
                    <div className="col-md-6 col-lg-4" key={branch.id}>
                        <div
                            className="listbranch position-relative p-3 h-100"
                            style={{
                                borderRadius: "8px",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            }}
                        >
                            {branch.requests > 0 && (
                                <span
                                    className="badge bg-warning text-dark position-absolute"
                                    style={{ top: "10px", right: "10px" }}
                                >
                                    {branch.requests} yêu cầu
                                </span>
                            )}

                            <h6 className="fw-bold"
                                style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}
                            >{branch.name}</h6>

                            <p className="mb-1">{branch.address}</p>

                            <div className='list-detail '>
                                <strong>
                                    Điện thoại:
                                </strong>
                                <p className="mb-1"> {branch.phone}</p>
                            </div>
                            <div className='list-detail '>
                                <strong>
                                    Quận:
                                </strong>
                                <p className="mb-1"> {branch.district}</p>
                            </div>
                            <div className='list-detail '>
                                <strong>
                                    Nhân sự:
                                </strong>
                                <p className="mb-1">{branch.staff}</p>
                            </div>
                            <div className='list-detail '>
                                <strong>
                                    Giám đốc:
                                </strong>
                                <p className="mb-1">{branch.director}</p>
                            </div>

                            <div className='list-detail '>
                                <strong>
                                    Trạng thái:
                                </strong>
                                <span >{branch.status}</span>
                            </div>

                            <button className="btn btn-dark">Chi tiết</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
};
ListBranch.propTypes = {
    branches: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            requests: PropTypes.number,
            name: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            district: PropTypes.string.isRequired,
            staff: PropTypes.string.isRequired,
            director: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ListBranch;