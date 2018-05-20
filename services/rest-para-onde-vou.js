import { create } from 'apisauce';

const ws = create ({
        //baseURL: 'http://localhost:8080'
        baseURL: 'https://para-onde-vou.herokuapp.com'
});

export default ws;