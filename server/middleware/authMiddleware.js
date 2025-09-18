// used in authentication and authorization systems
import jwt from "jsonwebtoken";

// Middleware Function Definition: used to protect routes by verifying JWTs before allowing access
const authMiddleware = (req, res, next) => {
  // Extracting Token: If no Authorization header is provided, token will be undefined
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token)
    return res.status(401).json({ error: "Access denied, no token provided" });

  // Verifying Token
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};


export default authMiddleware;