let openai = require('openai');

openai = new openai.OpenAI({
    // apiKey: process.env.OPENAI_API_KEY
    apiKey: "sk-proj-PaMpUFzHh4Waus0WX9TnT3BlbkFJPMmFlY6wJ2F9i8JpjSaz"
});

async function genrateImage(prompt) {
  const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
        quality: "standard",
  });
    console.log(`---response--`,response);
    return response
}

module.exports = genrateImage