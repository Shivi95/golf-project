import React from 'react'
import '../styles/progress.css'

function ProgressLoading() {
    return (
        <div>
            <div className="skeleton__container">
                <div className="header__area">
                    <div className="avatar"></div>
                    <div className="name"></div>
                    <div className="location"></div>
                    <div className="city"></div>
                </div>
                <div className="graph__area"></div>
                <div className="activity__area"></div>
                <div className="footer__area"></div>
            </div>
            {/* will change this later accordingly*/}
            <div className="skeleton__container">
            <div className="header__area">
                <div className="avatar"></div>
                <div className="name"></div>
                <div className="location"></div>
                <div className="city"></div>
            </div>
            <div className="graph__area"></div>
            <div className="activity__area"></div>
            <div className="footer__area"></div>
            </div>
        </div>
    )
}

export default ProgressLoading
