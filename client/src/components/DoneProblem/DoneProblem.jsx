import React from 'react';
import "./doneProblem.css"

const DoneProblem = () => {
    return (
        <div className="doneProblem">
            <div className="headProblem">
                <h2 className="nameProblem">Ямы на дорогах</h2>
                <div className='mark'></div>
                <span>Решена</span>
            </div>
            <span>Дата заявки: 24.04.2023</span>
            <span>Категория: дороги</span>
            <img src="img/road.png" alt="фото проблемы" />
        </div>
    );
};

export default DoneProblem;