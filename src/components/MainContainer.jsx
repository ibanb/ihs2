// import { Link } from 'react-router-dom';
import { faChevronLeft, faChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import UserInfo from "./UserInfo";

import img_1 from "../assets/images/1.webp";
import img_2 from "../assets/images/2.webp";
import img_3 from "../assets/images/3.webp";
import img_4 from "../assets/images/4.webp";
import img_5 from "../assets/images/5.webp";
import img_6 from "../assets/images/6.webp";
import img_7 from "../assets/images/7.webp";

import "../styles/MainContainer.css";


export default function MainContainer() {
    const userInfoList = [
        {id: 1, name: "ГудЛандия Лыткарино", img: img_1, data: [
            {date:"19.09.2022", link:"#"},
            {date:"20.09.2022", link:"#"},
            {date:"21.09.2022", link:"#"},
            {date:"22.09.2022", link:"#"},
            {date:"23.09.2022", link:"#"},
            {date:"24.09.2022", link:"#"},
            {date:"25.09.2022", link:"#"},
            {date:"26.09.2022", link:"#"},
            {date:"27.09.2022", link:"#"},
            {date:"28.09.2022", link:"#"},
            {date:"29.09.2022", link:"#"},
            {date:"01.10.2022", link:"https://ftkl.ru/9268/712549"},
            {date:"02.10.2022", link:"https://ftkl.ru/9268/097581"},
            {date:"03.10.2022", link:"https://ftkl.ru/9268/437086"},
            {date:"04.10.2022", link:"https://ftkl.ru/9268/460139"},
            {date:"05.10.2022", link:"https://ftkl.ru/9268/245089"},
            {date:"06.10.2022", link:"https://ftkl.ru/9268/623479"},
            {date:"07.10.2022", link:"https://ftkl.ru/9268/387290"},
            {date:"08.10.2022", link:"https://ftkl.ru/9268/401387"},
            {date:"09.10.2022", link:"https://ftkl.ru/9268/941762"},
            {date:"10.10.2022", link:"https://ftkl.ru/9268/964018"},
            {date:"11.10.2022", link:"https://ftkl.ru/9268/072643"},
            {date:"12.10.2022", link:"https://ftkl.ru/9268/498570"},
            {date:"13.10.2022", link:"https://ftkl.ru/9268/741830"},
            {date:"14.10.2022", link:"https://ftkl.ru/9268/471508"},
        ]},
        {id: 2, name: "ГудЛандия Серпухов", img: img_2, data: [
            {date:"19.09.2022", link:"#"},
            {date:"20.09.2022", link:"#"},
            {date:"21.09.2022", link:"#"},
            {date:"22.09.2022", link:"#"},
            {date:"23.09.2022", link:"#"},
            {date:"24.09.2022", link:"#"},
            {date:"25.09.2022", link:"#"},
            {date:"26.09.2022", link:"#"},
            {date:"27.09.2022", link:"#"},
            {date:"28.09.2022", link:"#"},
            {date:"29.09.2022", link:"#"},
            {date:"01.10.2022", link:"#"},
            {date:"02.10.2022", link:"#"},
            {date:"03.10.2022", link:"#"},
            {date:"04.10.2022", link:"#"},
            {date:"05.10.2022", link:"#"},
            {date:"06.10.2022", link:"#"},
            {date:"07.10.2022", link:"#"},
            {date:"08.10.2022", link:"#"},
            {date:"09.10.2022", link:"#"},
            {date:"10.10.2022", link:"#"},
            {date:"11.10.2022", link:"#"},
            {date:"12.10.2022", link:"#"},
            {date:"13.10.2022", link:"#"},
            {date:"14.10.2022", link:"#"},
        ]},
        {id: 3, name: "ГудЛандия Жуковский", img: img_3, data: [
            {date:"19.09.2022", link:"https://ftkl.ru/9268/923165"},
            {date:"20.09.2022", link:"https://ftkl.ru/9268/862315"},
            {date:"21.09.2022", link:"https://ftkl.ru/9268/106894"},
            {date:"22.09.2022", link:"https://ftkl.ru/9268/403519"},
            {date:"23.09.2022", link:"https://ftkl.ru/9268/902136"},
            {date:"24.09.2022", link:"https://ftkl.ru/9268/840731"},
            {date:"25.09.2022", link:"https://ftkl.ru/9268/702861"},
            {date:"26.09.2022", link:"https://ftkl.ru/9268/649271"},
            {date:"27.09.2022", link:"https://ftkl.ru/9268/253068"},
            {date:"28.09.2022", link:"https://ftkl.ru/9268/126759"},
            {date:"29.09.2022", link:"https://ftkl.ru/9268/479625"},
            {date:"01.10.2022", link:"https://ftkl.ru/9268/354096"},
            {date:"02.10.2022", link:"https://ftkl.ru/9268/928715"},
            {date:"03.10.2022", link:"https://ftkl.ru/9268/658304"},
            {date:"04.10.2022", link:"https://ftkl.ru/9268/412859"},
            {date:"05.10.2022", link:"https://ftkl.ru/9268/917305"},
            {date:"06.10.2022", link:"https://ftkl.ru/9268/480615"},
            {date:"07.10.2022", link:"https://ftkl.ru/9268/721536"},
            {date:"08.10.2022", link:"https://ftkl.ru/9268/718023"},
            {date:"09.10.2022", link:"https://ftkl.ru/9268/401826"},
            {date:"10.10.2022", link:"https://ftkl.ru/9268/784350"},
            {date:"11.10.2022", link:"https://ftkl.ru/9268/025417"},
            {date:"12.10.2022", link:"https://ftkl.ru/9268/658394"},
            {date:"13.10.2022", link:"https://ftkl.ru/9268/301695"},
            {date:"14.10.2022", link:"https://ftkl.ru/9268/471260"},
        ]},
        { id: 4, name: "Norway Park Барвиха", img: img_4 ,  data: [
            {date:"19.09.2022", link:"#"},
            {date:"20.09.2022", link:"#"},
            {date:"21.09.2022", link:"#"},
            {date:"22.09.2022", link:"#"},
            {date:"23.09.2022", link:"#"},
            {date:"24.09.2022", link:"#"},
            {date:"25.09.2022", link:"#"},
            {date:"26.09.2022", link:"#"},
            {date:"27.09.2022", link:"#"},
            {date:"28.09.2022", link:"#"},
            {date:"29.09.2022", link:"#"},
            {date:"01.10.2022", link:"#"},
            {date:"02.10.2022", link:"#"},
            {date:"03.10.2022", link:"#"},
            {date:"04.10.2022", link:"#"},
            {date:"05.10.2022", link:"#"},
            {date:"06.10.2022", link:"#"},
            {date:"07.10.2022", link:"#"},
            {date:"08.10.2022", link:"#"},
            {date:"09.10.2022", link:"#"},
            {date:"10.10.2022", link:"#"},
            {date:"11.10.2022", link:"#"},
            {date:"12.10.2022", link:"#"},
            {date:"13.10.2022", link:"#"},
            {date:"14.10.2022", link:"#"},
        ] },
        { id: 5, name: "Norway Park Красногорск", img: img_5 ,  data: [
            {date:"19.09.2022", link:"#"},
            {date:"20.09.2022", link:"#"},
            {date:"21.09.2022", link:"#"},
            {date:"22.09.2022", link:"#"},
            {date:"23.09.2022", link:"#"},
            {date:"24.09.2022", link:"#"},
            {date:"25.09.2022", link:"#"},
            {date:"26.09.2022", link:"#"},
            {date:"27.09.2022", link:"#"},
            {date:"28.09.2022", link:"#"},
            {date:"29.09.2022", link:"#"},
            {date:"01.10.2022", link:"#"},
            {date:"02.10.2022", link:"#"},
            {date:"03.10.2022", link:"#"},
            {date:"04.10.2022", link:"#"},
            {date:"05.10.2022", link:"#"},
            {date:"06.10.2022", link:"#"},
            {date:"07.10.2022", link:"#"},
            {date:"08.10.2022", link:"#"},
            {date:"09.10.2022", link:"#"},
            {date:"10.10.2022", link:"#"},
            {date:"11.10.2022", link:"#"},
            {date:"12.10.2022", link:"#"},
            {date:"13.10.2022", link:"#"},
            {date:"14.10.2022", link:"#"},
        ] },
        { id: 6, name: "Norway Park Мега Дыбенко", img: img_6 ,  data: [
            {date:"19.09.2022", link:"#"},
            {date:"20.09.2022", link:"#"},
            {date:"21.09.2022", link:"#"},
            {date:"22.09.2022", link:"#"},
            {date:"23.09.2022", link:"#"},
            {date:"24.09.2022", link:"#"},
            {date:"25.09.2022", link:"#"},
            {date:"26.09.2022", link:"#"},
            {date:"27.09.2022", link:"#"},
            {date:"28.09.2022", link:"#"},
            {date:"29.09.2022", link:"#"},
            {date:"01.10.2022", link:"#"},
            {date:"02.10.2022", link:"#"},
            {date:"03.10.2022", link:"#"},
            {date:"04.10.2022", link:"#"},
            {date:"05.10.2022", link:"#"},
            {date:"06.10.2022", link:"#"},
            {date:"07.10.2022", link:"#"},
            {date:"08.10.2022", link:"#"},
            {date:"09.10.2022", link:"#"},
            {date:"10.10.2022", link:"#"},
            {date:"11.10.2022", link:"#"},
            {date:"12.10.2022", link:"#"},
            {date:"13.10.2022", link:"#"},
            {date:"14.10.2022", link:"#"},
        ] },
        { id: 7, name: "Мадагаскар Junior", img: img_7,  data: [
            {date:"19.09.2022", link:"#"},
            {date:"20.09.2022", link:"#"},
            {date:"21.09.2022", link:"#"},
            {date:"22.09.2022", link:"#"},
            {date:"23.09.2022", link:"#"},
            {date:"24.09.2022", link:"#"},
            {date:"25.09.2022", link:"#"},
            {date:"26.09.2022", link:"#"},
            {date:"27.09.2022", link:"#"},
            {date:"28.09.2022", link:"#"},
            {date:"29.09.2022", link:"#"},
            {date:"01.10.2022", link:"#"},
            {date:"02.10.2022", link:"#"},
            {date:"03.10.2022", link:"#"},
            {date:"04.10.2022", link:"#"},
            {date:"05.10.2022", link:"#"},
            {date:"06.10.2022", link:"#"},
            {date:"07.10.2022", link:"#"},
            {date:"08.10.2022", link:"#"},
            {date:"09.10.2022", link:"#"},
            {date:"10.10.2022", link:"#"},
            {date:"11.10.2022", link:"#"},
            {date:"12.10.2022", link:"#"},
            {date:"13.10.2022", link:"#"},
            {date:"14.10.2022", link:"#"},
        ]  }
    ];


    const [showModal, setShowModal] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState()
    const [selectedItem, setSelectedItem] = useState({})
    const [dataIndex, setDataIndex] = useState(0)

    // get current modal data
    useEffect(() => {
        setSelectedItem(userInfoList.find(item => item.id === selectedItemId));

        // eslint-disable-next-line
    }, [selectedItemId]);

    // change to next slide
    const nextSlide = () => {
        if (dataIndex !== selectedItem?.data?.length - 1) {
            setDataIndex(dataIndex + 1)
        } else {
            setDataIndex(1)
        }
    }

    // change to previous slide
    const prevSlide = () => {
        if (dataIndex !== 0) {
            setDataIndex(dataIndex - 1)
        } else {
            setDataIndex(selectedItem?.data?.length - 1)
        }
    }

    return (
        <div className='wrapper'>
            <div className="container">
                { showModal ? (
                    <>
                        <div className="userInfoModal modal fade" id="userInfoModal" aria-labelledby="exampleModalLabel" >
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className='close_menu-User_info'>
                                        <button type="button" data-dismiss="modal" className='userPhoto_modal'><FontAwesomeIcon icon={ faCircleXmark } /></button>
                                    </div>
                                    <div className="userInfoModal modal-body">
                                        <img src={ selectedItem?.img || '' } alt="" />
                                    </div>
                                    <div className="carousel">
                                        <button className="left" onClick={prevSlide}><FontAwesomeIcon icon={ faChevronLeft } /></button>
                                        <div className="usersData"><span>{ selectedItem?.data[dataIndex].date }</span></div>
                                        <button className="left" onClick={nextSlide}><FontAwesomeIcon icon={ faChevronRight } /></button>
                                    </div>
                                    {/* <Link to={ `${selectedItem?.data[dataIndex].link}` } className="ok">
                                        OK
                                    </Link> */}
                                    <a href={selectedItem?.data[dataIndex].link} className="ok">OKKKKKKK</a>
                                </div>
                            </div>
                        </div>
                    </>
                ) : "" }


                <div className="row">
                    { userInfoList.map(users => (
                        <div key={ users.id } className="container_item">
                            <UserInfo user={ users } setSelectedItemId={ setSelectedItemId } showUserMessage={ () => setShowModal(true) } />
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
}





