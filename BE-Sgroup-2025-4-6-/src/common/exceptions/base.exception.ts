// Simple Exception class to replace @tsed/exceptions
export class Exception extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'Exception';
  }
}

export class ClientException extends Exception {
  constructor(status: number, message: string) {
    super(status, message);
    this.name = 'ClientException';
  }
}

export class ServerException extends Exception {
  constructor(status: number, message: string) {
    super(status, message);
    this.name = 'ServerException';
  }
}

export class HTTPException extends Exception {
  constructor(status: number, message: string) {
    super(status, message);
    this.name = 'HTTPException';
  }
}
