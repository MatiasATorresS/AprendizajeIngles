(async () => {
    try {
        const { OpenRouter } = await import("@openrouter/sdk");
        const openrouter = new OpenRouter({
            apiKey: process.env.OPENROUTER_API_KEY
        });
        const stream = await openrouter.chat.send({
            chatRequest: {
                model: "openrouter/auto", // elephant-alpha might not exist, auto always works
                messages: [{ "role": "user", "content": "hi" }],
                stream: true
            }
        });
        for await (const chunk of stream) {
            console.log(chunk.choices[0]?.delta?.content);
        }
    } catch(e) {
        console.error("ERROR:", e);
    }
})();
