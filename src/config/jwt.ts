import jwt from "jsonwebtoken";

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
}
