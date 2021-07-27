import React, {useContext, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { TipCard } from "./TipCard";
import { TipContext } from "./TipProvider";



export const TipList = () => {
    const { tips, getTips } = useContext(TipContext)

    useEffect(() => {
        getTips()
    }, [])
    return (
        <>
        
        <div className="tips">
        <h2>Tips</h2>
        <div className="tips_list">
        {console.log("TipList: Render", tips)}
          {
             tips.map(tip => {
              return <TipCard key={tip.id} tip={tip} />
            })
          }
          </div>
        </div>
        </>
    )


}