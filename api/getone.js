
import User from "../model/userModel.js";
export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  if (req.method === "GET") {
    try {
      const user = await User.findById(id);
      if (!user) return res.status(404).json({ success: false, message: "User not found" });

      res.status(200).json({ success: true, data: user });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}