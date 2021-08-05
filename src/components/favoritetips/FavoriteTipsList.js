import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { TipCard } from "../tips/TipCard";
import { TipSearch } from "../tips/TipSearch";
import { FavTipCard } from "./FavoriteTipsCard";
import { FavTipSearch } from "./FavoriteTipSearch";
import { FavTipContext } from "./FavoriteTipsProvider";


export const FavTipList = () => {
    const { favTip, getFavTip, searchTerms } = useContext(FavTipContext)
    const [filteredFavTip, setFilteredFavTip] = useState([])
    const history = useHistory()

    useEffect(() => {
        getFavTip()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
          // If the search field is not åblank, display matching locations
          const subset = favTip.filter((ft) =>
            ft.tip.title.toLowerCase().includes(searchTerms) ||
            ft.tip.description.toLowerCase().includes(searchTerms)
          );
         
          setFilteredFavTip(subset);
        } else {
          // If the search field is blank, display all locations
          setFilteredFavTip(favTip);
        }
      }, [searchTerms, favTip]);
     
    return (
        <>
        <h2>Saved Posts</h2>
            <div className="wholetips">
                <div className="tipsearches">
                <FavTipSearch/>
                <p/>
                <div className="favLocation">
                    <button className="btns" onClick={() => {history.push("/tips")}}>All Posts</button>
                </div>
                </div>
                <div className="tips">
                    <div className="tips_list">
                    {console.log("TipList: Render", favTip)}
                    {
                        filteredFavTip.map(favTip => {
                        return <FavTipCard key={favTip.id} favTip={favTip} />
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )



}