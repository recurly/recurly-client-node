import { HttpAdapter, HttpResponse } from './HttpAdapter';

export interface DefaultHttpAdapterLogger {
  debug(message: string): void;
}

export interface DefaultHttpAdapterOptions {
  timeout?: number;
  logger?: DefaultHttpAdapterLogger | null;
}

export default class DefaultHttpAdapter extends HttpAdapter {
  constructor(options?: DefaultHttpAdapterOptions);
  execute(
    method: string,
    url: string,
    headers: Record<string, string>,
    body: string | null
  ): Promise<HttpResponse>;
}
