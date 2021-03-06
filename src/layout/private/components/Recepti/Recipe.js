import React from 'react'

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMe: false
        }
    }
    handleClick() {
        this.setState({
            showMe: !this.state.showMe
        })

    }
    render() {
        let buttonText = this.state.showMe ? "Hide ingredients" : "Show ingredients"
        return (
            <div className='recipe position-relative'>
                <div>
                    <h2><em>{this.props.title}</em></h2>

                    <a href={this.props.url}
                        target="_blank" rel="noopener noreferrer"
                        title='See full recipe'>
                        <img src={this.props.image} alt={this.props.title} /> </a>

                    <p><b>Calories:</b> {Math.floor(this.props.calories)} kcal</p>
                    <p><b>Diet labels:</b> {this.props.dietLabels.slice(0, 1)}</p>
                    
                    <div>
                    <b>Health labels:</b> {this.props.healthLabels.map(healthlabel=>(<p key={healthlabel}>{healthlabel}</p>))}
                    </div>

                    <div style={{ margin: '15px' }}>
                        {this.state.showMe ?
                            <div><b>Ingredients: </b>{this.props.ingredientLines.map(ingredient => (<p key={ingredient}>{ingredient}</p>))}</div> : null}
                        <button onClick={() => this.handleClick()}>{buttonText}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipe;