// TODO
var groceryList = ['milk', 'eggs', 'booze'];

var GroceryList = () => (
  <div>
    <h1>Grocery List</h1>
    <ul>
      {groceryList.map(item =>
        <GroceryListItem item={item}/>
      )}
    </ul>
  </div>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() { 
    var style = {
      'fontWeight': this.state.done ? 'bold' : 'normal'
    };
    return (  
   
     /* <ul>
        <li onClick={onListItemClick}>{props.todos[0]}</li>
        <li>{props.todos[1]}</li>
        <li>{props.todos[2]}</li>
      </ul>
      */
      // <li>{this.props.item}</li>

      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

// var Milk = () => (
//   <li>Milk</li>
// );

// var Eggs = () => (
//   <li>Eggs</li>
// );


ReactDOM.render(<GroceryList />, document.getElementById('app'));
