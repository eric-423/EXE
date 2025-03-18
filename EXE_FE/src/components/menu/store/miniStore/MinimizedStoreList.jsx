import MinimizedStore from "./MinimizedStore";
import styles from "../Store.module.css";
import bannerImage from "/images/bg1.png";
import { PropTypes } from 'prop-types';

const MinimizedStoreList = ({ branchId, branches, handleBranchId }) => {
  if (!Array.isArray(branches)) {
    return null;
  }
  return (
    <div className={`${styles.listContainer}`}>
      {branches.map((branch) => (
        < MinimizedStore
          key={branch.id}
          image={bannerImage}
          store={{
            id: branch.id,
            name: branch.name,
            address: branch.address,
            phone: branch.phone
          }}
          handleBranchId={handleBranchId}
          branchId={branchId}
        />
      ))}
    </div>
  );
};

MinimizedStoreList.propTypes = {
  branches: PropTypes.array.isRequired,
  handleBranchId: PropTypes.func.isRequired,
  branchId: PropTypes.number.isRequired,
};

export default MinimizedStoreList;
