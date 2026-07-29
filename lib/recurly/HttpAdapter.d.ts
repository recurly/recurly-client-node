export class HttpResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: string | null;
  constructor(statusCode: number, headers: Record<string, string>, body: string | null | undefined);
}

export abstract class HttpAdapter {
  execute(
    method: string,
    url: string,
    headers: Record<string, string>,
    body: string | null
  ): Promise<HttpResponse>;
}

export const HttpMethod: {
  readonly GET: 'GET';
  readonly POST: 'POST';
  readonly PUT: 'PUT';
  readonly DELETE: 'DELETE';
  readonly HEAD: 'HEAD';
};
