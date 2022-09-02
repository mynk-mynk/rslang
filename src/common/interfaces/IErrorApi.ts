interface IErrors {
  message: string,
  path: string[],
}

export interface IErrorApi {
  error: {
    errors: IErrors[],
    status: string,
  },
}
