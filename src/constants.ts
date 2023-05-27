export const API_RESPONSE_DESCRIPTION =
  'If the server is available, it always responds with code 200 or 201. Error code 400 and higher will replace the ok field: it equals false and the error text in the error field. If the input data does not pass validation, the error field contains an object with invalid fields and error text';
