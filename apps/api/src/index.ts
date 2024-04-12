import { defineAbilityFor } from '@sass/auth'

const ability = defineAbilityFor({ role: 'MEMBER' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteSomeoneElse = ability.can('delete', 'User')

console.log(userCanInviteSomeoneElse) // true
console.log(userCanDeleteSomeoneElse) // false
