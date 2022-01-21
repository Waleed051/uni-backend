const bcrypt=require('bcryptjs')
const users = [
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'John Doe',
        email:'mjohn@example.co',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Jane Doe',
        email:'jane@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
]

module.exports= users