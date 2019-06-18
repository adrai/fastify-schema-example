const fastify = require('fastify')
const app = fastify()

app.addSchema({
  $id: 'myObj',
  type: 'object',
  properties: {
    justNullable: { type: 'string', nullable: true },
    nullableAndNullType: { type: ['string', 'null'], nullable: true },
    formatJustNullable: { type: 'string', nullable: true, format: 'email' },
    formatNullableAndNullType: { type: ['string', 'null'], nullable: true, format: 'email' },
    patternJustNullable: { type: 'string', nullable: true, pattern: '^(https?:\\/\\/)?(www\\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\\.)+[\\w]{2,}(\\/\\S*)?$' },
    patternNullableAndNullType: { type: ['string', 'null'], nullable: true, pattern: '^(https?:\\/\\/)?(www\\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\\.)+[\\w]{2,}(\\/\\S*)?$' },
  }
})

app.post('/hello',
  {
    schema: {
      body: 'myObj#',
      response: { 200: 'myObj#' }
    }
  },
  async (request) => {
    console.log(request.body)
    return {
      justNullable: null,
      nullableAndNullType: null,
      formatJustNullable: null,
      formatNullableAndNullType: null,
      patternJustNullable: null,
      patternNullableAndNullType: null
    }
  }
)

app.listen(4300, (err) => {
  if (err) return console.error(err)
  console.log('started on port 4300')
})


// body=$(cat << EOF
// {
//   "justNullable": null,
//   "nullableAndNullType": null,
//   "formatJustNullable": null,
//   "formatNullableAndNullType": null,
//   "patternJustNullable": null,
//   "patternNullableAndNullType": null
// }
// EOF
// )

// body=$(cat << EOF
// {
//   "justNullable": null,
//   "nullableAndNullType": null,
//   "formatNullableAndNullType": null,
//   "patternNullableAndNullType": null
// }
// EOF
// )
// curl -H 'Content-Type: application/json' 'http://localhost:4300/hello' -X POST --data-binary $body