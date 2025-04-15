import User from "../model/userModel.js";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json({ success: true, data: users });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
