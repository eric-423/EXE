import MinimizedStore from "./MinimizedStore";
import styles from "../Store.module.css";

import bannerImage from "../../../../assets/images/Home - Banner.jpg";

const MinimizedStoreList = () => {
  return (
    <div className={`${styles.listContainer}`}>
      <MinimizedStore
        image={bannerImage}
        store={{
          name: "Tấm Tắc Làng Đại học",
          address:
            "Nhà văn hóa sinh viên, Khu đô thị Đại học Quốc gia TP. Hồ Chí Minh",
        }}
      />
      <MinimizedStore
        image={bannerImage}
        store={{
          name: "Tấm Tắc Làng Đại học",
          address:
            "Nhà văn hóa sinh viên, Khu đô thị Đại học Quốc gia TP. Hồ Chí Minh",
        }}
      />
      <MinimizedStore
        image={bannerImage}
        store={{
          name: "Tấm Tắc Làng Đại học",
          address:
            "Nhà văn hóa sinh viên, Khu đô thị Đại học Quốc gia TP. Hồ Chí Minh",
        }}
      />
      <MinimizedStore
        image={bannerImage}
        store={{
          name: "Tấm Tắc Làng Đại học",
          address:
            "Nhà văn hóa sinh viên, Khu đô thị Đại học Quốc gia TP. Hồ Chí Minh",
        }}
      />
      <MinimizedStore
        image={bannerImage}
        store={{
          name: "Tấm Tắc Làng Đại học",
          address:
            "Nhà văn hóa sinh viên, Khu đô thị Đại học Quốc gia TP. Hồ Chí Minh",
        }}
      />
    </div>
  );
};

export default MinimizedStoreList;
