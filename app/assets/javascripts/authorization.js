/**
 * Used to determine if a user is signed in and has the specified role
 * WARNING: Don't use this to hide sensitive data. This should be done on the server side.
 * This is to be used simply to hide certain UI elements from the user.
 *
 * @prop roleNames : An array of role names.
 * @return boolean
 */
window.is = function (roleNames) {
  for (let i = 0; i < roleNames.length; i += 1) {
    if (window.gon.user_signed_in && window.gon.current_user_role_names.indexOf(roleNames[i]) >= 0) return true;
  }

  return false;
};
