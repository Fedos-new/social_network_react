import React from 'react';
import styles from './user.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/user.png';


let Users = (props) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger;
            props.setUsers(response.data.items)
        });
        // [{
        //         id: 1,
        //         photoUrl: 'https://avalonuk.com/wp-content/uploads/2015/04/Alex-Horne-27634.jpg',
        //         followed: false,
        //         fullName: 'Dmitry Petrov',
        //         status: 'I am a cool developer',
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        //         id: 2,
        //         photoUrl: 'https://sefon.pro/img/artist_photos/alex-mica.jpg',
        //         followed: true,
        //         fullName: 'Alex Smirnov',
        //         status: 'I am a cool developer',
        //         location: {city: 'Moscow', country: 'Russia'}
        //     },
        //     {
        //         id: 4,
        //         photoUrl: 'https://n1s2.starhit.ru/c2/bd/f8/c2bdf8272296cf755b234c29bf0a2d8a/480x497_0_46e576d5d2ee20acb1b0012b22651833@480x497_0xc0a8399a_6014780351508667136.jpeg',
        //         followed: true,
        //         fullName: 'Sveta Bevz',
        //         status: 'I am a cool developer',
        //         location: {city: 'Kiev', country: 'Ukrain'}
        //     },
        //     {
        //         id: 5,
        //         photoUrl: 'https://articlebio.com/uploads/biography/2018/08/01/olga-katysheva.jpg',
        //         followed: false,
        //         fullName: 'Olga Sharm',
        //         status: 'I am a cool developer',
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        //         id: 6,
        //         photoUrl: 'https://avalonuk.com/wp-content/uploads/2015/04/Alex-Horne-27634.jpg',
        //         followed: false,
        //         fullName: 'Igor Ivanov',
        //         status: 'I am a cool developer',
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        //         id: 7,
        //         photoUrl: 'https://sefon.pro/img/artist_photos/alex-mica.jpg',
        //         followed: false,
        //         fullName: 'Ivan Osipenko',
        //         status: 'I am a cool developer',
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     }]


    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                 </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;