

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event) => {
    const params = {
        TableName: 'PortfolioViews',
        Key: {
            jeyenlam: { S: '1' } //id: 1
        },
        UpdateExpression: 'ADD #views :incrementBy',
        ExpressionAttributeNames: {
            '#views': 'views', // Mapping reserved keyword 'views' to a placeholder
        },
        ExpressionAttributeValues: {
            ':incrementBy': {N: '1'},
        },
        ReturnValues: 'UPDATED_NEW'
    };

    try {
        const data = await client.send(new UpdateItemCommand(params));
        console.log('View count updated:', data);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'View count updated', views: data.Attributes?.views?.N || 0 }),
        };
    } catch (error) {
        console.error('Error updating view count:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to update view count', error: error.message }),
        };
    }
};