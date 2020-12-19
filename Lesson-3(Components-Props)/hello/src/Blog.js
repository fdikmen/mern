import React from 'react';
import BlogItem from './BlogItem';
import BlogForm from './BlogForm';

class Blog extends React.Component
{
    render()
    {
       console.log(this.props);

        let divElement=<div>From let element div...</div>



        return(
            <div>
                <h1>From Blog COMP</h1>
                <BlogForm appClick={this.props.appClick}></BlogForm>
                <p>LOREM IPSUM
                    <br/>
                    {5/2===2.5 ? "YES" : "NO"}

                    
                </p>
                {divElement}
                  

        {this.props.blogInfos.map((currentValue)=>
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