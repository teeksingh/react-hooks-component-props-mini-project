import React from "react";

import Article from "./Article";

function ArticleList ({posts}) {
   
    const post = posts.map((postInfo) => {
        return <Article key={postInfo.id} title={postInfo.title} date={postInfo.date} preview={postInfo.minutes} minutes={postInfo.minutes} />
    })
    return (
         <main>{post}</main>
    )
}
export default ArticleList