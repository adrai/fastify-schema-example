# Schema

```js
{
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
}
```


# Response

The response is always:

```js
{
    justNullable: null,
    nullableAndNullType: null,
    formatJustNullable: null,
    formatNullableAndNullType: null,
    patternJustNullable: null,
    patternNullableAndNullType: null
}
```

and is correctly serialized:

```json
{"justNullable":null,"nullableAndNullType":null,"formatJustNullable":null,"formatNullableAndNullType":null,"patternJustNullable":null,"patternNullableAndNullType":null}
```


# Request

`"justNullable": null` wil be parsed as: `justNullable: ''` => expecting: `"justNullable": null`
`"nullableAndNullType": null` wil be parsed as: `nullableAndNullType: null` => like expected
`"formatJustNullable": null` results in `body.formatJustNullable should match format \"email\"` => expecting: `"formatJustNullable": null`
`"formatNullableAndNullType": null` wil be parsed as: `formatNullableAndNullType: null` => like expected
`"patternJustNullable": null` results in `body.patternJustNullable should match pattern \"^(https?:\\/\\/)?(www\\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\\.)+[\\w]{2,}(\\/\\S*)?$\"` => expecting: `"patternJustNullable": null`
`"patternNullableAndNullType": null` wil be parsed as: `patternNullableAndNullType: null` => like expected
