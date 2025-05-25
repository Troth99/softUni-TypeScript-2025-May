

type User = {
    id: number | string,
    username: string,
    passwordHash: string | string[],
    status: 'Locked' | 'Unlocked' | 'Deleted',
    email?: string
}

function validateUser(user: unknown): boolean {
    if (typeof user !== 'object' || user === null) {
      return false
    }
    const userValidation = user as User

    const validId = 
    (typeof userValidation.id === 'number' && userValidation.id > 100) ||
    (typeof userValidation.id === 'string' && userValidation.id.length === 14)

    const validUserName = 
    typeof userValidation.username === 'string' && userValidation.username.length >=5 && userValidation.username.length <=10

    const userPassword = 
    (typeof userValidation.passwordHash === 'string' && userValidation.passwordHash.length === 20) ||
    (Array.isArray(userValidation.passwordHash) && userValidation.passwordHash.length === 4 && userValidation.passwordHash.every(el => typeof el ==='string' && el.length === 8))

    const statusValidation = 
    userValidation.status.includes('Locked') ||
    userValidation.status.includes('Unlocked')

    const result = validId && validUserName && userPassword && statusValidation
    return result
}

console.log(validateUser({ id: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' }))
console.log(validateUser({ id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' }))
console.log(validateUser({ id: '20', username: 'testing', passwordHash: '123456-123456-123456', status:'Deleted', email: 'something' }))
console.log(validateUser({ id: 255, username: 'Pesho', passwordHash: ['asdf1245', 'qrqweggw', '123-4567','98765432'], status: 'Locked', email: 'something' }))
console.log(validateUser({ id: 'qwwe-azfg-ey38', username: 'Someone', passwordHash: ['qwezz8jg', 'asdg-444','12-34-56'], status: 'Unlocked' }))
console.log(validateUser({ id: 1344, username: 'wow123', passwordHash: '123456-123456-1234567', status: 'Locked', email: 'something@abv.bg' }))