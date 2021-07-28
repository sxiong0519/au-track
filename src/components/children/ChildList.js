import React, {useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { ChildContext } from "./ChildProvider";
import { ChildCard } from "./ChildCard";

export const ChildList = () => {

    const { children, getChildren } = useContext(ChildContext)
    const history = useHistory()


    useEffect(() => {
        console.log("LocationList: useEffect - getChildren")
        getChildren()
    }, [])

    return (
        <>
        <div className="newchildbtn"><button className="btns" onClick={() => 
            {history.push("/children/create")}}>
			Add Child</button></div>
        <div className="children">
          {
             children.map(child => {
                 if (child.parentId === parseInt(localStorage.getItem("autrack_user"))) {
                    return <ChildCard key={child.id} child={child} />}
            })
          }
        </div>
        </>
    )


}
