import React from 'react';
import BlogItem from './BlogItem';

class Blog extends React.Component
{
    render()
    {
        let divElement=<div>From let element div...</div>

 let blogInfos=[{textHead:"Blog 1",textDesc:"Blog 1 Title"},
                {textHead:"Blog 2",textDesc:"Blog 2 Title"},
                {textHead:"Blog 3",textDesc:"Blog 3 Title"},
                {textHead:"Blog 4",textDesc:"Blog 4 Title"},
                {textHead:"Blog 5",textDesc:"Blog 5 Title"},
                {textHead:"Blog 6",textDesc:"Blog 6 Title"},
                {textHead:"Blog 7",textDesc:"Blog 7 Title"}];


        return(
            <div>
                <h1>From Blog COMP</h1>
                <p>LOREM IPSUM
                    <br/>
                    {5/2===2.5 ? "YES" : "NO"}

                    {divElement}
                </p>
                        
        {blogInfos.map((currentValue)=>
        <BlogItem key={currentValue.textHead} title={currentValue.textHead} desc={currentValue.textDesc}>
            
        </BlogItem>)}

                {/* <BlogItem title={blogInfos[0].textHead} desc={blogInfos[0].textDesc}></BlogItem>
                <BlogItem title={blogInfos[1].textHead} desc={blogInfos[1].textDesc}></BlogItem>
                <BlogItem title={blogInfos[2].textHead} desc={blogInfos[2].textDesc}></BlogItem> */}
            </div>
        )
    }

}


export default Blog;