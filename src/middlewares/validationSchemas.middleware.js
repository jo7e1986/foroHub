import { ZodError } from "zod";

function validationSchemasMiddleware(schema) {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue) => {
          return {
            message: `${issue.path.join(".")} is ${issue.message}`,
          };
        });
        return res
          .status(400)
          .json({ error: "Invalid data", details: errorMessages });
      } else {
        return res.status(500).json({ error: "Internal Server Error" });
      }
    }
  };
}

export default validationSchemasMiddleware;
