export class SwaggerDocumentationOptions {
  endpointDescription?: string;
  endpointSummary?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  responseDto?: Function;
  error404Description?: string;
  error500Description?: string;
  isArray?: boolean;
  isPaginated?: boolean;
}
