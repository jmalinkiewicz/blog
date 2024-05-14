const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const slugify = require("slugify");

const prisma = new PrismaClient();

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function comparePasswords(password, hash) {
  return bcrypt.compareSync(password, hash);
}

async function getUniqueUserId(req, res) {
  const { username } = req.body;

  let user;
  try {
    user = await prisma.user.findUnique({
      where: {
        username,
      },
      select: {
        password: true,
        id: true,
      },
    });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
  req.body.userId = user.id;
  return user;
}

function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.body.userId = user.userId;
    req.user = user;
    next();
  });
}

function processString(string) {
  try {
    const cleanString = slugify(JSON.stringify(string), {
      lower: true,
      strict: true,
    });
    return cleanString;
  } catch (error) {
    console.log(error);
    return "";
  }
}

module.exports = {
  comparePasswords,
  getUniqueUserId,
  authenticateToken,
  processString,
};

// console.log(hashPassword("/1dG{MQ5Ova>Cj{BOk26Hd)5PU£MZN77|5]mNN%)c:yPD"));
