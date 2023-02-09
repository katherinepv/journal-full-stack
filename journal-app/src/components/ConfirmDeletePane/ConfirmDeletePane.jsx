import "./ConfirmDeletePane.scss";
const ConfirmDeletePane = ({handleClick, handleDeleteEntry}) => {

    return <div className="delete-popup">
        <h3>Delete this entry?</h3>
        <p>Once deleted this cannot be undone.</p>
        <button onClick={handleClick}>Cancel</button>
        <button onClick={handleDeleteEntry}>Delete</button>
    </div>

}
export default ConfirmDeletePane;