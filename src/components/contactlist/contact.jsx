import PropTypes from 'prop-types';
import { ListEl, DeleteBtn } from './contactlist.styled';
const Contact = props => {
  const { username, number, onDelete } = props;
  return (
    <ListEl>
      <span>
        {username}: {number}
      </span>
      <DeleteBtn type="button" onClick={onDelete}>
        Delete
      </DeleteBtn>
    </ListEl>
  );
};

export default Contact;
Contact.propTypes = {
  username: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};
