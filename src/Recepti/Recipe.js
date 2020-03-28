import React from 'react'

class Recipe extends React.Component{
    constructor(props){
        super (props);
        this.state={
            showMe:false
        }
    }
    handleClick(){
        this.setState({
            showMe: !this.state.showMe
        })

    }
    render(){
        let buttonText= this.state.showMe ? "Hide ingredient" : "Show ingredient"
        return(
            <div>
            <h1>{this.props.title}</h1>
            <a href={this.props.url} target="_blank" rel="noopener noreferrer"> 
            <img src={this.props.image} alt={this.props.title}/> </a>
            <p>{this.props.dietLabels}</p>
            <div>
                {this.state.showMe ? 
                    <p>{this.props.ingredientLines}</p> : null}
                
                 <button onClick={()=>this.handleClick()}>{buttonText}</button>
            </div>
        </div> 
        )
    }
}

// const Recipe=(props)=>{
//     const handleClick=()=>{ 
//         console.log('dugme') // eslint-disable-next-line
//         return (<>
//         {props.ingredientLines}
//         </>
//         )
//     }
//     return(
//         <div>
//             <h1>{props.title}</h1>
//             <a href={props.url} target="_blank" rel="noopener noreferrer"> 
//             <img src={props.image} alt={props.title}/> </a>
//             <p>{props.dietLabels}</p>
//             <div>
//                 {props.ingredientLines.slice(0,3)}
//                 <button onClick={handleClick}>show more...</button>
//             </div>
//         </div>
//     )
// }
export default Recipe;
//.map((line,key)=>(<span key={key}>{line}</span>))