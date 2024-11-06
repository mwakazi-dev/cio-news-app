import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

type ErrorResponse = {
  data?: {
    message?: string;
  };
  message?: string;
};

export const coreRequestHandler = (
  request: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  return request;
};

export const errorHandler = (error: AxiosError): Promise<never> => {
  const errorObj: any = error.response
    ? JSON.parse(JSON.stringify(error.response))
    : JSON.parse(JSON.stringify(error));

  return Promise.reject({
    status: errorObj?.response?.status,
    message: errorObj?.data?.error?.message as any,
  });
};

const requestHandler = axios.create({});

requestHandler.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {
    return coreRequestHandler(request);
  },
  (error: ErrorResponse) => {
    return Promise.reject(error);
  },
);

requestHandler.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => errorHandler(error),
);

export default requestHandler;
