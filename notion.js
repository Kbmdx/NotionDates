const { Client, LogLevel } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY, logLevel: LogLevel.DEBUG });

async function getDatabase() {

    const databaseId = process.env.NOTION_DATABASE_ID;
console.log({databaseId});
  const response = await notion.databases.retrieve({
        database_id: databaseId,
  })
  console.log(response);
}
getDatabase();
