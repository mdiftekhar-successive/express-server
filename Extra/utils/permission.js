const permission = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
};
let obj = haspermission('getUsers','head-trainer','delete');
console.log('Ans=',obj);

obj = haspermission(permission.getUsers);

export default function haspermission(module,role,permissionType) {
    if(module == 'getUsers' && role == 'trainee' && permissionType == 'read') {
        return true;
    }
    else if (module == 'getUsers' && role == 'trainer' && (permissionType == 'read' || permissionType == 'write')) {
        return true;
    }
    else if (module == 'getUsers' && role == 'head-trainer') {
        return true;
    }
    else {
        return false;
    }
}
    