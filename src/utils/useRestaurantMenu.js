import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    
    const [resInfo, setresInfo] = useState(null)

    useEffect(()=>{
        fetchData();
    },[]);

    // const fetchData = async () => {
    //     const data = await fetch(MENU_API+resId);
    //     const json = await data.json();
    //     setresInfo(json);
    // }

    const fetchData = async () => {
        let response;
        let attempts = 0;
        const maxAttempts = 5;
    
        while (attempts < maxAttempts) {
            response = await fetch("https://corsproxy.io/"+MENU_API + resId, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });
            
            if (response.status === 200) {
                const json = await response.json();
                setresInfo(json);
                return; // Success, exit the loop
            } else if (response.status === 202) {
                // Task is accepted but pending; wait before retrying
                attempts++;
                await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay
            } else {
                console.error("API error:", response.status);
                break;
            }
        }
        console.error("Max polling attempts reached.");
    };
    return resInfo;

}



export default useRestaurantMenu;