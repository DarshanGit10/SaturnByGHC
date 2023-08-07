import React from "react";
import "./WellnessFrame.css";
import img1 from "../../Assets/WellnessFrame/healthicons_weight.png";
import img2 from "../../Assets/WellnessFrame/icon-park-solid_sleep-two.png";
import img3 from "../../Assets/WellnessFrame/ic_baseline-water-drop.png";
import img4 from "../../Assets/WellnessFrame/Vector.png";
import img5 from "../../Assets/WellnessFrame/gallery.png";

const WellnessFrame = () => {
    return (
        <>
            <div className="threeContainer">
                <div className="wellnessContainer">
                    <div className="overview">
                        <div className="overView2">
                            <div className="overviewLeft">
                                <p className="wellness">Wellness Overview:</p>
                                <p className="wellnessNumber">
                                    40
                                </p>
                                <span className="overweight">Overweight</span>
                                <p className="bmi">Your current BMI</p>
                            </div>

                            <div className="overviewRight">
                                <div className="groupOverview">
                                    <img alt="" src={img1} />
                                    <span className="glasses">80.5 kgs</span>
                                </div>
                                <div className="groupOverview">
                                    <img alt="" src={img2} />
                                    <span className="glasses">7/8 Hours</span>
                                </div>
                                <div className="groupOverview">
                                    <img alt="" src={img3} />
                                    <span className="glasses">4/8 Glasses</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="twoContainer">
                    <div className="scoreContainerOne">
                        <p className="titleScore">
                            Overall Skin score:
                        </p>
                        <p className="scoreNumber">45</p>
                        <div className="scoreImg">
                            <div><img src={img4} className="img1Score" alt="Fire" /> <span>5 weeks</span></div>
                            <div><img src={img5} className="img2Score" alt="Fire" /> <span>20 uploads</span></div>
                        </div>
                        <div className="scoreBar"></div>
                        <p className="weekScore">Week: <span className="weekScoreNumber">40/54</span></p>
                    </div>

                    <div className="scoreContainerTwo">
                        <p className="titleScore">Hair Tracker:</p>
                        <div className="scoreImgTwo">
                            <div><img src={img4} alt="Fire" /> <span>5 weeks</span></div>
                            <div><img src={img5} alt="Fire" /> <span>20 uploads</span></div>
                        </div>
                        <div className="scoreBar"></div>
                        <p className="weekScore">Week: <span className="weekScoreNumber">40/54</span></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WellnessFrame;
