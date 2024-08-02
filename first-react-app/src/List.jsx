import PropsType from 'prop-types';
function List(props){
    const mainlist = props.lists
    const thelist = mainlist.map((list) => <li key={list.age}>{list.name}: {list.goals} goals</li>)  
    return (
       <>
        <ol>{thelist}</ol>
       </>
    )
}
List.defaultProps = {
    lists: []
}
export default List;