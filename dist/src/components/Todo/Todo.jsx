import PropTypes from "prop-types";

function Todo(props) {
	const { itemName, handleDelete, itemId, handleCheck, completed } = props;
	return (
		<li class="li">
			{itemName}
			<button
				class="deleteButton"
				type="button"
				onClick={() => handleDelete(itemId)}
			>
				<svg
					width="20"
					height="21"
					viewBox="0 0 20 21"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M8.30035 2.4646C7.77994 2.4646 7.29477 2.68973 6.94732 3.06716C6.60179 3.44251 6.41724 3.93924 6.41724 4.4455V4.92639H4.901H2.63477C2.22055 4.92639 1.88477 5.26218 1.88477 5.67639C1.88477 6.09061 2.22055 6.42639 2.63477 6.42639H4.151V16.7545C4.151 17.2607 4.33556 17.7575 4.68109 18.1328C5.02853 18.5102 5.51371 18.7354 6.03411 18.7354H13.9659C14.4863 18.7354 14.9715 18.5102 15.3189 18.1328C15.6645 17.7575 15.849 17.2607 15.849 16.7545V6.42639H17.3652C17.7794 6.42639 18.1152 6.09061 18.1152 5.67639C18.1152 5.26218 17.7794 4.92639 17.3652 4.92639H15.099H13.5828V4.4455C13.5828 3.93924 13.3982 3.44251 13.0527 3.06716C12.7053 2.68973 12.2201 2.4646 11.6997 2.4646H8.30035ZM7.16447 6.42639C7.16539 6.42639 7.16631 6.4264 7.16724 6.4264H12.8328C12.8337 6.4264 12.8346 6.42639 12.8356 6.42639H14.349V16.7545C14.349 16.9011 14.2948 17.0306 14.2153 17.1169C14.1378 17.2011 14.0465 17.2354 13.9659 17.2354H6.03411C5.95348 17.2354 5.86223 17.2011 5.78468 17.1169C5.7052 17.0306 5.651 16.9011 5.651 16.7545V6.42639H7.16447ZM12.0828 4.9264V4.4455C12.0828 4.29884 12.0286 4.16941 11.9491 4.08308C11.8716 3.99883 11.7803 3.9646 11.6997 3.9646H8.30035C8.21972 3.9646 8.12847 3.99883 8.05091 4.08308C7.97144 4.16941 7.91724 4.29884 7.91724 4.4455V4.92639L12.0828 4.9264Z"
						fill="#676879"
					/>
				</svg>
			</button>
			<div className="completeButton">
				<input type="checkbox" onClick={() => handleCheck(completed)} />
			</div>
		</li>
	);
}

Todo.propTypes = {
	name: PropTypes.string,
};

export default Todo;
