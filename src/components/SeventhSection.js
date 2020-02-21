import React from 'react';
import './styles.css';
import Img from '../images/letter.png'
import IconP1 from '../images/icon-p-01.png'
import IconP2 from '../images/icon-p-02.png'
import IconP3 from '../images/icon-p-03.png'
import IconP4 from '../images/icon-p-04.png'
import IconP5 from '../images/icon-p-05.png'
import IconP6 from '../images/icon-p-06.png'
import IconP7 from '../images/icon-p-07.png'
import IconP8 from '../images/icon-p-08.png'
import IconS1 from '../images/icon-s-01.svg'
import IconS2 from '../images/icon-s-02.svg'
import IconS3 from '../images/icon-s-03.svg'
import IconS4 from '../images/icon-s-04.svg'
import IconS5 from '../images/icon-s-05.svg'

function SeventhSection(){
    return(
            <div className="Container-Seventh">
                    <div className="SeventhSection">
                        <div className="Img-sSeventh">
                            <h6> TIPOGRAFÍA // SF UI DISPLAY</h6>
                            <img src={Img} />
                        </div>
                    <div className="Icons-Seventh">
                            <h6> ICONOGRAFÍA PRINCIPAL</h6>
                        <div className="Icon-Seventh">
                                <div className="ImgIcon-Seventh"><img src={IconP1}/></div>
                                <div className="ImgIcon-Seventh"><img src={IconP2}/></div>
                                <div className="ImgIcon-Seventh"><img src={IconP3}/></div>
                                <div className="ImgIcon-Seventh"><img src={IconP4}/></div>
                                <div className="ImgIcon-Seventh"><img src={IconP5}/></div>
                                <div className="ImgIcon-Seventh"><img src={IconP6}/></div>
                                <div className="ImgIcon-Seventh"><img src={IconP7}/></div>
                                <div className="ImgIcon-Seventh"><img src={IconP8}/></div>

                        </div>
                        <h6> ICONOGRAFÍA SECUNDARIA</h6>
                        <div className="IconSecunday-Seventh">
                                <div className="ImgIconSecundary-Seventh"><img src={IconS1}/></div>
                                <div className="ImgIconSecundary-Seventh"><img src={IconS2}/></div>
                                <div className="ImgIconSecundary-Seventh"><img src={IconS3}/></div>
                                <div className="ImgIconSecundary-Seventh"><img src={IconS4}/></div>
                                <div className="ImgIconSecundary-Seventh"><img src={IconS5}/></div>

                        </div>

                    </div>

                    </div>

            </div>
    )
};

export default SeventhSection;