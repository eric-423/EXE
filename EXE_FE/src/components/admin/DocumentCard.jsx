import { Edit } from 'lucide-react';
import propTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const DocumentCard = ({ contracts }) => {
    return (
        <Row className=" mt-5 justify-content-start row-doc ">
            {contracts.map((contract) => (
                <Col className="document-card" md={3} key={contract.id}>
                    <div className="document-preview">
                        Use canvas/image preview
                        <br />
                        OnClick - Open full document
                    </div>
                    <div className="document-info">
                        <div className="document-title">{contract.title}</div>
                        <div className="document-type">{contract.type}</div>
                        <div className="document-description">{contract.description}</div>
                    </div>
                    <div className="edit-icon">
                        <Edit size={16} />
                    </div>
                </Col>
            ))}
        </Row>
    );
};

DocumentCard.propTypes = {
    contracts: propTypes.object.isRequired,
};


export default DocumentCard;