"use client";
import NewItem from "./new-item";


const Page = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <div>
            <NewItem />
            <button onClick={goBack} className="hover:underline">Back</button>
        </div>
    );
};



export default Page;