import React, {useState} from "react";
import "./Biodata.css";

const Biodata = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
       <section className="biodata section" id="biodata">
        <h2 className="section__title">Biodata</h2>
        <span className="section__subtitle">My information</span>

        <div className="biodata__container grid">
            <div className="biodata__content">
                <div>
                    <i className="uil uil-web-grid biodata__icon"></i>
                    <h3 className="biodata__title">Pelajar <br /> / Mahasiswa</h3>
                </div>

                <span className="biodata__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right biodata__button-icon"></i></span>

                <div className={toggleState === 1 ? "biodata__modal active-modal" : "biodata__modal"}>
                    <div className="biodata__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times biodata__modal-close"></i>

                        <h3 className="biodata__modal-title">Pelajar / Mahasiswa</h3>
                        <p className="biodata__modal-description">Seorang mahasiswa semester 3 yang menempuh perkuliahan di Universitas Pendidikan Indonesia pada program studi Pendidikan Ilmu Komputer. </p>


                    </div>
                </div>
            </div>

            <div className="biodata__content">
                <div>
                    <i className="uil uil-arrow biodata__icon"></i>
                    <h3 className="biodata__title">Ketertarikan <br /> / Hobi</h3>
                </div>

                <span className="biodata__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right biodata__button-icon"></i></span>

                <div className={toggleState === 2 ? "biodata__modal active-modal" : "biodata__modal"}>
                    <div className="biodata__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times biodata__modal-close"></i>

                        <h3 className="biodata__modal-title">Ketertarikan / Hobi</h3>
                        <p className="biodata__modal-description">Saya memiliki ketertarikan dengan tulis menulis dan psikologi. </p>

                        <ul className="biodata__modal-biodata grid">
                            <li className="biodata__modal-biodata">
                                <i className="uil uil-check-circle biodata__modal-icon">Saya suka menulis jurnal ataupun cerita fiksi.</i>
                            </li>

                            <li className="biodata__modal-biodata">
                                <i className="uil uil-check-circle biodata__modal-icon">Saya suka membaca serta mengoleksi buku.</i>
                            </li>

                            <li className="biodata__modal-biodata">
                                <i className="uil uil-check-circle biodata__modal-icon">Saya suka menonton film / drama.</i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="biodata__content">
                <div>
                    <i className="uil uil-edit biodata__icon"></i>
                    <h3 className="biodata__title">Tentang <br /> saya</h3>
                </div>

                <span className="biodata__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right biodata__button-icon"></i></span>

                <div className={toggleState === 3 ? "biodata__modal active-modal" : "biodata__modal"}>
                    <div className="biodata__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times biodata__modal-close"></i>

                        <h3 className="biodata__modal-title">Tentang Saya</h3>
                        <p className="biodata__modal-description">Perkenalkan saya Reva Nayla Novianti, dengan Nim 2201617 dari kelas Pilkom 3B, biasa dipanggil Reva atau Nayla.
                        Saya lahir di Bandung pada tanggal 11 November 2004 dan sekarang saya berusia 19 tahun. Saya tinggal di Bandung tepatnya di Kp. pamoyanan no. 5. </p>

                        <ul className="biodata__modal-biodata grid">
                            <li className="biodata__modal-biodata">
                                <i className="uil uil-check-circle biodata__modal-icon">Saya Reva Nayla Novianti.</i>
                            </li>

                            <li className="biodata__modal-biodata">
                                <i className="uil uil-check-circle biodata__modal-icon">Nim 2201617 dari kelas Pilkom 3B.</i>
                            </li>

                            <li className="biodata__modal-biodata">
                                <i className="uil uil-check-circle biodata__modal-icon">Saya lahir di Bandung 11 November 2004</i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <br />
        <br />
        <br />

        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qua__container container">
            <div className="qua__tabs">
                <div className="qua__button qua__active button--flex">
                    <i className="uil uil-graduation-cap qua__icon">Education</i>
                </div>
            </div>

            <div className="qua__sections">
                <div className="qua__content qua__content-active">

                    <div className="qua__data">
 
                        <div>
                            <h3 className="qua__title">SMPN 1 Katapang</h3>
                            <span className="qua__subtitle"></span>
                            <div className="qua__calender">
                                <i className="uil uil-calender-alt"></i> 2016 - 2019
                            </div>
                        </div>

                        <div>
                            <span className="qua__rounder"></span>
                            <span className="qua__line"></span>
                        </div>
                    </div>

                    <div className="qua__data">
                        <div></div>

                        <div>
                            <span className="qua__rounder"></span>
                            <span className="qua__line"></span>
                        </div>

                        <div>
                            <h3 className="qua__title">SMK 1 Katapang</h3>
                            <span className="qua__subtitle">RPL</span>
                            <div className="qua__calender">
                                <i className="uil uil-calender-alt"></i> 2019 - 2022
                            </div>
                        </div>
                    </div>

                    <div className="qua__data">

                        <div>
                            <h3 className="qua__title">UPI</h3>
                            <span className="qua__subtitle">Pendidikan Ilmu Komputer</span>
                            <div className="qua__calender">
                                <i className="uil uil-calender-alt"></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qua__rounder"></span>
                            <span className="qua__line"></span>
                        </div>
                    </div>
                    <br/>
                    <br/>

                    


                </div>
            </div>

        </div>

       </section>

    )
}

export default Biodata;