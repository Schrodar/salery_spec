import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

function errorHandler(err: unknown, res: NextApiResponse<ErrorResponse>) {
  // default to 500 server error
  console.error(err);
  return res.status(500).json({
    error: { message: "Internal Server Error", err: err },
    status: 500,
  });
}

type Method =
  | "GET"
  | "DELETE"
  | "HEAD"
  | "OPTIONS"
  | "POST"
  | "PUT"
  | "PATCH"
  | "PURGE"
  | "LINK"
  | "UNLINK";

// Shape of the response when an error is thrown
interface ErrorResponse {
  error: {
    message: string;
    err?: any; // Sent for unhandled errors reulting in 500
  };
  status?: number; // Sent for unhandled errors reulting in 500
}

type ApiMethodHandlers = {
  [key in Uppercase<Method>]?: NextApiHandler;
};

export function apiHandler(handler: ApiMethodHandlers) {
  return async (req: NextApiRequest, res: NextApiResponse<ErrorResponse>) => {
    try {
      // se list of methood i non set undefined
      const method = req.method
        ? (req.method.toUpperCase() as keyof ApiMethodHandlers)
        : undefined;

      // check if handler supports current HTTP method
      if (!method) throw new Error(`No method specified on path ${req.url}!`);

      const methodHandler = handler[method];
      if (!methodHandler)
        throw new Error(`Method ${req.method} Not Allowed on path ${req.url}!`);

      // call method handler
      await methodHandler(req, res);
    } catch (err) {
      // global error handler
      errorHandler(err, res);
    }
  };
}
