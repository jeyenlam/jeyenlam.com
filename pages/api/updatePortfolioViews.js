const updatePortfolioViews = async (req, res) => {

  if (req.method !== "POST"){
    return res.status(404).json({message: "POST request only!"});
  }
  
  try {
      const response = await fetch('https://l6v3d30fq2.execute-api.us-east-2.amazonaws.com/dev', 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify()
      });

      if (response.ok){
        const data = await response.json();
        console.log('View count updated:', data);
        return res.status(200).json(data.body);
      }
  } catch (error) {
      console.error('[API] Error updating view count:', error);
  }
}

export default updatePortfolioViews;