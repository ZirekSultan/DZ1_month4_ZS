import React from 'react';

const user = {
    name: "Ledy Lamarr" ,
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg" ,
    imageSize: 200
}

const user2 = {
    name: "George Clooney" ,
    imageUrl: "https://i.pinimg.com/564x/55/77/3a/55773ae8813e42b896a30bca456e78ff.jpg" ,
    imageSize: 200
}

export default function Profile() {
    return  (
        <>
            <h1>{user.name}</h1>
            <img className = "avatar" src={user.imageUrl} alt={"Photo of" + user.name}
                 style={{width: user.imageSize, height: user.imageSize}}
                 />

            <h2>{user2.name}</h2>
            <img className = "avatar" src={user2.imageUrl} alt={"Photo of" + user2.name}
                 style={{width: user2.imageSize, height: user2.imageSize}}
                 />
        </>

    )
}