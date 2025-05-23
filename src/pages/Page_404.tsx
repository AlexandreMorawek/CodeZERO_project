import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Page_404 () {

    const navigate = useNavigate();
    const [secondsLeft, setSecondsLeft] = useState(5);

    useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
}, [navigate]);

    return (
        <>
            <h1 className="pt-[15rem] text-center text-white text-[3rem]" >Vous êtes perdus !</h1>
            <h2 className="text-center text-white text-[1.5rem] pt-[2rem]">Vous allez être redirigé dans {secondsLeft}</h2>
        </>
    )
}

export default Page_404