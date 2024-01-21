function skillsMember() {

    return{
        restict: 'E',
        templateUrl:'modules/skills/views/member.html',
        controllerAs: 'vm',
        bindTcontroller: true,
        scope: {
            member: '='
        }
    };
}