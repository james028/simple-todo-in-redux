import React, { Component } from 'react'
import { connect } from 'react-redux'

class Lister extends Component {
  render() {
      console.log('render', this.props);
    return (
      <div>
          <p>Add todo ! </p>
          <form onSubmit={this.props.onSubmit}>
            <input 
                value={this.props.inpText}
                onChange={this.props.onChange}
            />
            <button>add</button>
          </form>
            <ul>
                {this.props.itemss.map((e, i) => {
                    return <li key={i}>{e}<button onClick={this.props.deleteItem}>X</button></li>
                })}
            </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        inpText: state.inputText,
        itemss: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (e) => {
            const action = {type: 'GET_VALUE', text: e.target.value};
            dispatch(action);
        },
        onSubmit: (e) => {
            e.preventDefault();
            const action = {type: 'ADD_ITEM'};
            dispatch(action);
        },
        deleteItem: () => {
            const action = {type: 'DELETE_ITEM'};
            dispatch(action);
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Lister);
