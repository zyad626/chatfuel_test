import dotenv from "dotenv"
import express from "express"
const app = express()
dotenv.config()

const token = "mELtlMAHYqR0BvgEiMq8zVek3uYUK3OJMbtyrdNPTrQB9ndV0fM7lWTFZbM4MZvD";
const botId = "5ed0e9eb28f2cd636b334007";

app.get('/', (req, res)=>{

    let elements: element[] = []
    for(let i = 0; i < 3; i++){
        let e:element = {
            title: `test title`,
            image_url:  "https://chatbot-tickets.s3.amazonaws.com/4507365a-dff0-487e-8528-7a6d46e14ab9!0",
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
    const Gallery: gallery = {
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
app.listen(5000, ()=>console.log("listening on port 5000"))
type element = {
    title: string,
    image_url: string,
    subtitle: string,
    default_action: {
        type: string,
        url: string
    },
    buttons: [{
        type: string,
        url: string,
        title: string
    }]
}
type gallery = {
    attachment: {
        type: string,
        payload: {
            template_type: string,
            image_aspect_ratio: string,
            elements: element[],
        }
    }
}