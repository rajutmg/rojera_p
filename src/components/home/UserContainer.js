import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../../redux/actions/contactsAction";
import { getStorageUser } from "../../redux/reducers/authReducer";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    getStorageUser();
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2>Loading ...</h2>
  ) : userData.error ? (
    <h2>userData.error</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.user &&
          userData.user.map((user) => (
            <p key={user.id}>
              {user.name} {user.email}
            </p>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.contacts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
