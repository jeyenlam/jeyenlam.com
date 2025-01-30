

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const client = new SESClient();

export const handler = async (event) => {
    const { name, email, message } = event
    const params = {
        Destination: {
        ToAddresses: ["jeyenlam@gmail.com"],
        },
        Message: {
        Subject: {
            Data: `[PORTFOLIO] New Email From ${email} `,
        },
        Body: {
            Text: {
            Data: `From: ${name}\nEmail: ${email}\nMessage: ${message}`,
            },
        },
        },
        Source: 'jeyenlam@gmail.com', //sender email under my own verified email
    };

    try {
        const data = await client.send(new SendEmailCommand(params));
        console.log("Email sent successfully!", data);
    } catch (error) {
        console.error("Error sending email", error);
    }
};