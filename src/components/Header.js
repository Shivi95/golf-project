import React from 'react';

function Header({name, location, quality, handicap, sgTotal}) {
    return (        
        <div className="card__header">
            <div className="card__left">
                <img className="profile__pic" src="link.jpg" alt="profile pic"/>  
            </div>
            <div className="card__right">
                <div className="card__name">{name}</div>
                <div className="card__location">{location}</div>
                {/* down sections */}
                <div className="down__section">
                    <div className="quality">Quality
                        <div className="quality__num">
                            {quality}
                        </div>
                    </div> 
                    <div className="quality__percent">
                        <svg width="28px" height="28px" className="svg__rotate">
                            <circle className="svg__circleSkeleton" cx="14" cy="14" r="12" stroke="#E6E8EB" strokeWidth="3" fill="none" />
                            <circle id="percent__number" className="svg__circle" cx="14" cy="14" r="12" stroke="#f43168" strokeWidth="3" strokeDasharray= {`${quality}, 100`} 
                            strokeDashoffset = {quality}
                            fill="none" />
                        </svg>  
                    </div>
                    <div className="stroke__line"></div>
                    <div className="handicap">Handicap
                        <div className="handicap__num">
                            {handicap}
                        </div>
                    </div>
                    <div className="stroke__line"></div>
                    <div className="sg__total">SG Total
                        <div className="sgTotal__num">
                            {sgTotal}
                        </div>
                    </div>
                </div> 
            </div>
        </div>       
    )
}

export default Header;
