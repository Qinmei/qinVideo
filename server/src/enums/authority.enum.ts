export enum Authority {
  CONFIG_QUERY = 'configQuery',
  CONFIG_UPDATE = 'configUpdate',

  ROLES_QUERY = 'rolesQuery',
  ROLES_CREATE = 'rolesCreate',
  ROLES_UPDATE = 'rolesUpdate',
  ROLES_UPDATE_MANY = 'rolesUpdateMany',
  ROLES_UPDATE_ALL = 'rolesUpdateAll',
  ROLES_REMOVE = 'rolesRemove',
  ROLES_REMOVE_MANY = 'rolesRemoveMany',
  ROLES_REMOVE_ALL = 'rolesRemoveAll',

  USERS_QUERY = 'usersQuery',
  USERS_CREATE = 'usersCreate',
  USERS_UPDATE = 'usersUpdate',
  USERS_UPDATE_MANY = 'usersUpdateMany',
  USERS_UPDATE_ALL = 'usersUpdateAll',
  USERS_REMOVE = 'usersRemove',
  USERS_REMOVE_MANY = 'usersRemoveMany',
  USERS_REMOVE_ALL = 'usersRemoveAll',
}
