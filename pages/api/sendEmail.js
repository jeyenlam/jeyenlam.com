const sendEmail = async (req, res) => {

  const testAPI = process.env.GATEWAY_AWS_API_URL;

  if (req.method !== "POST"){
    return res.status(404).json({message: "POST request only!"});
  }
  
  const { name, email, message } = req.body;

  if (!name || !email || !message ){
    return res.status(400).json({message: "All fields are required!"});
  }

  try {
    console.log("API Gateway URL: ", testAPI);
    // call AWS API Gate Way
    const response = await fetch('https://wnbmwni6w3.execute-api.us-east-2.amazonaws.com/dev', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, message})
    });

    if (response.ok){
      console.log(response)
      return res.status(200).json({message: "Message has reached AWS Lambda!"});
    }

    console.log(response)

    res.status(500).json({message: "Message failed to reach AWS Lambda."});

  } catch (error){
    res.status(500).json({message: `AWS Lambda Server Error ${error}`});
  }
}

export default sendEmail;
