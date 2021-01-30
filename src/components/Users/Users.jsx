import React from 'react';
import Paginator from "../common/components/Paginator/Paginator";
import User from "./User/User";
import comStyle from '../common/style/Container.module.css'


const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    return <div className={comStyle.wrapContainer}>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
        />
        <div>
            {
                props.users.map(u => <User user={u}
                                           key={u.id}
                                           followingInProgress={props.followingInProgress}
                                           follow={props.follow}
                                           unfollow={props.unfollow}


                />)
            }
        </div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
        />
    </div>
}

export default Users;
