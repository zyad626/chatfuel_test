import dotenv from "dotenv"
import express from "express"
const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000

app.get('/', (req, res)=>{

    let elements = []
    const imgs = ["https://drive.google.com/uc?id=1jj9vRunUhMMo7QZS6UFgxaaA281_bX0A", "https://chatbot-tickets.s3.amazonaws.com/4507365a-dff0-487e-8528-7a6d46e14ab9!0","https://chatbot-tickets.s3.amazonaws.com/4507365a-dff0-487e-8528-7a6d46e14ab9!0"]
    for(let i = 0; i < 3; i++){
        let e = {
            title: `test title`,
            image_url:  imgs[i],
            subtitle: `origin - dest`,
            default_action: {
                type: "web_url",
                url: "travolic.com",
            },
            buttons: [{
                type: "web_url",
                title: "select",
                url: "travolic.com"
            }]
        }
        elements.push(e)
    }
    const Gallery = {
        attachment: {
            type: "template",
            payload: {
                template_type: "generic",
                image_aspect_ratio: "horizontal",
                elements: elements
            }
        }
    }
    res.send({ messages: [Gallery] })

})
app.listen(PORT, ()=>console.log("http://localhost:5000"))