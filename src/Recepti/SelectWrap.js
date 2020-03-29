// import React from 'react'
// import Select from './Select';

// class SelectWrap extends React.Component {
//     constructor(props) {
//         super(props)

//         let uniqueOptions = new Set();
//         this.props.recipe.forEach(element => {
//             uniqueOptions.add(element.recipe.dietLabels) 
//         });

//         this.state = {
//             recipe: props.recipe,
//             options: [...uniqueOptions],
//         }
//     }
//     handleChange(e) {
//         const selectedValue = e.target.value;
//         const filteredRecipe = this.props.recipe.filter(recipe => recipe.dietLabels === selectedValue);
//         this.setState(
//             {
//                 recipe: filteredRecipe
//             }
//         )
//     }
//     render() {
//         return (
//             <div>
//                 <Select options={this.state.options} handleChange={(e) => { this.handleChange(e) }} label={`dietLabels`} />
//             </div>
//         )
//     }
// }
// export default SelectWrap;