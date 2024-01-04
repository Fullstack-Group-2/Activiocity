import React, { useEffect, useState } from "react";


const WelcomeMessage = (token) => {

    
    return (
        <>
            <h2>Welcome {token.token.user.username}</h2>
        </>
    )
};
export default WelcomeMessage;