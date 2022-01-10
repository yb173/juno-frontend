import { Options, NormalizedOptions } from 'ky';
import camelcaseKeys from 'camelcase-keys';

export const DEFAULT_API_OPTIONS: Options = {
  prefixUrl: 'http://localhost:6001',
  timeout: 10000,
  retry: 0,
  hooks: {
    afterResponse: [
      async (
        _request: Request,
        _options: NormalizedOptions,
        response: Response,
      ): Promise<Response> => {
        const body = new Blob(
          [JSON.stringify(camelcaseKeys(await response.json()), null, 2)],
          { type: 'application/json' },
        );
        const { headers, status, statusText } = response;
        const init = { headers, status, statusText };

        return new Response(body, init);
      },
    ],
  },
  // mode: 'cors',
};
