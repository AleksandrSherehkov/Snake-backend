const messagesList: { [key: number]: string } = {
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
};

export class HttpError extends Error {
  status: number;

  constructor(status: number, message: string = messagesList[status]) {
    super(message);
    this.status = status;
  }
}
