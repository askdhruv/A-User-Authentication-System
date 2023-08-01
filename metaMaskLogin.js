
async function getNonce() {
    const response = await fetch('/api/nonce');
    const data = await response.json();
    return data.nonce;
  }

// Sign the message with the nonce and send it to the backend server for verification
async function signMessage() {  
    try {
      var element = document.getElementById("p1");
      let stored = window.localStorage.getItem("token")
    if (window.localStorage.getItem("token") != null ) {
        let token = window.localStorage.getItem("token");
        const response = await fetch('/verify', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
});

let newresponse = await response.json();

if (newresponse == "ok") {
    window.location.href = '/success';
}
else {
    window.localStorage.removeItem("token");
    element.innerHTML = "Token Expired, log in again to get a new Token !!!"
    }
}

else {
    // Get the nonce value from the backend server
    const nonce = await getNonce();
    // Get the signer account using MetaMask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    // Sign the message using the signer account and the nonce value
    const message = `I am signing this message to prove my identity. Nonce: ${nonce}`;
    const signedMessage = await signer.signMessage(message);
    const data = { signedMessage, message, address };
    // Send the signed message and the public address of the signer to the backend server for verification
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let token = await response.json();
    window.localStorage.setItem("token", token);
    const newResponse = await fetch('/verify', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    let answer = await newResponse.json();
    console.log(answer)
    if (answer == "ok") {   
        window.location.href = '/success';
    }
    
    else {
        var element = document.getElementById("p1");
        element.innerHTML = "Invalid Token !!!"
    }
    }
      
    } catch (error) {
      console.error(error);
    }
  }