import React from 'react';

const navLink = ({route}) => {
    return (
        <>
            <li> <a href={route.path}> {route.name} </a> </li>
        </>
    );
};

export default navLink;