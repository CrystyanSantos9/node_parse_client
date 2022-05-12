const { default: axios } = require("axios");

const params = {
    method: 'GET',
    url: 'http://192.168.1.96:8080',
    headers: {
        Accept: 'accept',
    },
};

const params2 = {
    method: 'POST',
    url: 'http://192.168.1.96:8080',
    headers: {
        Accept: 'accept',
       'Content-Type': 'application/json'
    },
    data: {
        foo: 'bar', // This is the body part
      }
};


const data = async ()=> await axios(params);
data().then(res=> { 
    const typeDataReceived = typeof(res.data)
    //parse string to objeto 
    const parseToObject = JSON.parse(res.data)
    //pegando agora o tipo convertido
    const typeDataReceivedParsed = typeof(parseToObject);
    console.log("Dado recebido do servidor ::: ", typeDataReceived);
    console.log("Dado convertido no cliente ::: ", typeDataReceivedParsed);
    console.log("Dado convertido no cliente ::: ", parseToObject);
});
// data().then(res=> console.log((res.data)));

// data().then(res=> console.log(JSON.parse(res.data)));
// const sendData = async ()=> await axios(params2);

// sendData();


// data().then(res=> console.log(JSON.parse(res.data)));