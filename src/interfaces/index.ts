// TODO: put it in a private package
export class SwaggerDocumentationOptions {
  // eslint-disable-next-line @typescript-eslint/ban-types
  responseDto?: Function;
  endpointDescription: string;
  endpointSummary: string;
  error404Description?: string;
  error500Description?: string;
  isArray?: boolean;
  isPaginated?: boolean;
}
