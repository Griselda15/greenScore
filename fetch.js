const useFetch = ({fUsrName, fPassword}) => {
    fetch('http://3.21.170.246:3000/usr', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
        fUsrName: {fUsrName},
        fPassword: {fPassword}
    }) 
    })
    .then(response => response.json()) 
    .then(data => console.log(data)) 
    .catch((error) => {
    console.error('Error:', error);
    console.log(fPassword, fUsrName)
    });

}
export default useFetch;