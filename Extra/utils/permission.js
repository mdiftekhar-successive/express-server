export default function haspermission(module,role,permissionType) {
    if ( module == 'getUsers' && role == 'trainee' && permissionType == 'read') {
        return true;
    }
    else if ( module == 'getUsers' && role == 'trainer' && (permissionType == 'read' || permissionType == 'write')) {
        return true;
    }
    else if ( module == 'getUsers' && role == 'head-trainer') {
        return true;
    }
    else {
        return false;
    }
}
    