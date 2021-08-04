import React, {useContext, useEffect, useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { TipCard } from "./TipCard";
import { TipContext } from "./TipProvider";
import { TipSearch } from "./TipSearch";



export const TipList = () => {
    const { searchTerms, tips, getTips } = useContext(TipContext)
    const [filteredTips, setFiltered] = useState([]);
    const history = useHistory()
    

    useEffect(() => {
        getTips()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
          // If the search field is not blank, display matching Users
          const subset = tips.filter((tip) =>
            tip.title.toLowerCase().includes(searchTerms)
          );
         
          setFiltered(subset);
        } else {
          // If the search field is blank, display all tips
          setFiltered(tips);
        }
      }, [searchTerms, tips]);

      const sortedTips = tips.sort((a, b) => {
        return (
          new Date(b.date) - new Date(a.date)
        );
      });

      console.log(sortedTips)

    return (
        <>
                <h2>Tips</h2>
        <div className="wholetips">
        <div className="tipsearches">
        <TipSearch/>
        <p/>
        <div className="newtipbtn"><button className="btns" onClick={() => {history.push("/tips/create")}}>
			Got a New Tip?</button></div>
        </div>
        <div className="tips">
        <div className="tips_list">
        {console.log("TipList: Render", tips)}
          {
             filteredTips.map(tip => {
              return <TipCard key={tip.id} tip={tip} />
            })
          }
          </div>
        </div>
        </div>
        </>
    )


}
