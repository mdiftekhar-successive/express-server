export default function HasPermission( Module, Role, PermissionType ) {
    if ( Module == 'getUsers' && Role == 'trainee' && PermissionType == 'read') {
        return true;
    }
    else if ( Module == 'getUsers' && Role == 'trainer' && ( PermissionType == 'read' || PermissionType == 'write' )) {
        return true;
    }
    else if ( Module == 'getUsers' && Role == 'head-trainer' ) {
        return true;
    }
    else {
        return false;
    }
}
