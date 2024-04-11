import { ability } from '@sass/auth'

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteSomeoneElse = ability.can('delete', 'User')

console.log(userCanInviteSomeoneElse) // true
console.log(userCanDeleteSomeoneElse) // false
