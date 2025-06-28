import { promisify } from 'util'
import knex from 'knex'
const dbClient = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '****',
    database: 'mealsharing',
  },
})
// async function initDb() {
//   await dbClient.schema.raw(`drop table IF EXISTS meals`);
//   await dbClient.schema.raw(`
//         CREATE TABLE IF NOT EXISTS meals (
//             id int AUTO_INCREMENT,
//             name varchar(50) not null,
//             price decimal(10,2),
//             PRIMARY KEY (id)
//     )
// `);
//   await insertMeals();
// }

export async function getMeals() {
  const meals = await dbClient.raw('select * from meal')

  console.log('db result', meals)

  return meals
}

export async function insertMeals() {
  const mealsToInsert = [
    {
      id: 1,
      name: 'pizza',
      price: 120,
    },
    {
      id: 2,
      name: 'Burger',
      price: 160,
    },
  ]

  for (const meal of mealsToInsert)
    await dbClient.raw(`
            insert into meals values(${meal.id},'${meal.name}', '${meal.price}')
            `)
}
