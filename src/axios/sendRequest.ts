import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface RequestData {
  method: string;
  url: string;
  headers?: Record<string, string>;
  parameters?: Record<string, string>;
  body?: Record<string, string>;
}

async function sendRequest({
  method,
  url,
  headers,
  parameters,
  body,
}: RequestData): Promise<string> {
  // Create an Axios request configuration object
  const requestConfig: AxiosRequestConfig = {
    method,
    url,
    headers,
    params: parameters,
    data: body,
  };

  try {
    const response: AxiosResponse = await axios(requestConfig);
    return response.data;
  } catch (error: unknown) {
    // Change 'any' to 'unknown'
    console.error('Request failed:', error);
    throw error;
  }
}

export default sendRequest;
