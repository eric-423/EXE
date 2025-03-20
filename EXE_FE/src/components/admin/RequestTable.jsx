import { PropTypes } from 'prop-types';
import PrintIcon from '@mui/icons-material/Print';
const fakeUrl = "https://storage.googleapis.com/download/storage/v1/b/four-gems.appspot.com/o/11-Thu%20Mar%2020%2016:03:54%20ICT%202025.pdf?generation=1742461437063307&alt=media"

import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';


const RequestTable = ({ requests }) => {

    const handlePrintPDF = async (pdfUrl) => {
        const fakeUrl = "https://storage.googleapis.com/download/storage/v1/b/four-gems.appspot.com/o/11-Thu%20Mar%2020%2016:03:54%20ICT%202025.pdf?generation=1742461437063307&alt=media"
        try {
            const response = await fetch(fakeUrl);
            const blob = await response.blob();
            const pdfObjectUrl = URL.createObjectURL(blob);

            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const windowWidth = 900;
            const windowHeight = 600;
            const left = (screenWidth - windowWidth) / 2;
            const top = (screenHeight - windowHeight) / 2;
            const printWindow = window.open(pdfObjectUrl, '_blank', `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`);

            if (printWindow) {
                printWindow.addEventListener('load', function () {
                    try {
                        printWindow.focus();
                        printWindow.print();
                    } catch (err) {
                        console.error("Lỗi khi in:", err);
                        printWindow.close();
                    }
                });
            }
        } catch (error) {
            console.error("Lỗi khi tải PDF:", error);
        }
    };


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

                            <button className='position-absolute top-0 end-0 border-0 bg-transparent' onClick={handlePrintPDF}>
                                <PrintIcon style={{ width: "2rem", height: "2rem" }} />
                            </button>

                            <div
                                style={{
                                    display: 'none',
                                }}
                                ref={req.url}
                            >
                                {req.url}
                            </div>


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