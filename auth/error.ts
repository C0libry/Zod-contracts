export type ErrorResponse = {
  statusCode: number;
  message: string;
  error?: string;
  errors?: Record<string, unknown>[];
};

export interface FetchError {
  response?: Response;
  data?: ErrorResponse;
}
