import React,{Component} from 'react';
import './BlogItem.css';
import PropTypes from 'prop-types';

class BlogItem extends Component
{
    constructor(props) {
        super(props);
        console.log("Run");
        
    }
    
    static propTypes={title:PropTypes.oneOfType([PropTypes.string,PropTypes.array]).isRequired,
                      desc:PropTypes.string.isRequired};
    render()
    {
        // console.log(this.props);

        const{title,desc}=this.props;
        return(
            <div className="title">
                {/* <h2>{this.props.title}</h2>                
                <h3>{this.props.desc}</h3>*/}

                <h2>{title}</h2>                
                <h3>{desc}</h3> 
            </div>
        )
    }

}


export default BlogItem;