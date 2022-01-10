var AWS = require("aws-sdk");
const accessKeyId = "AKIASJ6JE4ZR6PDVAZUE"
const secretAccessKey = "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"
const region = "ap-southeast-1"

AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region
})

function randomID() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
}

const createTable = async () => {
  const dynamodb = new AWS.DynamoDB()

  var params = {
    TableName: "Movies",
    KeySchema: [
      { AttributeName: "year", KeyType: "HASH" },
      { AttributeName: "title", KeyType: "RANGE" }
    ],
    AttributeDefinitions: [
      { AttributeName: "year", AttributeType: "N" },
      { AttributeName: "title", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5
    }
  };

  const resp = await dynamodb.createTable(params).promise()
  console.log('createTable: ', resp)
}

const addData = async () => {
  var docClient = new AWS.DynamoDB.DocumentClient();

  var params = {
    TableName: 'Movies',
    Item:{
      "year": 2020,
      "title": "Political",
      "createAt": "20201127",
      "info":{
          "plot": "Democracy",
          "rating": 10
      }
  }
  };

  console.log("Adding a new item...");
  console.log(params)
  const a = await docClient.put(params).promise()
  console.log(a)
}

const scanData = async () => {
  var docClient = new AWS.DynamoDB.DocumentClient();
  // const startYear = '2019'
  // const endYear = '2020'

  const params = {
    // KeyConditionExpression: '#movie_year = :value',
    FilterExpression: 'createAt >= :startDate AND createAt <= :endDate',
    ExpressionAttributeValues: {
      ':startDate': '20180101',
      ':endDate': '20201230'
    },
    TableName: 'Movies'
  }

  console.log(params)
  const resp = await docClient.scan(params).promise()
  console.log('scanData: ', resp)
}

// createTable()
scanData()
// addData()
