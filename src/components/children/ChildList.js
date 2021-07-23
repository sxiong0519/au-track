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
        
        <div className="children">
          {
             children.map(child => {
              return <ChildCard key={child.id} child={child} />
            })
          }
        </div>
        </>
    )


}
