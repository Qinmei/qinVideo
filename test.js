const jwt = require('jsonwebtoken');
const config = require('./config');

const test = async ()=>{

    try{
        const result = await jwt.verify(
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNmE3NzZlMzFlMTkzZGY3OWIyZGY3YyIsIm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0LnFpbm1laS5vcmciLCJpYXQiOjE1NTA2MzI0NzIsImV4cCI6MTU1MDYzMjQ4Mn0.wiOs4t1J3tB4RDzz6ugZ9xP2ulD9e7xjhuWsEAtzWx0',
            config.tokenSecret)
    }catch(err){
        const error = err
    }

    console.log(error)
    console.log('sdsds')
}

test();
