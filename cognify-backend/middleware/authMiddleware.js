const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;


    if (!authHeader) {
      console.log("No Authorization header received");
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      console.log("Invalid Authorization header format:", authHeader);
      return res.status(401).json({ message: "Unauthorized: Invalid token format" });
    }

    const token = parts[1];

    if (!token || token === "undefined" || token === "null") {
      console.log("Token missing or malformed:", token);
      return res.status(401).json({ message: "Unauthorized: Token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    // console.log(decoded)

    next(); 

  } catch (err) {
    console.log("JWT verification error:", err.message);
    return res.status(401).json({ message: "Unauthorized: Token expired or invalid" });
  }
};

module.exports = authMiddleware;
