export default function hasPermission( module, role, permissionType ) {
    if ( module == 'getUsers' ) {
        if (role == 'head-trainer' ) {
            return true;
        }
        else if ( role == 'trainee' && permissionType == 'read') {
            return true;
        }
        else if ( role == 'trainer' && ( permissionType == 'read' || permissionType == 'write' )) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
