import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import httpErrors from "http-errors";

export class JWT {
  /**
   * GenerateToken
   */
  public static async generateToken(email: string) {
    const payload = {
      sub: email,
    };

    const options = {
      expiresIn: "1d",
      issuer: "task-list",
      audience: email,
    };

    return jwt.sign(payload, process.env.JWT_SECRET!, options);
  }

  /**
   * VerifyAccessToken
   */
  public static async verifyAccessToken(req: any, res: Response, next: NextFunction) {
    // CHECK IF TOKEN EXISTS AND IF ITS WELL FORMATTED
    if (!req.headers["authorization"] || !req.headers["authorization"].startsWith("Bearer "))
      next(new httpErrors.Unauthorized());

    // EXTRACT TOKEN
    const token = req?.headers["authorization"]?.replace("Bearer ", "");

    // VERIFY TOKEN
    try {
      const payload = jwt.verify(token!, process.env.JWT_SECRET!);
      res.locals.email = payload.sub;
      next();
    } catch (error: any) {
      if (error.name === "TokenExpiredError") throw next(new httpErrors.Unauthorized(error.message));
      else next(new httpErrors.Unauthorized());
    }
  }
}
