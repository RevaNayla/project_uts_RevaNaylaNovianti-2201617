import React from "react";

const Infor = () => {
    return (
        <div className="about__infor grid">
            <div className="about__box">
            <i class="bx bx-cake about_icon" ></i>

                <h3 className="about__title">Birthday</h3>
                <span className="about__subtitle">11 November</span>
            </div>

            <div className="about__box">
            <i class="bx bx-tv about__icon" ></i>

                <h3 className="about__title">Hobby</h3>
                <span className="about__subtitle">Menonton</span>
            </div>

            <div className="about__box">
            <i class="bx bx-user about__icon"></i>
            
                <h3 className="about__title">MBTI</h3>
                <span className="about__subtitle">INFJ-T</span>
            </div>
        </div> 
    )
}

export default Infor;