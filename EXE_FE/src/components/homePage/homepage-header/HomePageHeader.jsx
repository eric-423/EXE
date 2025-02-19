import { useState } from "react";
import "./HomePageHeader.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const HomePageHeader = () => {
    const [location, setLocation] = useState("Chọn cửa hàng");
    const [address, setAddress] = useState("");

    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
    }
    const handleChangeAdress = (event) => {
        setAddress(event.target.value);
    }

    return <div className="homepage-header" >
        <div className="overlay"></div>
        <section className="pt-5 pb-5 homepage-search-block position-relative">
            <div className="container">
                <div className="row d-flex align-items-center py-lg-4 mt-5" >
                    <div className="col-lg-8 mx-auto">
                        <div className="homepage-search-title text-center">

                            <h1 className="mb-2 display-4 text-shadow font-weight-normal">
                                <span className="font-weight-bold " style={{ color: "white" }}>
                                    Cơm Tấm Tắc <br /> Tấm Ngon, Tắc Nhớ
                                </span>
                            </h1>

                            <h5 className="mb-5 mt-3 font-weight-normal smallTitle">
                                Thương hiệu cơm tấm hàng đầu dành cho sinh viên
                            </h5>

                        </div>

                        <div className="homepage-search-form">
                            <form className="form-noborder">
                                <div className="form-row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 form-group">
                                        <div className="location-dropdown">
                                            <i className="icofont-location-arrow" />
                                            <select value={location} onChange={handleChangeLocation} className="custom-select form-control-lg text-center ">
                                                <option> Chọn cửa hàng </option>
                                                <option> Kha Vạn Cân </option>
                                                <option> Võ Văn Ngân </option>
                                                <option> NVH sinh viên </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-12 form-group ">
                                        <input type="text" value={address} onChange={handleChangeAdress} placeholder="Địa chỉ giao hàng" className="form-control form-control-lg" />
                                        <a className="locate-me" href="#"><i className="icofont-ui-pointer" /> Vị trí hiện tại</a>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-12 form-group text-center">
                                        <a href=" ..." className="btn btn-primary btn-block btn-lg btn-gradient">Xác nhận</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    </div >;
};

export default HomePageHeader;